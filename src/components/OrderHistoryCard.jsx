// src/src/components/OrderHistoryCard.js
"use client";
import { useState } from "react";
import OrderHistoryCardItem from "./OrderHistoryCardItem";
import { FaMoneyBillAlt } from "react-icons/fa";

const OrderHistoryCard = ({ order }) => {
  const [showMore, setShowMore] = useState(false);
  // cart undefined ise boş array olarak kullan
  const items = Array.isArray(order?.cart) ? order.cart : [];

  return (
    <div className="orderHistoryCard">
      <div className={`orderHistoryCardHeader ${showMore ? "active" : ""}`}>
        <div
          className={`status ${
            order?.payment_status_code === 1 ? "paid" : "notPaid"
          }`}
        >
          {order?.payment_status_code === 1 ? "Ödənilib" : "Ödənilməyib"}
        </div>
        <span>{order?.id}</span>
        <span>{order?.delivery_status}</span>
        <span>{order?.order_date}</span>
        <span className="orderHistoryCardAmount">
          {order?.amount?.toFixed(2)} <FaMoneyBillAlt />
        </span>
        <span>{order?.product_count}</span>
        <p className="moreDetails">
          <span onClick={() => setShowMore(true)}>Göstər</span>
          <span onClick={() => setShowMore(false)}>Gizlə</span>
        </p>
      </div>
      <div className={`orderHistoryCardBody ${showMore ? "active" : ""}`}>
        <div className="orderHistoryCardBodyInner">
          {items.map((item) => (
            <OrderHistoryCardItem key={item.product.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
