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
// import {
//   MdKeyboardDoubleArrowRight,
// } from "react-icons/md";
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
//               <button className="officialPaymentBtn">Sifarişi Rəsmiləşdir</button>
//             </Link>
//             <button>Bir kliklə al</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;
















// src/components/AddToCart.jsx
"use client";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import { TbCurrencyManat } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
// RTK Query hooklarını import et
import {
  useGetCartQuery,
  useRemoveFromCartMutation,
} from "@/redux/cartService";

const AddToCart = () => {
  // RTK Query ilə client-da cart məlumatını çəkmək
  const { data: cartResponse } = useGetCartQuery();
  // remove mutation
  const [removeFromCart] = useRemoveFromCartMutation();

  // count state-in dizaynda istifadə olunursa saxlayırıq, amma burada istifadə edilməyib
  const [count, setCount] = useState(1);
  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  // backend response-dakı struktur: { msg: "...", cart: { count, amount, cart_products: [...] } }
  const cart = cartResponse?.cart || {};
  const cartAllData = cart.cart_products || [];

  return (
    <div className="container">
      <div className="breadCrumb">
        <Link href="/">
          <span>Ana Səhifə</span>
        </Link>
        <strong>
          <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
        </strong>
        <span className="lastChildBread">Səbət</span>
      </div>

      <div className="row">
        <div className="xl-8 lg-8 md-8 sm-12">
          <div className="addToCartProductSection">
            <div className="cartProductSectionTop">
              <span className="cartTitle">Səbət</span>
            </div>
          </div>

          {cartAllData.length === 0 ? (
            <p>Səbətiniz boşdur.</p>
          ) : (
            cartAllData.map((item) => {
              const product = item.product || {};
              const productId = product.id;
              const price = item.price ?? product.price;
              const imageUrl = product.image;
              const name = product.name || "";

              return (
                <div className="cartProduct" key={item.id || productId}>
                  <div className="cartProductLeft">
                    <input type="checkbox" />
                    <div className="cartProductImage">
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={name}
                          width={800}
                          height={800}
                        />
                      )}
                    </div>
                    <div className="cartProductTitle">
                      <h6>{name}</h6>
                    </div>
                  </div>

                  <div className="cartProductRight">
                    <div className="cartPrices">
                      <span className="cartNewPrice">
                        {price} <TbCurrencyManat />
                      </span>
                    </div>

                    {/* Remove butonu: silmə əməliyyatı burada */}
                    <button
                      className="closeCartProduct"
                      onClick={() => {
                        if (productId != null) {
                          removeFromCart(productId);
                        }
                      }}
                    >
                      <IoClose />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="xl-4 lg-4 md-4 sm-12">
          <div className="addToCartPaymentSection">
            <div className="cartPaymentSectionTop">
              <div className="firstCartPaymentSectionTop">
                <span>Məhsul:</span>
              </div>
              <div className="secondCartPaymentSectionTop">
                {/* Dizaynda statik dursa da, buranı da dinamik etmək istəyərsənsə:
                    cart.count və cart.amount istifadə et */}
                <span>iPhone 16 Pro 256 GB Black</span>
                <div className="cartPrices">
                  <span className="cartNewPrice">
                    4599.00 <TbCurrencyManat />
                  </span>
                </div>
              </div>
            </div>
            <div className="discountAndFinalPrice">
              <div className="discountPrice">
                <div className="discountPriceAll">
                  <span>Ümumi məbləğ:</span>
                  <span className="cartNewPrice">
                    3599.00 <TbCurrencyManat />
                  </span>
                </div>
                <div className="discountPricesInner">
                  <span>Endirim:</span>
                  <span className="cartNewPrice">
                    359.00 <TbCurrencyManat />
                  </span>
                </div>
              </div>
              <div className="finalPrice">
                <span>Yekun məbləğ:</span>
                <span className="cartNewPrice">
                  3259.00 <TbCurrencyManat />
                </span>
              </div>
            </div>
          </div>
          <div className="addToCartPaymentButtons">
            <Link href="/checkout">
              <button className="officialPaymentBtn">Sifarişi Rəsmiləşdir</button>
            </Link>
            <button>Bir kliklə al</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
