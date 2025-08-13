// // src/src/components/OrderHistoryCard.js
// "use client";
// import { useState } from "react";
// import OrderHistoryCardItem from "./OrderHistoryCardItem";
// import { FaMoneyBillAlt } from "react-icons/fa";
// import { TbCurrencyManat } from "react-icons/tb";

// const OrderHistoryCard = ({ order ,t }) => {
//   const [showMore, setShowMore] = useState(false);
//   // cart undefined ise boş array olarak kullan
//   const items = Array.isArray(order?.cart) ? order.cart : [];

//   return (
//     <div className="orderHistoryCard">
//       <div className={`orderHistoryCardHeader ${showMore ? "active" : ""}`}>
//         <div
//           className={`status ${
//             order?.payment_status_code === 1 ? "paid" : "notPaid"
//           }`}
//         >
//           {order?.payment_status_code === 1 ? (t?.paid || "Ödənilib") : (t?.unpaid || "Ödənilməyib")}
//         </div>
//         <span>{order?.id}</span>
//         <span>{order?.delivery_status}</span>
//         <span>{order?.order_date}</span>
//         <span className="orderHistoryCardAmount">
//           {order?.amount?.toFixed(2)}<TbCurrencyManat />
//         </span>
//         <span>{order?.product_count}</span>
//         <p className="moreDetails">
//           <span onClick={() => setShowMore(true)}>{t?.show || "Show"}</span>
//           <span onClick={() => setShowMore(false)}>{t?.hide || "Hide"}</span>
//         </p>
//       </div>
//       <div className={`orderHistoryCardBody ${showMore ? "active" : ""}`}>
//         <div className="orderHistoryCardBodyInner">
//           {items.map((item) => (
//             <OrderHistoryCardItem t={t} key={item.product.id} product={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderHistoryCard;


















// src/src/components/OrderHistoryCard.js
"use client";
import { useState } from "react";
import OrderHistoryCardItem from "./OrderHistoryCardItem";
import { FaMoneyBillAlt } from "react-icons/fa";
import { TbCurrencyManat } from "react-icons/tb";

const OrderHistoryCard = ({ order ,t }) => {
  const [showMore, setShowMore] = useState(false);
  // cart undefined ise boş array olarak kullan
  const items = Array.isArray(order?.cart) ? order.cart : [];

  // **DÜZƏLİŞ:** burada order.cart içindən toplam məbləği hesablamaq üçün reduce istifadə olunur.
  // Əgər cart boşdursa backend-dən gələn order.amount fallback kimi istifadə edilir.
  const totalFromCart = items.reduce((acc, it) => {
    const price = Number(it?.product?.price ?? 0);
    const qty = Number(it?.qty ?? 1);
    return acc + price * qty;
  }, 0);

  const displayAmount = totalFromCart > 0 ? totalFromCart : Number(order?.amount ?? 0);

  return (
    <div className="orderHistoryCard">
      <div className={`orderHistoryCardHeader ${showMore ? "active" : ""}`}>
        <div
          className={`status ${
            order?.payment_status_code === 1 ? "paid" : "notPaid"
          }`}
        >
          {order?.payment_status_code === 1 ? (t?.paid || "Ödənilib") : (t?.unpaid || "Ödənilməyib")}
        </div>
        <span>{order?.id}</span>
        <span>{order?.delivery_status}</span>
        <span>{order?.order_date}</span>
        <span className="orderHistoryCardAmount">
          {displayAmount.toFixed(2)}<TbCurrencyManat />
        </span>
        <span>{order?.product_count}</span>
        <p className="moreDetails">
          <span onClick={() => setShowMore(true)}>{t?.show || "Show"}</span>
          <span onClick={() => setShowMore(false)}>{t?.hide || "Hide"}</span>
        </p>
      </div>
      <div className={`orderHistoryCardBody ${showMore ? "active" : ""}`}>
        <div className="orderHistoryCardBodyInner">
          {items.map((item) => (
            <OrderHistoryCardItem t={t} key={item.product.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
