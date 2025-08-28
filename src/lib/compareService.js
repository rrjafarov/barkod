
export class CompareService {
 static STORAGE_KEY = 'compare_list';
 static PRODUCTS_KEY = 'compare_products';

 static getCompareList() {
   if (typeof window === 'undefined') return {};
   try {
     const stored = localStorage.getItem(CompareService.STORAGE_KEY);
     return stored ? JSON.parse(stored) : {};
   } catch (error) {
     console.error('Compare list oxunan zaman xəta:', error);
     return {};
   }
 }

 static saveCompareList(compareData) {
   if (typeof window === 'undefined') return;
   try {
     localStorage.setItem(CompareService.STORAGE_KEY, JSON.stringify(compareData || {}));
   } catch (error) {
     console.error('Compare list saxlanan zaman xəta:', error);
   }
 }

 static getProductsStore() {
   if (typeof window === 'undefined') return {};
   try {
     const stored = localStorage.getItem(CompareService.PRODUCTS_KEY);
     return stored ? JSON.parse(stored) : {};
   } catch (error) {
     console.error('Products store oxunarkən xəta:', error);
     return {};
   }
 }

 static saveProductsStore(productsObj) {
   if (typeof window === 'undefined') return;
   try {
     localStorage.setItem(CompareService.PRODUCTS_KEY, JSON.stringify(productsObj || {}));
   } catch (error) {
     console.error('Products store saxlananda xəta:', error);
   }
 }

 // Məhsulu compare-a əlavə et
 static addToCompare(productObj) {
   if (!productObj || !productObj.id) {
     throw new Error('Product ID düzgün deyil');
   }

   // Məhsulun ilk kateqoriya id-sini tap
   const category = productObj.categories && productObj.categories[0];
   console.log(productObj);
  
   if (!category || !category.id) {
     throw new Error(`Məhsulun categories məlumatı yoxdur: ${productObj.name || productObj.id}`);
   }
   const categoryId = Number(category.id);
   const productId = Number(productObj.id);

   const compareList = CompareService.getCompareList();
   const productsStore = CompareService.getProductsStore();

   // Məhsul artıq compare-da varmı
   if (CompareService.findProductCategory(productId)) {
     throw new Error('Məhsul artıq müqayisədə mövcuddur');
   }

   const cid = String(categoryId);
   if (!compareList[cid]) compareList[cid] = [];
   if (compareList[cid].length >= 3) {
     throw new Error('Bu kateqoriyada maksimum 3 məhsul müqayisə edə bilərsiniz');
   }

   compareList[cid].push(productId);
   productsStore[String(productId)] = productObj;

   CompareService.saveCompareList(compareList);
   CompareService.saveProductsStore(productsStore);

   try {
     if (typeof window !== 'undefined') {
       window.dispatchEvent(new Event('compare_updated'));
     }
   } catch (e) {}

   return true;
 }

 static removeFromCompare(productId) {
   const compareList = CompareService.getCompareList();
   const productsStore = CompareService.getProductsStore();
   const numericProductId = Number(productId);
   let removed = false;

   Object.keys(compareList).forEach(categoryId => {
     const arr = compareList[categoryId] || [];
     const index = arr.indexOf(numericProductId);
     if (index > -1) {
       arr.splice(index, 1);
       if (arr.length === 0) delete compareList[categoryId];
       removed = true;
     }
   });

   if (removed) {
     CompareService.saveCompareList(compareList);

     const stillReferenced = Object.values(compareList).some(arr => Array.isArray(arr) && arr.includes(numericProductId));
     if (!stillReferenced) {
       delete productsStore[String(numericProductId)];
       CompareService.saveProductsStore(productsStore);
     }

     try {
       if (typeof window !== 'undefined') {
         window.dispatchEvent(new Event('compare_updated'));
       }
     } catch (e) {}
   }

   return removed;
 }

 static clearCompareList() {
   CompareService.saveCompareList({});
   CompareService.saveProductsStore({});
   try {
     if (typeof window !== 'undefined') window.dispatchEvent(new Event('compare_updated'));
   } catch (e) {}
   return true;
 }

 static getAllProductIds() {
   const compareList = CompareService.getCompareList();
   const allIds = [];
   Object.values(compareList).forEach(products => {
     if (Array.isArray(products)) products.forEach(id => allIds.push(id));
   });
   return allIds;
 }

 static getCompareCount() {
   return Array.from(new Set(CompareService.getAllProductIds())).length;
 }

 static isInCompare(productId) {
   return CompareService.findProductCategory(productId) !== null;
 }

 static findProductCategory(productId) {
   const compareList = CompareService.getCompareList();
   const numericProductId = Number(productId);
   for (const [categoryId, products] of Object.entries(compareList)) {
     if (Array.isArray(products) && products.includes(numericProductId)) return categoryId;
   }
   return null;
 }

 static async getAllProducts() {
  try {
    const compareList = CompareService.getCompareList();
    console.log("Göndərilən compareList:", compareList);

    const hasAny = Object.keys(compareList).some(k => Array.isArray(compareList[k]) && compareList[k].length > 0);
    if (!hasAny) return [];

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/compare`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ compare_list: compareList }), // 👈 compare_list key-i ilə göndəririk
    });
    if (!response.ok) {
      throw new Error("Compare API xətası: " + response.status);
    }
    
    const result = await response.json();
    console.log("Gonderilen liste uygun mehsullar:", result.compare);
    return Array.isArray(result.compare) ? result.compare : [];
  } catch (error) {
    console.error("getAllProducts xətası:", error);
    return [];
  }
}


 static getCompareDataForAPI() {
   return {
     productIds: CompareService.getAllProductIds(),
     compareList: CompareService.getCompareList()
   };
 }
}

























