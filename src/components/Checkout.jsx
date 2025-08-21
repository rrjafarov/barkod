// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import CheckoutForm from "./CheckoutForm";
// import { useGetCartQuery } from "@/redux/cartService";

// const Checkout = ({t, deliveryData}) => {
//   console.log(deliveryData , "pinokio")
//   const searchParams = useSearchParams();
//   const itemsParam = searchParams.get("items") || "";
//   const selectedIds = itemsParam
//     .split(",")
//     .filter(Boolean)
//     .map((id) => Number(id));

//   // RTK Query ilə bütün sepeti çekiyoruz
//   const { data: cartData } = useGetCartQuery();
//   const products = cartData?.cart?.cart_products || [];

//   // Sadece seçilmiş ürünler
//   const selectedProducts = products.filter((p) =>
//     selectedIds.includes(p.product.id)
//   );

//   // Delivery calculation state
//   const [deliveryInfo, setDeliveryInfo] = useState({
//     price: "00.00",
//     isFree: false
//   });

//   // Calculate total amount
//   const totalAmount = selectedProducts.reduce(
//     (sum, item) =>
//       sum + (item.qty || 1) * (parseFloat(item.product.price) || 0),
//     0
//   );

//   // Function to update delivery info based on selected address/city
//   const updateDeliveryInfo = (selectedCityData) => {
//     if (!selectedCityData) {
//       setDeliveryInfo({ price: "00.00", isFree: false });
//       return;
//     }

//     const cityLimit = parseFloat(selectedCityData.limit) || 0;
//     const cityPrice = parseFloat(selectedCityData.price) || 0;

//     if (totalAmount >= cityLimit) {
//       setDeliveryInfo({ price: "00.00", isFree: true });
//     } else {
//       setDeliveryInfo({ 
//         price: cityPrice.toFixed(2), 
//         isFree: false 
//       });
//     }
//   };

//   // Sepette hiç ürün yoksa basit mesaj
//   if (selectedProducts.length === 0) {
//     return <p>product not found.</p>;
//   }

//   return (
//     <div className="container">
//       <div className="checkout">
//         <span>{t?.orderbtn}</span>
//         <div className="checkoutItems">
//           <div className="row">
//             <div className="xl-4 lg-4 md-4 sm-12" id="leftSectionCheckout">
//               {selectedProducts.map((item) => (
//                 <div className="checkoutLeft" key={item.product.id}>
//                   <div className="checkoutLeftImage">
//                     <Image
//                       src={item.product.image}
//                       alt={item.product.name}
//                       width={200}
//                       height={200}
//                     />
//                   </div>
//                   <div className="checkoutLeftContent">
//                     <h4>{item.product.name}</h4>
//                     <span>
//                       {(parseFloat(item.product.price) || 0).toFixed(2)} AZN
//                     </span>
//                   </div>
//                 </div>
//               ))}

//               <div className="checkoutLeftPrices">
//                 <div className="checkoutLeftPriceItems">
//                   <div className="checkoutLeftPriceItem">
//                     <p>{t?.totalamount || "Total amount " }</p>
//                     <span>
//                       {totalAmount.toFixed(2)} AZN
//                     </span>
//                   </div>
//                   <div className="checkoutLeftPriceItem">
//                     <p>{t?.delivery || "Delivery "}</p>
//                     <span>
//                       {deliveryInfo.isFree ? (t?.freedell || "Pulsuz çatdırılma")  : `${deliveryInfo.price} AZN`}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="totalPriceCheckout">
//                   <p>{t?.finalamount || "Yekun"}:</p>
//                   <span>
//                     {(totalAmount + (deliveryInfo.isFree ? 0 : parseFloat(deliveryInfo.price))).toFixed(2)} AZN
//                   </span>
//                 </div>
//               </div>
              
//             </div>
//             <div className="xl-8 lg-8 md-8 sm-12">
//               <div className="checkoutRight">
//                 <CheckoutForm 
//                   t={t} 
//                   deliveryData={deliveryData} 
//                   products={selectedProducts}
//                   totalAmount={totalAmount}
//                   onDeliveryUpdate={updateDeliveryInfo}
//                   deliveryInfo={deliveryInfo}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;




























// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import CheckoutForm from "./CheckoutForm";
// import { useGetCartQuery } from "@/redux/cartService";

// const Checkout = ({t, deliveryData}) => {
//   console.log(deliveryData , "pinokio")
//   const searchParams = useSearchParams();
//   const itemsParam = searchParams.get("items") || "";
//   const selectedIds = itemsParam
//     .split(",")
//     .filter(Boolean)
//     .map((id) => Number(id));

//   // RTK Query ilə bütün sepeti çekiyoruz
//   const { data: cartData } = useGetCartQuery();
//   const products = cartData?.cart?.cart_products || [];

//   // Sadece seçilmiş ürünler
//   const selectedProducts = products.filter((p) =>
//     selectedIds.includes(p.product.id)
//   );

//   // Delivery calculation state
//   const [deliveryInfo, setDeliveryInfo] = useState({
//     price: "00.00",
//     isFree: false
//   });

//   // Calculate total amount
//   const totalAmount = selectedProducts.reduce(
//     (sum, item) =>
//       sum + (item.qty || 1) * (parseFloat(item.product.price) || 0),
//     0
//   );

//   // Function to update delivery info based on selected address/city
//   const updateDeliveryInfo = (selectedCityData) => {
//     if (!selectedCityData) {
//       setDeliveryInfo({ price: "00.00", isFree: false });
//       return;
//     }

//     const cityLimit = parseFloat(selectedCityData.limit) || 0;
//     const cityPrice = parseFloat(selectedCityData.price) || 0;

//     if (totalAmount >= cityLimit) {
//       setDeliveryInfo({ price: "00.00", isFree: true });
//     } else {
//       setDeliveryInfo({ 
//         price: cityPrice.toFixed(2), 
//         isFree: false 
//       });
//     }
//   };

//   // Sepette hiç ürün yoksa basit mesaj
//   if (selectedProducts.length === 0) {
//     return <p>product not found.</p>;
//   }

//   return (
//     <div className="container">
//       <div className="checkout">
//         <span>{t?.orderbtn}</span>
//         <div className="checkoutItems">
//           <div className="row">
//             <div className="xl-4 lg-4 md-4 sm-12" id="leftSectionCheckout">
//               {selectedProducts.map((item) => (
//                 <div className="checkoutLeft" key={item.product.id}>
//                   <div className="checkoutLeftImage">
//                     <Image
//                       src={item.product.image}
//                       alt={item.product.name}
//                       width={200}
//                       height={200}
//                     />
//                   </div>
//                   <div className="checkoutLeftContent">
//                     <h4>{item.product.name}</h4>
//                     <span>
//                       {(parseFloat(item.product.price) || 0).toFixed(2)} AZN
//                     </span>
//                   </div>
//                 </div>
//               ))}

//               <div className="checkoutLeftPrices">
//                 <div className="checkoutLeftPriceItems">
//                   <div className="checkoutLeftPriceItem">
//                     <p>{t?.totalamount || "Total amount " }</p>
//                     <span>
//                       {totalAmount.toFixed(2)} AZN
//                     </span>
//                   </div>
//                   <div className="checkoutLeftPriceItem">
//                     <p>{t?.delivery || "Delivery "}</p>
//                     <span>
//                       {deliveryInfo.isFree ? (t?.freedell || "Pulsuz çatdırılma")  : `${deliveryInfo.price} AZN`}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="totalPriceCheckout">
//                   <p>{t?.finalamount || "Yekun"}:</p>
//                   <span>
//                     {(totalAmount + (deliveryInfo.isFree ? 0 : parseFloat(deliveryInfo.price))).toFixed(2)} AZN
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="xl-8 lg-8 md-8 sm-12">
//               <div className="checkoutRight">
//                 <CheckoutForm 
//                   t={t} 
//                   deliveryData={deliveryData} 
//                   products={selectedProducts}
//                   totalAmount={totalAmount}
//                   onDeliveryUpdate={updateDeliveryInfo}
//                   deliveryInfo={deliveryInfo} 
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;





// ? BITTIMI DAYI ? (<><><><>)

"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import CheckoutForm from "./CheckoutForm";
import { useGetCartQuery } from "@/redux/cartService";

const Checkout = ({t, deliveryData}) => {
  console.log(deliveryData , "pinokio")
  const searchParams = useSearchParams();
  const itemsParam = searchParams.get("items") || "";
  const selectedIds = itemsParam
    .split(",")
    .filter(Boolean)
    .map((id) => Number(id));

  // RTK Query ilə bütün sepeti çekiyoruz
  const { data: cartData } = useGetCartQuery();
  const products = cartData?.cart?.cart_products || [];

  // Sadece seçilmiş ürünler
  const selectedProducts = products.filter((p) =>
    selectedIds.includes(p.product.id)
  );

  // Delivery calculation state
  const [deliveryInfo, setDeliveryInfo] = useState({
    price: "00.00",
    isFree: false
  });

  // Calculate total amount - useMemo ilə cache edilir
  const totalAmount = useMemo(() => {
    return selectedProducts.reduce(
      (sum, item) =>
        sum + (item.qty || 1) * (parseFloat(item.product.price) || 0),
      0
    );
  }, [selectedProducts]);

  // Calculate payment total (product + delivery if not free)
  const paymentTotal = useMemo(() => {
    const delivery = deliveryInfo?.isFree ? 0 : parseFloat(deliveryInfo?.price || 0);
    const total = parseFloat(totalAmount || 0) + delivery;
    return parseFloat(total.toFixed(2));
  }, [totalAmount, deliveryInfo]);

  // useCallback ilə funksiya cache edilir
  const updateDeliveryInfo = useCallback((selectedCityData) => {
    if (!selectedCityData) {
      setDeliveryInfo({ price: "00.00", isFree: false });
      return;
    }

    const cityLimit = parseFloat(selectedCityData.limit) || 0;
    const cityPrice = parseFloat(selectedCityData.price) || 0;

    if (totalAmount >= cityLimit) {
      setDeliveryInfo({ price: "00.00", isFree: true });
    } else {
      setDeliveryInfo({ 
        price: cityPrice.toFixed(2), 
        isFree: false 
      });
    }
  }, [totalAmount]); // Yalnız totalAmount dəyişəndə funksiya yenilənir

  // Sepette hiç ürün yoksa basit mesaj
  if (selectedProducts.length === 0) {
    return <p>product not found.</p>;
  }

  return (
    <div className="container">
      <div className="checkout">
        <span>{t?.orderbtn}</span>
        <div className="checkoutItems">
          <div className="row">
            <div className="xl-4 lg-4 md-4 sm-12" id="leftSectionCheckout">
              {selectedProducts.map((item) => (
                <div className="checkoutLeft" key={item.product.id}>
                  <div className="checkoutLeftImage">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="checkoutLeftContent">
                    <h4>{item.product.name}</h4>
                    <span>
                      {(parseFloat(item.product.price) || 0).toFixed(2)} AZN
                    </span>
                  </div>
                </div>
              ))}

              <div className="checkoutLeftPrices">
                <div className="checkoutLeftPriceItems">
                  <div className="checkoutLeftPriceItem">
                    <p>{t?.totalamount || "Total amount " }</p>
                    <span>
                      {totalAmount.toFixed(2)} AZN
                    </span>
                  </div>
                  <div className="checkoutLeftPriceItem">
                    <p>{t?.delivery || "Delivery "}</p>
                    <span>
                      {deliveryInfo.isFree ? (t?.freedell || "Pulsuz çatdırılma")  : `${deliveryInfo.price} AZN`}
                    </span>
                  </div>
                </div>
                <div className="totalPriceCheckout">
                  <p>{t?.finalamount || "Yekun"}:</p>
                  <span>
                    {(totalAmount + (deliveryInfo.isFree ? 0 : parseFloat(deliveryInfo.price))).toFixed(2)} AZN
                  </span>
                </div>
              </div>
            </div>
            <div className="xl-8 lg-8 md-8 sm-12">
              <div className="checkoutRight">
                <CheckoutForm 
                  t={t} 
                  deliveryData={deliveryData} 
                  products={selectedProducts}
                  totalAmount={totalAmount}
                  onDeliveryUpdate={updateDeliveryInfo}
                  deliveryInfo={deliveryInfo}
                  paymentTotal={paymentTotal} // <<< YENI: yekun ödəniş məbləği (product + delivery)
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

// ? BITTIMI DAYI ? (<><><><>)





























// ! 21.08.25
// "use client";
// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import CheckoutForm from "./CheckoutForm";
// import { useGetCartQuery } from "@/redux/cartService";

// const Checkout = ({t, deliveryData}) => {
//   console.log(deliveryData , "pinokio")
//   const searchParams = useSearchParams();
//   const itemsParam = searchParams.get("items") || "";
//   const selectedIds = itemsParam
//     .split(",")
//     .filter(Boolean)
//     .map((id) => Number(id));

//   // RTK Query ilə bütün sepeti çekiyoruz
//   const { data: cartData } = useGetCartQuery();
//   const products = cartData?.cart?.cart_products || [];

//   // Sadece seçilmiş ürünler
//   const selectedProducts = products.filter((p) =>
//     selectedIds.includes(p.product.id)
//   );

//   // Delivery calculation state
//   const [deliveryInfo, setDeliveryInfo] = useState({
//     price: "00.00",
//     isFree: false
//   });

//   // Calculate total amount - useMemo ilə cache edilir
//   const totalAmount = useMemo(() => {
//     return selectedProducts.reduce(
//       (sum, item) =>
//         sum + (item.qty || 1) * (parseFloat(item.product.price) || 0),
//       0
//     );
//   }, [selectedProducts]);

//   // useCallback ilə funksiya cache edilir
//   const updateDeliveryInfo = useCallback((selectedCityData) => {
//     if (!selectedCityData) {
//       setDeliveryInfo({ price: "00.00", isFree: false });
//       return;
//     }

//     const cityLimit = parseFloat(selectedCityData.limit) || 0;
//     const cityPrice = parseFloat(selectedCityData.price) || 0;

//     if (totalAmount >= cityLimit) {
//       setDeliveryInfo({ price: "00.00", isFree: true });
//     } else {
//       setDeliveryInfo({ 
//         price: cityPrice.toFixed(2), 
//         isFree: false 
//       });
//     }
//   }, [totalAmount]); // Yalnız totalAmount dəyişəndə funksiya yenilənir

//   // Sepette hiç ürün yoksa basit mesaj
//   if (selectedProducts.length === 0) {
//     return <p>product not found.</p>;
//   }

//   return (
//     <div className="container">
//       <div className="checkout">
//         <span>{t?.orderbtn}</span>
//         <div className="checkoutItems">
//           <div className="row">
//             <div className="xl-4 lg-4 md-4 sm-12" id="leftSectionCheckout">
//               {selectedProducts.map((item) => (
//                 <div className="checkoutLeft" key={item.product.id}>
//                   <div className="checkoutLeftImage">
//                     <Image
//                       src={item.product.image}
//                       alt={item.product.name}
//                       width={200}
//                       height={200}
//                     />
//                   </div>
//                   <div className="checkoutLeftContent">
//                     <h4>{item.product.name}</h4>
//                     <span>
//                       {(parseFloat(item.product.price) || 0).toFixed(2)} AZN
//                     </span>
//                   </div>
//                 </div>
//               ))}

//               <div className="checkoutLeftPrices">
//                 <div className="checkoutLeftPriceItems">
//                   <div className="checkoutLeftPriceItem">
//                     <p>{t?.totalamount || "Total amount " }</p>
//                     <span>
//                       {totalAmount.toFixed(2)} AZN
//                     </span>
//                   </div>
//                   <div className="checkoutLeftPriceItem">
//                     <p>{t?.delivery || "Delivery "}</p>
//                     <span>
//                       {deliveryInfo.isFree ? (t?.freedell || "Pulsuz çatdırılma")  : `${deliveryInfo.price} AZN`}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="totalPriceCheckout">
//                   <p>{t?.finalamount || "Yekun"}:</p>
//                   <span>
//                     {(totalAmount + (deliveryInfo.isFree ? 0 : parseFloat(deliveryInfo.price))).toFixed(2)} AZN
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="xl-8 lg-8 md-8 sm-12">
//               <div className="checkoutRight">
//                 <CheckoutForm 
//                   t={t} 
//                   deliveryData={deliveryData} 
//                   products={selectedProducts}
//                   totalAmount={totalAmount}
//                   onDeliveryUpdate={updateDeliveryInfo}
//                   deliveryInfo={deliveryInfo} 
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;











// ! claude s .....  delivery price
// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import CheckoutForm from "./CheckoutForm";
// import { useGetCartQuery } from "@/redux/cartService";

// const Checkout = ({t, deliveryData}) => {
//   console.log(deliveryData , "pinokio")
//   const searchParams = useSearchParams();
//   const itemsParam = searchParams.get("items") || "";
//   const selectedIds = itemsParam
//     .split(",")
//     .filter(Boolean)
//     .map((id) => Number(id));

//   // RTK Query ilə bütün sepeti çekiyoruz
//   const { data: cartData } = useGetCartQuery();
//   const products = cartData?.cart?.cart_products || [];

//   // Sadece seçilmiş ürünler
//   const selectedProducts = products.filter((p) =>
//     selectedIds.includes(p.product.id)
//   );

//   // Delivery calculation state
//   const [deliveryInfo, setDeliveryInfo] = useState({
//     price: "00.00",
//     isFree: false
//   });

//   // Calculate total amount
//   const totalAmount = selectedProducts.reduce(
//     (sum, item) =>
//       sum + (item.qty || 1) * (parseFloat(item.product.price) || 0),
//     0
//   );

//   // Function to update delivery info based on selected address/city
//   const updateDeliveryInfo = (selectedCityData) => {
//     if (!selectedCityData) {
//       setDeliveryInfo({ price: "00.00", isFree: false });
//       return;
//     }

//     const cityLimit = parseFloat(selectedCityData.limit) || 0;
//     const cityPrice = parseFloat(selectedCityData.price) || 0;

//     if (totalAmount >= cityLimit) {
//       setDeliveryInfo({ price: "00.00", isFree: true });
//     } else {
//       setDeliveryInfo({ 
//         price: cityPrice.toFixed(2), 
//         isFree: false 
//       });
//     }
//   };

//   // Sepette hiç ürün yoksa basit mesaj
//   if (selectedProducts.length === 0) {
//     return <p>product not found.</p>;
//   }

//   return (
//     <div className="container">
//       <div className="checkout">
//         <span>{t?.orderbtn}</span>
//         <div className="checkoutItems">
//           <div className="row">
//             <div className="xl-4 lg-4 md-4 sm-12" id="leftSectionCheckout">
//               {selectedProducts.map((item) => (
//                 <div className="checkoutLeft" key={item.product.id}>
//                   <div className="checkoutLeftImage">
//                     <Image
//                       src={item.product.image}
//                       alt={item.product.name}
//                       width={200}
//                       height={200}
//                     />
//                   </div>
//                   <div className="checkoutLeftContent">
//                     <h4>{item.product.name}</h4>
//                     <span>
//                       {(parseFloat(item.product.price) || 0).toFixed(2)} AZN
//                     </span>
//                   </div>
//                 </div>
//               ))}

//               <div className="checkoutLeftPrices">
//                 <div className="checkoutLeftPriceItems">
//                   <div className="checkoutLeftPriceItem">
//                     <p>{t?.totalamount || "Total amount " }</p>
//                     <span>
//                       {totalAmount.toFixed(2)} AZN
//                     </span>
//                   </div>
//                   <div className="checkoutLeftPriceItem">
//                     <p>{t?.delivery || "Delivery "}</p>
//                     <span>
//                       {deliveryInfo.isFree ? (t?.freedell || "Pulsuz çatdırılma")  : `${deliveryInfo.price} AZN`}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="totalPriceCheckout">
//                   <p>{t?.finalamount || "Yekun"}:</p>
//                   <span>
//                     {(totalAmount + (deliveryInfo.isFree ? 0 : parseFloat(deliveryInfo.price))).toFixed(2)} AZN
//                   </span>
//                 </div>
//               </div>

//             </div>
//             <div className="xl-8 lg-8 md-8 sm-12">
//               <div className="checkoutRight">
//                 <CheckoutForm 
//                   t={t} 
//                   deliveryData={deliveryData} 
//                   products={selectedProducts}
//                   totalAmount={totalAmount}
//                   onDeliveryUpdate={updateDeliveryInfo}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
// ! claude s// ! claude s .....  delivery price

