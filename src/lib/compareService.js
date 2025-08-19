// // lib/compareService.js
// export class CompareService {
//   static STORAGE_KEY = 'compare_list';
//   static PRODUCTS_KEY = 'compare_products';

//   // localStorage-dan compare siyahısını oxu
//   static getCompareList() {
//     if (typeof window === 'undefined') return {};
//     try {
//       const stored = localStorage.getItem(CompareService.STORAGE_KEY);
//       return stored ? JSON.parse(stored) : {};
//     } catch (error) {
//       console.error('Compare list oxunan zaman xəta:', error);
//       return {};
//     }
//   }

//   // localStorage-da compare siyahısını saxla
//   static saveCompareList(compareData) {
//     if (typeof window === 'undefined') return;
//     try {
//       localStorage.setItem(CompareService.STORAGE_KEY, JSON.stringify(compareData || {}));
//     } catch (error) {
//       console.error('Compare list saxlanan zaman xəta:', error);
//     }
//   }

//   // product details store oxu
//   static getProductsStore() {
//     if (typeof window === 'undefined') return {};
//     try {
//       const stored = localStorage.getItem(CompareService.PRODUCTS_KEY);
//       return stored ? JSON.parse(stored) : {};
//     } catch (error) {
//       console.error('Products store oxunarkən xəta:', error);
//       return {};
//     }
//   }

//   // product details store yaz
//   static saveProductsStore(productsObj) {
//     if (typeof window === 'undefined') return;
//     try {
//       localStorage.setItem(CompareService.PRODUCTS_KEY, JSON.stringify(productsObj || {}));
//     } catch (error) {
//       console.error('Products store saxlananda xəta:', error);
//     }
//   }

//   // Məhsulun hansı kateqoriyada olduğunu tap (id ilə)
//   // qaytarır ilk tapılan kateqoriyaId-ni və ya null
//   static findProductCategory(productId) {
//     const compareList = CompareService.getCompareList();
//     const numericProductId = Number(productId);
    
//     for (const [categoryId, products] of Object.entries(compareList)) {
//       if (Array.isArray(products) && products.includes(numericProductId)) {
//         return categoryId;
//       }
//     }
//     return null;
//   }

//   // Məhsulu compare-a əlavə et
//   // firstArg: productObject OR productId; categoryId required
//   static addToCompare(firstArg, categoryId) {
//     // normalize
//     let productId;
//     let productObj = null;

//     if (!categoryId && categoryId !== 0) {
//       throw new Error('Category ID tələb olunur');
//     }

//     if (typeof firstArg === 'object' && firstArg !== null) {
//       productObj = firstArg;
//       productId = Number(firstArg.id);
//     } else {
//       productId = Number(firstArg);
//     }

//     if (!productId) {
//       throw new Error('Product ID düzgün deyil');
//     }

//     const compareList = CompareService.getCompareList();
//     const productsStore = CompareService.getProductsStore();

//     // Məhsul artıq compare-da varmı?
//     if (CompareService.findProductCategory(productId)) {
//       throw new Error('Məhsul artıq müqayisədə mövcuddur');
//     }

//     // Kateqoriya yoxdursa, yarat
//     const cid = String(categoryId);
//     if (!compareList[cid]) {
//       compareList[cid] = [];
//     }

//     // Kateqoriyada 3 məhsul varmı?
//     if (compareList[cid].length >= 3) {
//       throw new Error('Bu kateqoriyada maksimum 3 məhsul müqayisə edə bilərsiniz');
//     }

//     // Məhsulu əlavə et (id)
//     compareList[cid].push(productId);

//     // Əgər productObj verilibsə, productsStore-a qoy
//     if (productObj) {
//       productsStore[String(productId)] = productObj;
//       CompareService.saveProductsStore(productsStore);
//     }

//     CompareService.saveCompareList(compareList);

//     // Event dispatch etsin ki, digər componentlər bilsin
//     try {
//       if (typeof window !== 'undefined') {
//         window.dispatchEvent(new Event('compare_updated'));
//       }
//     } catch (e) {
//       // ignore
//     }

//     return true;
//   }

//   // Məhsulu compare-dan sil
//   static removeFromCompare(productId) {
//     const compareList = CompareService.getCompareList();
//     const productsStore = CompareService.getProductsStore();
//     const numericProductId = Number(productId);
//     let removed = false;

//     Object.keys(compareList).forEach(categoryId => {
//       const arr = compareList[categoryId] || [];
//       const productIndex = arr.indexOf(numericProductId);
//       if (productIndex > -1) {
//         arr.splice(productIndex, 1);
//         if (arr.length === 0) {
//           delete compareList[categoryId];
//         } else {
//           compareList[categoryId] = arr;
//         }
//         removed = true;
//       }
//     });

//     if (removed) {
//       // save compare list
//       CompareService.saveCompareList(compareList);

//       // check if productId still referenced anywhere; if yox, remove from productsStore
//       const stillReferenced = Object.values(compareList).some(arr => Array.isArray(arr) && arr.includes(numericProductId));
//       if (!stillReferenced) {
//         const pidKey = String(numericProductId);
//         if (productsStore[pidKey]) {
//           delete productsStore[pidKey];
//           CompareService.saveProductsStore(productsStore);
//         }
//       }

//       try {
//         if (typeof window !== 'undefined') {
//           window.dispatchEvent(new Event('compare_updated'));
//         }
//       } catch (e) {}
//     }

//     return removed;
//   }

//   // Bütün compare siyahısını təmizlə (həm ids həm product details)
//   static clearCompareList() {
//     CompareService.saveCompareList({});
//     CompareService.saveProductsStore({});
//     try {
//       if (typeof window !== 'undefined') {
//         window.dispatchEvent(new Event('compare_updated'));
//       }
//     } catch (e) {}
//     return true;
//   }

//   // Compare-dəki bütün məhsul ID-lərini al, sıraya görə (kategoriya sırasına görə)
//   static getAllProductIds() {
//     const compareList = CompareService.getCompareList();
//     const allIds = [];
    
//     Object.values(compareList).forEach(products => {
//       if (Array.isArray(products)) {
//         products.forEach(id => allIds.push(id));
//       }
//     });
    
//     return allIds;
//   }

//   // Compare-dəki məhsul sayını al (unique count)
//   static getCompareCount() {
//     const ids = CompareService.getAllProductIds();
//     const unique = Array.from(new Set(ids));
//     return unique.length;
//   }

//   // Məhsulun compare-da olub olmadığını yoxla
//   static isInCompare(productId) {
//     return CompareService.findProductCategory(productId) !== null;
//   }

//   // Compare məhsullarının obyektlərini qaytar (product details localStore-dan)
//   static getAllProducts() {
//     const compareList = CompareService.getCompareList();
//     const productsStore = CompareService.getProductsStore();
//     const result = [];
//     const categories = [];

//     // Keep category order
//     Object.entries(compareList).forEach(([cid, ids]) => {
//       const catProducts = [];
//       if (Array.isArray(ids)) {
//         ids.forEach((id) => {
//           const pidKey = String(id);
//           const prod = productsStore[pidKey];
//           if (prod) {
//             catProducts.push(prod);
//           } else {
//             // if product details missing, push fallback minimal object
//             catProducts.push({ id, name: `Məhsul ${id}`, slug: String(id) });
//           }
//         });
//       }
//       if (catProducts.length > 0) {
//         result.push(...catProducts);
//         // attempt to get category name from first product if present
//         const first = catProducts[0];
//         const name = (first && (first.categoryName || first.category_name || first.category?.name)) || null;
//         categories.push({ id: cid, name });
//       }
//     });

//     return { products: result, categories };
//   }

//   // Backend-ə göndərmək üçün format (əgər lazım olsa)
//   static getCompareDataForAPI() {
//     return {
//       productIds: CompareService.getAllProductIds(),
//       compareList: CompareService.getCompareList()
//     };
//   }
// }
















// lib/compareService.js
export class CompareService {
 static STORAGE_KEY = 'compare_list';
//  static PRODUCTS_KEY = 'compare_products';

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

//  static getProductsStore() {
//    if (typeof window === 'undefined') return {};
//    try {
//      const stored = localStorage.getItem(CompareService.PRODUCTS_KEY);
//      return stored ? JSON.parse(stored) : {};
//    } catch (error) {
//      console.error('Products store oxunarkən xəta:', error);
//      return {};
//    }
//  }

//  static saveProductsStore(productsObj) {
//    if (typeof window === 'undefined') return;
//    try {
//      localStorage.setItem(CompareService.PRODUCTS_KEY, JSON.stringify(productsObj || {}));
//    } catch (error) {
//      console.error('Products store saxlananda xəta:', error);
//    }
//  }

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
  //  const productsStore = CompareService.getProductsStore();

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
  //  productsStore[String(productId)] = productObj;

   CompareService.saveCompareList(compareList);
  //  CompareService.saveProductsStore(productsStore);

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
    return result.compare; // 👈 Serverdən gələn nəticəni qaytarırıq
  } catch (error) {
    console.error("getAllProducts xətası:", error);
    return { products: [], categories: [] }; // fallback
  }
}


 static getCompareDataForAPI() {
   return {
     productIds: CompareService.getAllProductIds(),
     compareList: CompareService.getCompareList()
   };
 }
}

