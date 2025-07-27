// "use client";
// import React, { useState } from "react";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";
// import Link from "next/link";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { GoPlusCircle } from "react-icons/go";
// import { HiOutlineMinusCircle } from "react-icons/hi2";
// import { TbCurrencyManat } from "react-icons/tb";
// import { IoClose } from "react-icons/io5";
// import Image from "next/image";

// const AddToCart = ({ cartData }) => {
//   // console.log("AddToCart component rendered with cartData:", cartData.cart);

//   const cart = cartData?.cart || {};
//   const cartAllData = cart?.cart_products;

//   const [count, setCount] = useState(1); // ✅ Say

//   const increaseCount = () => setCount((prev) => prev + 1);
//   const decreaseCount = () => {
//     if (count > 1) {
//       setCount((prev) => prev - 1);
//     }
//   };
//   return (
//     <div className="container">
//       <div className="breadCrumb">
//         <Link href="/">
//           <span>Ana Səhifə</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         {/* <Link href="#"> */}
//         <span className="lastChildBread">{cart.amount}</span>
//         {/* </Link> */}
//       </div>
//       <div className="row">
//         <div className="xl-8 lg-8 md-8 sm-12">
//           <div className="addToCartProductSection">
//             <div className="cartProductSectionTop">
//               <span className="cartTitle">Səbət</span>
//               {/* <span>( 1 məhsul )</span> */}
//             </div>
//             {/* <div className="cartProductSectionBottom">
//               <button>Hamısını seç</button>
//               <button className="deleteCartItem">
//                 <span>
//                   <RiDeleteBinLine />
//                 </span>{" "}
//                 Seçilənləri sil{" "}
//               </button>
//             </div> */}
//           </div>

//           {cartAllData?.map((item) => (
//             <div className="cartProduct">
//               <div className="cartProductLeft">
//                 <input type="checkbox" />
//                 <div className="cartProductImage">
//                   <Image
//                     // src="/images/iphone16pro.png"
//                     src={item.product.image}
//                     alt="productImage"
//                     width={800}
//                     height={800}
//                   />
//                 </div>
//                 <div className="cartProductTitle">
//                   <h6>{item.product.name}</h6>
//                   {/* <button>
//                   <span>
//                     <GoPlusCircle />
//                   </span>
//                   Zəmanət
//                 </button> */}
//                 </div>
//               </div>

//               <div className="cartProductRight">
//                 {/* <div className="cartCount">
//                   <HiOutlineMinusCircle
//                     onClick={decreaseCount}
//                     className="cartCountIcon"
//                   />
//                   <span>{count}</span>
//                   <GoPlusCircle
//                     onClick={increaseCount}
//                     className="cartCountIcon"
//                   />
//                 </div> */}

//                 <div className="cartPrices">
//                   <span className="cartNewPrice">
//                     {item.product.price} <TbCurrencyManat />
//                   </span>
//                   {/* <span className="cartOldPrice">
//                     3599.00 <TbCurrencyManat />
//                   </span> */}
//                 </div>

//                 <button className="closeCartProduct">
//                   <IoClose />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="xl-4 lg-4 md-4 sm-12">
//           <div className="addToCartPaymentSection">
//             <div className="cartPaymentSectionTop">
//               <div className="firstCartPaymentSectionTop">
//                 <span>Məhsul:</span>
//                 {/* <span>{count} Məhsul</span> */}
//               </div>
//               <div className="secondCartPaymentSectionTop">
//                 <span>
//                   iPhone 16 Pro 256 GB Black
//                   {/* <strong>(1ədəd)</strong> */}
//                 </span>
//                 <div className="cartPrices">
//                   <span className="cartNewPrice">
//                     4599.00 <TbCurrencyManat />
//                   </span>
//                   <span className="cartOldPrice">
//                     3599.00 <TbCurrencyManat />
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="discountAndFinalPrice">
//               <div className="discountPrice">
//                 <div className="discountPriceAll">
//                   <span>Ümumi məbləğ:</span>
//                   <span className="cartNewPrice">
//                     3599.00 <TbCurrencyManat />
//                   </span>
//                 </div>
//                 <div className="discountPricesInner">
//                   <span>Endirim:</span>
//                   <span className="cartNewPrice">
//                     359.00 <TbCurrencyManat />
//                   </span>
//                 </div>
//               </div>
//               <div className="finalPrice">
//                 <span>Yekun məbləğ:</span>
//                 <span className="cartNewPrice">
//                   3259.00 <TbCurrencyManat />
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="addToCartPaymentButtons">
//             <Link href="/checkout">
//               <button className="officialPaymentBtn">
//                 Sifarişi Rəsmiləşdir
//               </button>
//             </Link>
//             <button>Bir kliklə al</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;

//? Son versiya
// "use client";
// import React, { useState } from "react";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";
// import Link from "next/link";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { GoPlusCircle } from "react-icons/go";
// import { HiOutlineMinusCircle } from "react-icons/hi2";
// import { TbCurrencyManat } from "react-icons/tb";
// import { IoClose } from "react-icons/io5";
// import Image from "next/image";

// const AddToCart = ({ cartData }) => {

//   const cart = cartData?.cart || {};
//   const cartAllData = cart?.cart_products;

//   const [count, setCount] = useState(1); // ✅ Say

//   const increaseCount = () => setCount((prev) => prev + 1);
//   const decreaseCount = () => {
//     if (count > 1) {
//       setCount((prev) => prev - 1);
//     }
//   };
//   return (
//     <div className="container">
//       <div className="breadCrumb">
//         <Link href="/">
//           <span>Ana Səhifə</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         <span className="lastChildBread">Səbət</span>
//       </div>

//       <div className="row">
//         <div className="xl-8 lg-8 md-8 sm-12">
//           <div className="addToCartProductSection">
//             <div className="cartProductSectionTop">
//               <span className="cartTitle">Səbət</span>
//             </div>
//           </div>

//           {cartAllData?.map((item) => (
//             <div className="cartProduct">
//               <div className="cartProductLeft">
//                 <input type="checkbox" />
//                 <div className="cartProductImage">
//                   <Image
//                     src={item.product.image}
//                     alt="productImage"
//                     width={800}
//                     height={800}
//                   />
//                 </div>
//                 <div className="cartProductTitle">
//                   <h6>{item.product.name}</h6>
//                 </div>
//               </div>

//               <div className="cartProductRight">
//                 <div className="cartPrices">
//                   <span className="cartNewPrice">
//                     {item.product.price} <TbCurrencyManat />
//                   </span>
//                 </div>

//                 <button className="closeCartProduct">
//                   <IoClose />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="xl-4 lg-4 md-4 sm-12">
//           <div className="addToCartPaymentSection">
//             <div className="cartPaymentSectionTop">
//               <div className="firstCartPaymentSectionTop">
//                 <span>Məhsul:</span>
//               </div>
//               <div className="secondCartPaymentSectionTop">
//                 <span>
//                   iPhone 16 Pro 256 GB Black
//                 </span>
//                 <div className="cartPrices">
//                   <span className="cartNewPrice">
//                     4599.00 <TbCurrencyManat />
//                   </span>
//                   {/* <span className="cartOldPrice">
//                     3599.00 <TbCurrencyManat />
//                   </span> */}
//                 </div>
//               </div>
//             </div>
//             <div className="discountAndFinalPrice">
//               <div className="discountPrice">
//                 <div className="discountPriceAll">
//                   <span>Ümumi məbləğ:</span>
//                   <span className="cartNewPrice">
//                     3599.00 <TbCurrencyManat />
//                   </span>
//                 </div>
//                 <div className="discountPricesInner">
//                   <span>Endirim:</span>
//                   <span className="cartNewPrice">
//                     359.00 <TbCurrencyManat />
//                   </span>
//                 </div>
//               </div>
//               <div className="finalPrice">
//                 <span>Yekun məbləğ:</span>
//                 <span className="cartNewPrice">
//                   3259.00 <TbCurrencyManat />
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="addToCartPaymentButtons">
//             <Link href="/checkout">
//               <button className="officialPaymentBtn">
//                 Sifarişi Rəsmiləşdir
//               </button>
//             </Link>
//             <button>Bir kliklə al</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;

//? Son versiya

// "use client";
// import React, { useState } from "react";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import Link from "next/link";
// import { TbCurrencyManat } from "react-icons/tb";
// import { IoClose } from "react-icons/io5";
// import Image from "next/image";
// import { useRemoveFromCartMutation } from "@/redux/cartService";

// const AddToCart = ({ cartData }) => {
//   const cart = cartData?.cart || {};
//   const cartAllData = cart?.cart_products;

//   const [removeFromCart] = useRemoveFromCartMutation();

//   const [count, setCount] = useState(1);

//   const increaseCount = () => setCount((prev) => prev + 1);
//   const decreaseCount = () => {
//     if (count > 1) {
//       setCount((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="breadCrumb">
//         <Link href="/">
//           <span>Ana Səhifə</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         <span className="lastChildBread">Səbət</span>
//       </div>

//       <div className="row">
//         <div className="xl-8 lg-8 md-8 sm-12">
//           <div className="addToCartProductSection">
//             <div className="cartProductSectionTop">
//               <span className="cartTitle">Səbət</span>
//             </div>
//           </div>

//           {cartAllData?.map((item) => (
//             <div className="cartProduct" key={item.id}>
//               <div className="cartProductLeft">
//                 <input type="checkbox" />
//                 <div className="cartProductImage">
//                   <Image
//                     src={item.product.image}
//                     alt="productImage"
//                     width={800}
//                     height={800}
//                   />
//                 </div>
//                 <div className="cartProductTitle">
//                   <h6>{item.product.name}</h6>
//                 </div>
//               </div>

//               <div className="cartProductRight">
//                 <div className="cartCount">
//                   <HiOutlineMinusCircle
//                     onClick={decreaseCount}
//                     className="cartCountIcon"
//                   />
//                   <span>{count}</span>
//                   <GoPlusCircle
//                     onClick={increaseCount}
//                     className="cartCountIcon"
//                   />
//                 </div>

//                 <div className="cartPrices">
//                   <span className="cartNewPrice">
//                     {item.product.price} <TbCurrencyManat />
//                   </span>
//                 </div>

//                 <button
//                   className="closeCartProduct"
//                   onClick={() => removeFromCart(item.product.id)}
//                 >
//                   <IoClose />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="xl-4 lg-4 md-4 sm-12">
//           <div className="addToCartPaymentSection">
//             <div className="cartPaymentSectionTop">
//               <div className="firstCartPaymentSectionTop">
//                 <span>Məhsul:</span>
//               </div>
//               <div className="secondCartPaymentSectionTop">
//                 <span>iPhone 16 Pro 256 GB Black</span>
//                 <div className="cartPrices">
//                   <span className="cartNewPrice">
//                     4599.00 <TbCurrencyManat />
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="discountAndFinalPrice">
//               <div className="discountPrice">
//                 <div className="discountPriceAll">
//                   <span>Ümumi məbləğ:</span>
//                   <span className="cartNewPrice">
//                     3599.00 <TbCurrencyManat />
//                   </span>
//                 </div>
//                 <div className="discountPricesInner">
//                   <span>Endirim:</span>
//                   <span className="cartNewPrice">
//                     359.00 <TbCurrencyManat />
//                   </span>
//                 </div>
//               </div>
//               <div className="finalPrice">
//                 <span>Yekun məbləğ:</span>
//                 <span className="cartNewPrice">
//                   3259.00 <TbCurrencyManat />
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="addToCartPaymentButtons">
//             <Link href="/checkout">
//               <button className="officialPaymentBtn">
//                 Sifarişi Rəsmiləşdir
//               </button>
//             </Link>
//             <button>Bir kliklə al</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;

// "use client";
// import React, { useState, useEffect } from "react";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import Link from "next/link";
// import { TbCurrencyManat } from "react-icons/tb";
// import { IoClose } from "react-icons/io5";
// import Image from "next/image";
// import {
//   useRemoveFromCartMutation,
//   useIncreaseCartItemMutation,
//   useDecreaseCartItemMutation,
// } from "@/redux/cartService";

// const AddToCart = ({ cartData }) => {
//   const cart = cartData?.cart || {};
//   const cartAllData = cart?.cart_products || [];

//   // Lokal state ile optimistik güncelleme yapıyoruz
//   const [localCartAllData, setLocalCartAllData] = useState(cartAllData);

//   // Parent'ten gelen cartAllData değiştiğinde lokal state'i senkronize et
//   useEffect(() => {
//     setLocalCartAllData(cartAllData);
//   }, [cartAllData]);

//   const [removeFromCart, { isLoading: removingIdLoading }] = useRemoveFromCartMutation();
//   const [increaseCartItem, { isLoading: incLoading }] = useIncreaseCartItemMutation();
//   const [decreaseCartItem, { isLoading: decLoading }] = useDecreaseCartItemMutation();

//   // Özet hesaplama fonksiyonları, localCartAllData kullanılıyor
//   const calculateDiscount = (totalAmount) => {
//     // İndirim mantığınızı buraya ekleyin. Örneğin:
//     // if (totalAmount > 1000) return totalAmount * 0.10;
//     return 0;
//   };

//   const totalAmount = localCartAllData.reduce((sum, item) => {
//     const qty = item.qty || 1;
//     return sum + qty * item.product.price;
//   }, 0);

//   const discountAmount = calculateDiscount(totalAmount);
//   const finalAmount = totalAmount - discountAmount;

//   // Tıklama fonksiyonları: önce lokal state'i güncelle, sonra backend isteği
//   const handleIncrease = async (productId) => {
//     // Optimistik: miktarı hemen artır
//     setLocalCartAllData(prev =>
//       prev.map(item =>
//         item.product.id === productId
//           ? { ...item, qty: (item.qty || 1) + 1 }
//           : item
//       )
//     );
//     try {
//       await increaseCartItem(productId).unwrap();
//       // invalidation/refetch gerçekleşince parent cartData güncellenecek ve useEffect ile local state sync olacak
//     } catch (err) {
//       console.error("Kart artirma hatası:", err);
//       // Hata durumunda parent verisi sync ile geri gelecek
//     }
//   };

//   const handleDecrease = async (productId) => {
//     // Optimistik: miktarı hemen azalt
//     setLocalCartAllData(prev =>
//       prev
//         .map(item => {
//           if (item.product.id === productId) {
//             const newQty = (item.qty || 1) - 1;
//             if (newQty > 0) {
//               return { ...item, qty: newQty };
//             }
//             // newQty <= 0: silme mantığına göre tamamen kaldır
//             return null;
//           }
//           return item;
//         })
//         .filter(Boolean)
//     );
//     try {
//       await decreaseCartItem(productId).unwrap();
//       // invalidation/refetch sonrası sync
//     } catch (err) {
//       console.error("Kart azaltma hatası:", err);
//       // Hata durumunda parent verisi sync ile geri gelecek
//     }
//   };

//   const handleRemove = async (productId) => {
//     // Optimistik: ürünü hemen kaldır
//     setLocalCartAllData(prev =>
//       prev.filter(item => item.product.id !== productId)
//     );
//     try {
//       await removeFromCart(productId).unwrap();
//       // invalidation/refetch sonrası sync
//     } catch (err) {
//       console.error("Kart silme hatası:", err);
//       // Hata durumunda parent verisi sync ile geri gelecek
//     }
//   };

//   // Sepet boşsa:
//   if (!localCartAllData || localCartAllData.length === 0) {
//     return (
//       <div
//         className="container"
//         style={{
//           minHeight: "60vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div className="cartTitleEmpty" style={{ textAlign: "center" }}>
//           <p className="cartTitleEmptyPop">Səbət boşdur</p>
//           <Link href="/">
//             <button className="officialPaymentBtn" style={{ marginTop: "1rem" }}>
//               Ana səhifə
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <div className="breadCrumb">
//         <Link href="/">
//           <span>Ana Səhifə</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         <span className="lastChildBread">Səbət</span>
//       </div>

//       <div className="row">
//         {/* Soldaki ürün listesi */}
//         <div className="xl-8 lg-8 md-8 sm-12">
//           <div className="addToCartProductSection">
//             <div className="cartProductSectionTop">
//               <span className="cartTitle">Səbət</span>
//             </div>
//           </div>

//           {localCartAllData.map((item) => {
//             const prodId = item.product.id;
//             const qty = item.qty || 1;
//             return (
//               <div className="cartProduct" key={prodId}>
//                 <div className="cartProductLeft">
//                   <input type="checkbox" />
//                   <div className="cartProductImage">
//                     {item.product.image ? (
//                       <Image
//                         src={item.product.image}
//                         alt={item.product.name}
//                         width={800}
//                         height={800}
//                       />
//                     ) : null /* default resim göstermiyoruz */}
//                   </div>
//                   <div className="cartProductTitle">
//                     <h6>{item.product.name}</h6>
//                   </div>
//                 </div>

//                 <div className="cartProductRight">
//                   <div className="cartCount">
//                     <button
//                       onClick={() => handleDecrease(prodId)}
//                       className="cartCountIcon"
//                       disabled={decLoading}
//                       style={{ background: "none", border: "none", cursor: "pointer" }}
//                     >
//                       −
//                     </button>
//                     <span style={{ margin: "0 0.5rem" }}>{qty}</span>
//                     <button
//                       onClick={() => handleIncrease(prodId)}
//                       className="cartCountIcon"
//                       disabled={incLoading}
//                       style={{ background: "none", border: "none", cursor: "pointer" }}
//                     >
//                       +
//                     </button>
//                   </div>

//                   <div className="cartPrices">
//                     {/* Solda birim fiyat sabit kalıyor */}
//                     <span className="cartNewPrice">
//                       {item.product.price.toFixed(2)} <TbCurrencyManat />
//                     </span>
//                   </div>

//                   <button
//                     className="closeCartProduct"
//                     onClick={() => handleRemove(prodId)}
//                     disabled={removingIdLoading}
//                     style={{ background: "none", border: "none", cursor: "pointer" }}
//                   >
//                     <IoClose />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Sağdaki özet/ödeme bölümü */}
//         <div className="xl-4 lg-4 md-4 sm-12">
//           <div className="addToCartPaymentSection">
//             <div className="cartPaymentSectionTop">
//               <div className="firstCartPaymentSectionTop">
//                 <span>Məhsul sayı:</span>
//               </div>
//               <div className="secondCartPaymentSectionTop">
//                 <span>{localCartAllData.length} ədəd</span>
//               </div>
//             </div>
//             <div className="discountAndFinalPrice">
//               <div className="discountPrice">
//                 <div className="discountPriceAll">
//                   <span>Ümumi məbləğ:</span>
//                   <span className="cartNewPrice">
//                     {totalAmount.toFixed(2)} <TbCurrencyManat />
//                   </span>
//                 </div>
//                 <div className="discountPricesInner">
//                   <span>Endirim:</span>
//                   <span className="cartNewPrice">
//                     {discountAmount.toFixed(2)} <TbCurrencyManat />
//                   </span>
//                 </div>
//               </div>
//               <div className="finalPrice">
//                 <span>Yekun məbləğ:</span>
//                 <span className="cartNewPrice">
//                   {finalAmount.toFixed(2)} <TbCurrencyManat />
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="addToCartPaymentButtons">
//             <Link href="/checkout">
//               <button className="officialPaymentBtn">
//                 Sifarişi Rəsmiləşdir
//               </button>
//             </Link>
//             <button>Bir kliklə al</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;












// !  09.07.25 bu check olunan mehsulun qiymetini cixartmir sadece butun mehsullari cixariri qiymetlerini
// "use client";
// import React, { useState, useEffect } from "react";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import Link from "next/link";
// import { TbCurrencyManat } from "react-icons/tb";
// import { IoClose } from "react-icons/io5";
// import Image from "next/image";
// import {
//   useRemoveFromCartMutation,
//   useIncreaseCartItemMutation,
//   useDecreaseCartItemMutation,
// } from "@/redux/cartService";

// const AddToCart = ({ cartData, t }) => {
//   const cart = cartData?.cart || {};
//   const cartAllData = cart?.cart_products || [];

//   // Lokal state ile optimistik güncelleme yapıyoruz
//   const [localCartAllData, setLocalCartAllData] = useState(cartAllData);

//   // Helper: priceRaw string veya number gelebilir, number döndürür. Geçersizse NaN döner.
//   const getPriceNum = (priceRaw) => {
//     if (priceRaw == null) return NaN;
//     if (typeof priceRaw === "number") return priceRaw;
//     if (typeof priceRaw === "string") {
//       // parseFloat otomatik olarak "79.00" -> 79, " 79.00" gibi boşluklu deparseler
//       const num = parseFloat(priceRaw);
//       return isNaN(num) ? NaN : num;
//     }
//     // Başka format (object vs.) gelirse burada ek kontrol gerekebilir
//     return NaN;
//   };

//   // Parent'ten gelen cartAllData değiştiğinde lokal state'i senkronize et
//   useEffect(() => {
//     setLocalCartAllData(cartAllData);
//   }, [cartAllData]);

//   const [removeFromCart, { isLoading: removingIdLoading }] =
//     useRemoveFromCartMutation();
//   const [increaseCartItem, { isLoading: incLoading }] =
//     useIncreaseCartItemMutation();
//   const [decreaseCartItem, { isLoading: decLoading }] =
//     useDecreaseCartItemMutation();

//   // Özet hesaplama fonksiyonları, localCartAllData kullanılıyor
//   const calculateDiscount = (totalAmount) => {
//     // İndirim mantığınızı buraya ekleyin. Örneğin:
//     // if (totalAmount > 1000) return totalAmount * 0.10;
//     return 0;
//   };

//   // totalAmount: her item için qty * priceNum
//   const totalAmount = localCartAllData.reduce((sum, item) => {
//     const qty = item.qty || 1;
//     const priceNum = getPriceNum(item.product.price);
//     // Eğer NaN ise 0 kabul edelim
//     return sum + qty * (isNaN(priceNum) ? 0 : priceNum);
//   }, 0);

//   const discountAmount = calculateDiscount(totalAmount);
//   const finalAmount = totalAmount - discountAmount;

//   // Tıklama fonksiyonları: önce lokal state'i güncelle, sonra backend isteği
//   const handleIncrease = async (productId) => {
//     // Optimistik: miktarı hemen artır
//     setLocalCartAllData((prev) =>
//       prev.map((item) =>
//         item.product.id === productId
//           ? { ...item, qty: (item.qty || 1) + 1 }
//           : item
//       )
//     );
//     try {
//       await increaseCartItem(productId).unwrap();
//       // invalidation/refetch gerçekleşince parent cartData güncellenecek ve useEffect ile local state sync olacak
//     } catch (err) {
//       console.error("Kart artirma hatası:", err);
//       // Hata durumunda parent verisi sync ile geri gelecek
//     }
//   };

//   const handleDecrease = async (productId) => {
//     // Optimistik: miktarı hemen azalt
//     setLocalCartAllData((prev) =>
//       prev
//         .map((item) => {
//           if (item.product.id === productId) {
//             const newQty = (item.qty || 1) - 1;
//             if (newQty > 0) {
//               return { ...item, qty: newQty };
//             }
//             // newQty <= 0: silme mantığına göre tamamen kaldır
//             return null;
//           }
//           return item;
//         })
//         .filter(Boolean)
//     );
//     try {
//       await decreaseCartItem(productId).unwrap();
//       // invalidation/refetch sonrası sync
//     } catch (err) {
//       console.error("Kart azaltma hatası:", err);
//       // Hata durumunda parent verisi sync ile geri gelecek
//     }
//   };

//   const handleRemove = async (productId) => {
//     // Optimistik: ürünü hemen kaldır
//     setLocalCartAllData((prev) =>
//       prev.filter((item) => item.product.id !== productId)
//     );
//     try {
//       await removeFromCart(productId).unwrap();
//       // invalidation/refetch sonrası sync
//     } catch (err) {
//       console.error("Kart silme hatası:", err);
//       // Hata durumunda parent verisi sync ile geri gelecek
//     }
//   };

//   // Sepet boşsa:
//   if (!localCartAllData || localCartAllData.length === 0) {
//     return (
//       <div
//         className="container"
//         style={{
//           minHeight: "60vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div className="cartTitleEmpty" style={{ textAlign: "center" }}>
//           <p className="cartTitleEmptyPop">{t?.basketempty || "Səbət boşdur"}</p>
//           <Link href="/">
//             <button
//               className="officialPaymentBtn"
//               style={{ marginTop: "1rem" }}
//             >
//               {t?.homebreadcrumbs || "Ana Sehife"}
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <div className="breadCrumb">
//         <Link href="/">
//           <span>{t?.homebreadcrumbs}</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         <span className="lastChildBread">{t?.basket || "Səbət"}</span>
//       </div>

//       <div className="row">
//         {/* Soldaki ürün listesi */}
//         <div className="xl-8 lg-8 md-8 sm-12">
//           <div className="addToCartProductSection">
//             <div className="cartProductSectionTop">
//               <span className="cartTitle">{t?.basket || "Səbət"}</span>
//             </div>
//           </div>

//           {localCartAllData.map((item) => {
//             const prodId = item.product.id;
//             const qty = item.qty || 1;
//             // Her item için priceNum ve formatted string
//             const priceNum = getPriceNum(item.product.price);
//             // Eğer geçerliyse iki ondalık, değilse null
//             const priceStr = !isNaN(priceNum) ? priceNum.toFixed(2) : null;

//             return (
//               <div className="cartProduct" key={prodId}>
//                 <div className="cartProductLeft">
//                   <input type="checkbox" />
//                   <div className="cartProductImage">
//                     {item.product.image ? (
//                       <Image
//                         src={item.product.image}
//                         alt={item.product.name}
//                         width={800}
//                         height={800}
//                       />
//                     ) : null}
//                   </div>
//                   <div className="cartProductTitle">
//                     <h6>{item.product.name}</h6>
//                   </div>
//                 </div>

//                 <div className="cartProductRight">
//                   <div className="cartCount">
//                     <button
//                       onClick={() => handleDecrease(prodId)}
//                       className="cartCountIcon"
//                       disabled={decLoading}
//                       style={{
//                         background: "none",
//                         border: "none",
//                         cursor: "pointer",
//                       }}
//                     >
//                       −
//                     </button>
//                     <span style={{ margin: "0 0.5rem" }}>{qty}</span>
//                     <button
//                       onClick={() => handleIncrease(prodId)}
//                       className="cartCountIcon"
//                       disabled={incLoading}
//                       style={{
//                         background: "none",
//                         border: "none",
//                         cursor: "pointer",
//                       }}
//                     >
//                       +
//                     </button>
//                   </div>

//                   <div className="cartPrices">
//                     {/* Solda birim fiyat sabit kalıyor; artık parse ve NaN kontrolü var */}
//                     <span className="cartNewPrice">
//                       {priceStr ?? "—"} <TbCurrencyManat />
//                     </span>
//                   </div>

//                   <button
//                     className="closeCartProduct"
//                     onClick={() => handleRemove(prodId)}
//                     disabled={removingIdLoading}
//                     style={{
//                       background: "none",
//                       border: "none",
//                       cursor: "pointer",
//                     }}
//                   >
//                     <IoClose />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Sağdaki özet/ödeme bölümü */}
//         <div className="xl-4 lg-4 md-4 sm-12">
//           <div className="addToCartPaymentSection">
//             <div className="cartPaymentSectionTop">
//               <div className="firstCartPaymentSectionTop">
//                 <span>{t?.countquantity || "Say"}:</span>
//               </div>
//               <div className="secondCartPaymentSectionTop">
//                 <span>{localCartAllData.length} {t?.unit}</span>
//               </div>
//             </div>
//             <div className="discountAndFinalPrice">
//               <div className="discountPrice">
//                 <div className="discountPriceAll">
//                   <span>{t?.totalamount || "total amount"}:</span>
//                   <span className="cartNewPrice">
//                     {/* totalAmount sayısal, .toFixed ile */}
//                     {totalAmount.toFixed(2)} <TbCurrencyManat />
//                   </span>
//                 </div>
//                 <div className="discountPricesInner">
//                   <span>{t?.discamount || "Endrimli"}:</span>
//                   <span className="cartNewPrice">
//                     {discountAmount.toFixed(2)} <TbCurrencyManat />
//                   </span>
//                 </div>
//               </div>
//               <div className="finalPrice">
//                 <span>{t?.finalamount || "Yekun məbləğ"}:</span>
//                 <span className="cartNewPrice">
//                   {finalAmount.toFixed(2)} <TbCurrencyManat />
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="addToCartPaymentButtons">
//             <Link href="/checkout">
//               <button className="officialPaymentBtn">
//                 {t?.orderbtn || "order place"}
//               </button>
//             </Link>
//             <button>{t?.oneclickpay	 || "Bir kliklə al"}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;
// !  09.07.25 bu check olunan mehsulun qiymetini cixartmir sadece butun mehsullari cixariri qiymetlerini









"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import { TbCurrencyManat } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";                // ← EKLENDİ
import {
  useRemoveFromCartMutation,
  useIncreaseCartItemMutation,
  useDecreaseCartItemMutation,
} from "@/redux/cartService";

const AddToCart = ({ cartData, t }) => {
  const router = useRouter();                               // ← EKLENDİ

  const cart = cartData?.cart || {};
  const cartAllData = cart?.cart_products || [];

  // Lokal state ile optimistik güncelleme yapıyoruz
  const [localCartAllData, setLocalCartAllData] = useState(cartAllData);

  // Parent'ten gelen cartAllData değiştiğinde lokal state'i senkronize et
  useEffect(() => {
    setLocalCartAllData(cartAllData);
  }, [cartAllData]);

  const [removeFromCart, { isLoading: removingIdLoading }] =
    useRemoveFromCartMutation();
  const [increaseCartItem, { isLoading: incLoading }] =
    useIncreaseCartItemMutation();
  const [decreaseCartItem, { isLoading: decLoading }] =
    useDecreaseCartItemMutation();

  // Helper: priceRaw string veya number gelebilir, number döndürür. Geçersizse NaN döner.
  const getPriceNum = (priceRaw) => {
    if (priceRaw == null) return NaN;
    if (typeof priceRaw === "number") return priceRaw;
    if (typeof priceRaw === "string") {
      const num = parseFloat(priceRaw);
      return isNaN(num) ? NaN : num;
    }
    return NaN;
  };

  // Özet hesaplama fonksiyonları, localCartAllData kullanılıyor
  const calculateDiscount = (totalAmount) => {
    // İndirim mantığınızı buraya ekleyin. Örneğin:
    // if (totalAmount > 1000) return totalAmount * 0.10;
    return 0;
  };

  // totalAmount: bütün ürünler için qty * priceNum
  const totalAmount = localCartAllData.reduce((sum, item) => {
    const qty = item.qty || 1;
    const priceNum = getPriceNum(item.product.price);
    return sum + qty * (isNaN(priceNum) ? 0 : priceNum);
  }, 0);

  const discountAmount = calculateDiscount(totalAmount);
  const finalAmount = totalAmount - discountAmount;

  // Tıklama fonksiyonları: önce lokal state'i güncelle, sonra backend isteği
  const handleIncrease = async (productId) => {
    setLocalCartAllData((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      )
    );
    try {
      await increaseCartItem(productId).unwrap();
    } catch (err) {
      console.error("Kart artirma hatası:", err);
    }
  };

  const handleDecrease = async (productId) => {
    setLocalCartAllData((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = (item.qty || 1) - 1;
            if (newQty > 0) return { ...item, qty: newQty };
            return null;
          }
          return item;
        })
        .filter(Boolean)
    );
    try {
      await decreaseCartItem(productId).unwrap();
    } catch (err) {
      console.error("Kart azaltma hatası:", err);
    }
  };

  const handleRemove = async (productId) => {
    setLocalCartAllData((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
    try {
      await removeFromCart(productId).unwrap();
    } catch (err) {
      console.error("Kart silme hatası:", err);
    }
  };

  if (!localCartAllData || localCartAllData.length === 0) {
    return (
      <div
        className="container"
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="cartTitleEmpty" style={{ textAlign: "center" }}>
          <p className="cartTitleEmptyPop">
            {t?.basketempty || "Səbət boşdur"}
          </p>
          <Link href="/">
            <button
              className="officialPaymentBtn"
              style={{ marginTop: "1rem" }}
            >
              {t?.homebreadcrumbs || "Ana Sehife"}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Bütün məhsul ID-lərini al
  const allProductIds = localCartAllData.map(item => item.product.id);

  return (
    <div className="container">
      <div className="breadCrumb">
        <Link href="/">
          <span>{t?.homebreadcrumbs}</span>
        </Link>
        <strong>
          <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
        </strong>
        <span className="lastChildBread">{t?.basket || "Səbət"}</span>
      </div>

      <div className="row">
        <div className="xl-8 lg-8 md-8 sm-12">
          <div className="addToCartProductSection">
            <div className="cartProductSectionTop">
              <span className="cartTitle">{t?.basket || "Səbət"}</span>
            </div>
          </div>

          {localCartAllData.map((item) => {
            const prodId = item.product.id;
            const qty = item.qty || 1;
            const priceNum = getPriceNum(item.product.price);
            const priceStr = !isNaN(priceNum) ? priceNum.toFixed(2) : null;

            return (
              <div className="cartProduct" key={prodId}>
                <div className="cartProductLeft">
                  <div className="cartProductImage">
                    {item.product.image ? (
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={800}
                        height={800}
                      />
                    ) : null}
                  </div>
                  <div className="cartProductTitle">
                    <h6>{item.product.name}</h6>
                  </div>
                </div>

                <div className="cartProductRight">
                  <div className="cartCount">
                    <button
                      onClick={() => handleDecrease(prodId)}
                      className="cartCountIcon"
                      disabled={decLoading}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      −
                    </button>
                    <span style={{ margin: "0 0.5rem" }}>{qty}</span>
                    <button
                      onClick={() => handleIncrease(prodId)}
                      className="cartCountIcon"
                      disabled={incLoading}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>

                  <div className="cartPrices">
                    <span className="cartNewPrice">
                      {priceStr ?? "—"} <TbCurrencyManat />
                    </span>
                  </div>

                  <button
                    className="closeCartProduct"
                    onClick={() => handleRemove(prodId)}
                    disabled={removingIdLoading}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <IoClose />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="xl-4 lg-4 md-4 sm-12">
          <div className="addToCartPaymentSection">
            <div className="cartPaymentSectionTop">
              <div className="firstCartPaymentSectionTop">
                <span>{t?.countquantity || "Say"}:</span>
              </div>
              <div className="secondCartPaymentSectionTop">
                <span>
                  {localCartAllData.length} {t?.unit}
                </span>
              </div>
            </div>
            <div className="discountAndFinalPrice">
              <div className="discountPrice">
                <div className="discountPriceAll">
                  <span>{t?.totalamount || "total amount"}:</span>
                  <span className="cartNewPrice">
                    {totalAmount.toFixed(2)} <TbCurrencyManat />
                  </span>
                </div>
                <div className="discountPricesInner">
                  <span>{t?.discamount || "Endrimli"}:</span>
                  <span className="cartNewPrice">
                    {discountAmount.toFixed(2)} <TbCurrencyManat />
                  </span>
                </div>
              </div>
              <div className="finalPrice">
                <span>{t?.finalamount || "Yekun məbləğ"}:</span>
                <span className="cartNewPrice">
                  {finalAmount.toFixed(2)} <TbCurrencyManat />
                </span>
              </div>
            </div>
          </div>
          <div className="addToCartPaymentButtons">
            <button
              onClick={() =>
                router.push(`/checkout?items=${allProductIds.join(",")}`)
              }
              className="officialPaymentBtn"
            >
              {t?.orderbtn || "order place"}
            </button>
            <button>{t?.oneclickpay || "Bir kliklə al"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;












// ? burda checkout var legv edecem yuxarida
// "use client";
// import React, { useState, useEffect } from "react";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import Link from "next/link";
// import { TbCurrencyManat } from "react-icons/tb";
// import { IoClose } from "react-icons/io5";
// import Image from "next/image";
// import { useRouter } from "next/navigation";                // ← EKLENDİ
// import {
//   useRemoveFromCartMutation,
//   useIncreaseCartItemMutation,
//   useDecreaseCartItemMutation,
// } from "@/redux/cartService";

// const AddToCart = ({ cartData, t }) => {
//   const router = useRouter();                               // ← EKLENDİ

//   const cart = cartData?.cart || {};
//   const cartAllData = cart?.cart_products || [];

//   // Lokal state ile optimistik güncelleme yapıyoruz
//   const [localCartAllData, setLocalCartAllData] = useState(cartAllData);

//   // Yeni: hangi ürünün seçili olduğunu takip edelim
//   const [checkedItems, setCheckedItems] = useState([]);

//   // Parent'ten gelen cartAllData değiştiğinde lokal state'i senkronize et
//   useEffect(() => {
//     setLocalCartAllData(cartAllData);
//   }, [cartAllData]);

//   const [removeFromCart, { isLoading: removingIdLoading }] =
//     useRemoveFromCartMutation();
//   const [increaseCartItem, { isLoading: incLoading }] =
//     useIncreaseCartItemMutation();
//   const [decreaseCartItem, { isLoading: decLoading }] =
//     useDecreaseCartItemMutation();

//   // Helper: priceRaw string veya number gelebilir, number döndürür. Geçersizse NaN döner.
//   const getPriceNum = (priceRaw) => {
//     if (priceRaw == null) return NaN;
//     if (typeof priceRaw === "number") return priceRaw;
//     if (typeof priceRaw === "string") {
//       const num = parseFloat(priceRaw);
//       return isNaN(num) ? NaN : num;
//     }
//     return NaN;
//   };

//   // Özet hesaplama fonksiyonları, localCartAllData kullanılıyor
//   const calculateDiscount = (totalAmount) => {
//     // İndirim mantığınızı buraya ekleyin. Örneğin:
//     // if (totalAmount > 1000) return totalAmount * 0.10;
//     return 0;
//   };

//   // totalAmount: sadece seçili ürünler için qty * priceNum
//   const totalAmount = localCartAllData.reduce((sum, item) => {
//     if (!checkedItems.includes(item.product.id)) return sum;
//     const qty = item.qty || 1;
//     const priceNum = getPriceNum(item.product.price);
//     return sum + qty * (isNaN(priceNum) ? 0 : priceNum);
//   }, 0);

//   const discountAmount = calculateDiscount(totalAmount);
//   const finalAmount = totalAmount - discountAmount;

//   // Checkbox toggle handler
//   const handleCheckboxChange = (productId) => {
//     setCheckedItems((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   // Tıklama fonksiyonları: önce lokal state'i güncelle, sonra backend isteği
//   const handleIncrease = async (productId) => {
//     setLocalCartAllData((prev) =>
//       prev.map((item) =>
//         item.product.id === productId
//           ? { ...item, qty: (item.qty || 1) + 1 }
//           : item
//       )
//     );
//     try {
//       await increaseCartItem(productId).unwrap();
//     } catch (err) {
//       console.error("Kart artirma hatası:", err);
//     }
//   };

//   const handleDecrease = async (productId) => {
//     setLocalCartAllData((prev) =>
//       prev
//         .map((item) => {
//           if (item.product.id === productId) {
//             const newQty = (item.qty || 1) - 1;
//             if (newQty > 0) return { ...item, qty: newQty };
//             return null;
//           }
//           return item;
//         })
//         .filter(Boolean)
//     );
//     try {
//       await decreaseCartItem(productId).unwrap();
//     } catch (err) {
//       console.error("Kart azaltma hatası:", err);
//     }
//   };

//   const handleRemove = async (productId) => {
//     setLocalCartAllData((prev) =>
//       prev.filter((item) => item.product.id !== productId)
//     );
//     setCheckedItems((prev) => prev.filter((id) => id !== productId));
//     try {
//       await removeFromCart(productId).unwrap();
//     } catch (err) {
//       console.error("Kart silme hatası:", err);
//     }
//   };

//   if (!localCartAllData || localCartAllData.length === 0) {
//     return (
//       <div
//         className="container"
//         style={{
//           minHeight: "60vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div className="cartTitleEmpty" style={{ textAlign: "center" }}>
//           <p className="cartTitleEmptyPop">
//             {t?.basketempty || "Səbət boşdur"}
//           </p>
//           <Link href="/">
//             <button
//               className="officialPaymentBtn"
//               style={{ marginTop: "1rem" }}
//             >
//               {t?.homebreadcrumbs || "Ana Sehife"}
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <div className="breadCrumb">
//         <Link href="/">
//           <span>{t?.homebreadcrumbs}</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         <span className="lastChildBread">{t?.basket || "Səbət"}</span>
//       </div>

//       <div className="row">
//         <div className="xl-8 lg-8 md-8 sm-12">
//           <div className="addToCartProductSection">
//             <div className="cartProductSectionTop">
//               <span className="cartTitle">{t?.basket || "Səbət"}</span>
//             </div>
//           </div>

//           {localCartAllData.map((item) => {
//             const prodId = item.product.id;
//             const qty = item.qty || 1;
//             const priceNum = getPriceNum(item.product.price);
//             const priceStr = !isNaN(priceNum) ? priceNum.toFixed(2) : null;

//             return (
//               <div className="cartProduct" key={prodId}>
//                 <div className="cartProductLeft">
//                   <input
//                     type="checkbox"
//                     checked={checkedItems.includes(prodId)}
//                     onChange={() => handleCheckboxChange(prodId)}
//                   />
//                   <div className="cartProductImage">
//                     {item.product.image ? (
//                       <Image
//                         src={item.product.image}
//                         alt={item.product.name}
//                         width={800}
//                         height={800}
//                       />
//                     ) : null}
//                   </div>
//                   <div className="cartProductTitle">
//                     <h6>{item.product.name}</h6>
//                   </div>
//                 </div>

//                 <div className="cartProductRight">
//                   <div className="cartCount">
//                     <button
//                       onClick={() => handleDecrease(prodId)}
//                       className="cartCountIcon"
//                       disabled={decLoading}
//                       style={{
//                         background: "none",
//                         border: "none",
//                         cursor: "pointer",
//                       }}
//                     >
//                       −
//                     </button>
//                     <span style={{ margin: "0 0.5rem" }}>{qty}</span>
//                     <button
//                       onClick={() => handleIncrease(prodId)}
//                       className="cartCountIcon"
//                       disabled={incLoading}
//                       style={{
//                         background: "none",
//                         border: "none",
//                         cursor: "pointer",
//                       }}
//                     >
//                       +
//                     </button>
//                   </div>

//                   <div className="cartPrices">
//                     {/* Sadece işaretli ürünün fiyatı görünecek */}
//                     {checkedItems.includes(prodId) && (
//                       <span className="cartNewPrice">
//                         {priceStr ?? "—"} <TbCurrencyManat />
//                       </span>
//                     )}
//                   </div>

//                   <button
//                     className="closeCartProduct"
//                     onClick={() => handleRemove(prodId)}
//                     disabled={removingIdLoading}
//                     style={{
//                       background: "none",
//                       border: "none",
//                       cursor: "pointer",
//                     }}
//                   >
//                     <IoClose />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="xl-4 lg-4 md-4 sm-12">
//           <div className="addToCartPaymentSection">
//             <div className="cartPaymentSectionTop">
//               <div className="firstCartPaymentSectionTop">
//                 <span>{t?.countquantity || "Say"}:</span>
//               </div>
//               <div className="secondCartPaymentSectionTop">
//                 <span>
//                   {checkedItems.length} {t?.unit}
//                 </span>
//               </div>
//             </div>
//             <div className="discountAndFinalPrice">
//               <div className="discountPrice">
//                 <div className="discountPriceAll">
//                   <span>{t?.totalamount || "total amount"}:</span>
//                   <span className="cartNewPrice">
//                     {totalAmount.toFixed(2)} <TbCurrencyManat />
//                   </span>
//                 </div>
//                 <div className="discountPricesInner">
//                   <span>{t?.discamount || "Endrimli"}:</span>
//                   <span className="cartNewPrice">
//                     {discountAmount.toFixed(2)} <TbCurrencyManat />
//                   </span>
//                 </div>
//               </div>
//               <div className="finalPrice">
//                 <span>{t?.finalamount || "Yekun məbləğ"}:</span>
//                 <span className="cartNewPrice">
//                   {finalAmount.toFixed(2)} <TbCurrencyManat />
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="addToCartPaymentButtons">
//             {/* ↓↓↓ BURAYI DEĞİŞTİRDİK ↓↓↓ */}
//             <button
//               onClick={() =>
//                 router.push(`/checkout?items=${checkedItems.join(",")}`)
//               }
//               className="officialPaymentBtn"
//             >
//               {t?.orderbtn || "order place"}
//             </button>
//             <button>{t?.oneclickpay || "Bir kliklə al"}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;
