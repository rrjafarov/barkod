// src/app/[locale]/account/order-history/page.js
"use client";
import { useEffect } from "react";
import Empty from "@/components/Empty";
import OrderHistoryCard from "@/components/OrderHistoryCard";
import { useGetOrderListQuery } from "@/redux/userService";
import { FaHistory } from "react-icons/fa";

const OrderHistoryPage = () => {
  const { data: orderHistoryResponse, refetch } = useGetOrderListQuery();
  // undefined veya array olmayan durumlar için güvenli fallback
  const orderHistory = Array.isArray(orderHistoryResponse) ? orderHistoryResponse : [];

  useEffect(() => {
    refetch();
  }, [refetch]);

  return orderHistory.length === 0 ? (
    <Empty
      title="Sifariş tarixçəniz boşdur" 
      icon={<FaHistory size={32} />}
    />
  ) : (
    <div className="orderHistoryInner">
      <div className="orderHistoryInnerTop">
        <span>Ödəniş Statusu</span>
        <span>ID</span>
        <span>Çatdırılma Statusu</span>
        <span>Tarix</span>
        <span>Qiymət</span>
        <span>Sayı</span>
        <span></span>
      </div>
      <div className="orderHistoryInnerBody">
        {orderHistory.map((order) => (
          <OrderHistoryCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderHistoryPage;
