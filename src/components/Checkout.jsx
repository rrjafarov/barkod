// import Image from "next/image";
// import React from "react";
// import CheckoutFrom from "../components/CheckoutForm"

// const Checkout = () => {
//   return (
//     <div className="container">
//       <div className="checkout">
//         <span>Sifarişi rəsmiləşdir</span>
//         <div className="checkoutItems">
//           <div className="row">
//             <div className="xl-4 lg-4 md-4 sm-12" id="leftSectionCheckout">
//               <div className="checkoutLeft">
//                 <div className="checkoutLeftImage">
//                   <Image
//                     src="/images/iphone16pro.png"
//                     alt="iph"
//                     width={200}
//                     height={200}
//                   />
//                 </div>
//                 <div className="checkoutLeftContent">
//                   <h4>iPhone 16 Pro 256 GB (Platinium Blue)</h4>
//                   <span>539 AZN</span>
//                 </div>
//               </div>
//               <div className="checkoutLeftPrices">
//                 <div className="checkoutLeftPriceItems">
//                   <div className="checkoutLeftPriceItem">
//                     <p>Ümumi məbləğ</p>
//                     <span>599 AZN</span>
//                   </div>
//                   <div className="checkoutLeftPriceItem">
//                     <p>Endrim</p>
//                     <span>59 AZN</span>
//                   </div>
//                   <div className="checkoutLeftPriceItem">
//                     <p>Çatdırılma </p>
//                     <span>00.00 AZN</span>
//                   </div>
//                 </div>
//                 <div className="totalPriceCheckout">
//                   <p>Yekun məbləğ:</p>
//                   <span>539 AZN</span>
//                 </div>
//               </div>
//             </div>
//             <div className="xl-8 lg-8 md-8 sm-12">
//               <div className="checkoutRight">
//                 <CheckoutFrom />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// ! funksionalliqi yoxdur 










"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import CheckoutForm from "./CheckoutForm";
import { useGetCartQuery } from "@/redux/cartService";

const Checkout = () => {
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
                      {selectedProducts
                        .reduce(
                          (sum, item) =>
                            sum +
                            (item.qty || 1) *
                              (parseFloat(item.product.price) || 0),
                          0
                        )
                        .toFixed(2)}{" "}
                      AZN
                    </span>
                  </div>
                  <div className="checkoutLeftPriceItem">
                    <p>Endrim</p>
                    <span>0 AZN</span>
                  </div>
                  <div className="checkoutLeftPriceItem">
                    <p>Çatdırılma </p>
                    <span>00.00 AZN</span>
                  </div>
                </div>
                <div className="totalPriceCheckout">
                  <p>Yekun məbləğ:</p>
                  <span>
                    {selectedProducts
                      .reduce(
                        (sum, item) =>
                          sum +
                          (item.qty || 1) *
                            (parseFloat(item.product.price) || 0),
                        0
                      )
                      .toFixed(2)}{" "}
                    AZN
                  </span>
                </div>
              </div>
            </div>
            <div className="xl-8 lg-8 md-8 sm-12">
              <div className="checkoutRight">
                <CheckoutForm products={selectedProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;










// ! sadece 1 mehsulun sekili gelir
// "use client";
// import React from "react";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import CheckoutFrom from "./CheckoutForm";
// import { useGetCartQuery } from "@/redux/cartService";

// const Checkout = () => {
//   const searchParams = useSearchParams();
//   const itemsParam = searchParams.get("items") || "";
//   const selectedIds = itemsParam
//     .split(",")
//     .filter(Boolean)
//     .map((id) => Number(id));

//   // RTK Query ile tüm sepeti çekiyoruz
//   const { data: cartData } = useGetCartQuery();

//   // Sadece seçili ürünler
//   const selectedProducts =
//     cartData?.cart?.cart_products?.filter((p) =>
//       selectedIds.includes(p.product.id)
//     ) || [];

//   return (
//     <div className="container">
//       <div className="checkout">
//         <span>Sifarişi rəsmiləşdir</span>
//         <div className="checkoutItems">
//           <div className="row">
//             <div className="xl-4 lg-4 md-4 sm-12" id="leftSectionCheckout">
//               {selectedProducts[0] && (
//                 <div className="checkoutLeft">
//                   <div className="checkoutLeftImage">
//                     <Image
//                       src={selectedProducts[0].product.image}
//                       alt={selectedProducts[0].product.name}
//                       width={200}
//                       height={200}
//                     />
//                   </div>
//                   <div className="checkoutLeftContent">
//                     <h4>{selectedProducts[0].product.name}</h4>
//                     <span>
//                       {(
//                         parseFloat(selectedProducts[0].product.price) || 0
//                       ).toFixed(2)}{" "}
//                       AZN
//                     </span>
//                   </div>
//                 </div>
//               )}
//               <div className="checkoutLeftPrices">
//                 <div className="checkoutLeftPriceItems">
//                   <div className="checkoutLeftPriceItem">
//                     <p>Ümumi məbləğ</p>
//                     <span>
//                       {selectedProducts.reduce(
//                         (sum, item) =>
//                           sum +
//                           (item.qty || 1) *
//                             (parseFloat(item.product.price) || 0),
//                         0
//                       ).toFixed(2)}{" "}
//                       AZN
//                     </span>
//                   </div>
//                   <div className="checkoutLeftPriceItem">
//                     <p>Endrim</p>
//                     <span>0 AZN</span>
//                   </div>
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
//                 <CheckoutFrom products={selectedProducts} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
