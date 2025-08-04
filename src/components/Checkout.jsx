// "use client";
// import React from "react";
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

//   // Sepette hiç ürün yoksa basit mesaj
//   if (selectedProducts.length === 0) {
//     return <p>Heç bir məhsul seçilməyib.</p>;
//   }

//   return (
//     <div className="container">
//       <div className="checkout">
//         <span>Sifarişi rəsmiləşdir</span>
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
//                     <p>Ümumi məbləğ</p>
//                     <span>
//                       {selectedProducts
//                         .reduce(
//                           (sum, item) =>
//                             sum +
//                             (item.qty || 1) *
//                               (parseFloat(item.product.price) || 0),
//                           0
//                         )
//                         .toFixed(2)}{" "}
//                       AZN
//                     </span>
//                   </div>
//                   {/* <div className="checkoutLeftPriceItem">
//                     <p>Endrim</p>
//                     <span>0 AZN</span>
//                   </div> */}
//                   <div className="checkoutLeftPriceItem">
//                     <p>Çatdırılma </p>
//                     <span>00.00 AZN</span>
//                   </div>
//                 </div>
//                 <div className="totalPriceCheckout">
//                   <p>Yekun məbləğ:</p>
//                   <span>
//                     {selectedProducts
//                       .reduce(
//                         (sum, item) =>
//                           sum +
//                           (item.qty || 1) *
//                             (parseFloat(item.product.price) || 0),
//                         0
//                       )
//                       .toFixed(2)}{" "}
//                     AZN
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="xl-8 lg-8 md-8 sm-12">
//               <div className="checkoutRight">
//                 <CheckoutForm t={t} deliveryData={deliveryData} products={selectedProducts} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
// ! XAIS EDIREM ISLEMELISEN
































// ! bu islekdir sadece payment urlye delivery price getmir
"use client";
import React, { useState, useEffect } from "react";
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

  // Calculate total amount
  const totalAmount = selectedProducts.reduce(
    (sum, item) =>
      sum + (item.qty || 1) * (parseFloat(item.product.price) || 0),
    0
  );

  // Function to update delivery info based on selected address/city
  const updateDeliveryInfo = (selectedCityData) => {
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
  };

  // Sepette hiç ürün yoksa basit mesaj
  if (selectedProducts.length === 0) {
    return <p>Heç bir məhsul seçilməyib.</p>;
  }

  return (
    <div className="container">
      <div className="checkout">
        <span>Sifarişi rəsmiləşdir</span>
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
                    <p>Ümumi məbləğ</p>
                    <span>
                      {totalAmount.toFixed(2)} AZN
                    </span>
                  </div>
                  {/* <div className="checkoutLeftPriceItem">
                    <p>Endrim</p>
                    <span>0 AZN</span>
                  </div> */}
                  <div className="checkoutLeftPriceItem">
                    <p>Çatdırılma</p>
                    <span>
                      {deliveryInfo.isFree ? "Pulsuzdur" : `${deliveryInfo.price} AZN`}
                    </span>
                  </div>
                </div>
                <div className="totalPriceCheckout">
                  <p>Yekun məbləğ:</p>
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