  // src/app/[locale]/account/order-history/page.js
  "use client";
  import { useEffect, useState } from "react";
  import Empty from "@/components/Empty";
  import OrderHistoryCard from "@/components/OrderHistoryCard";
  import { useGetOrderListQuery } from "@/redux/userService";
  import { FaHistory } from "react-icons/fa";
  import axiosInstance from "@/lib/axios";
  import Cookies from "js-cookie";

  async function getTranslations() {
    try {
      const response = await axiosInstance.get("/translation-list");
      const data = response.data;
      const translationsObj = data.reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {});
      return translationsObj;
    } catch (err) {
      console.log(err);
      return {};
    }
  }

  const OrderHistoryPage = () => {
    const [t, setT] = useState({});

    const { data: orderHistoryResponse, refetch } = useGetOrderListQuery();
    // undefined veya array olmayan durumlar için güvenli fallback
    const orderHistory = Array.isArray(orderHistoryResponse)
      ? orderHistoryResponse
      : [];

    useEffect(() => {
      refetch();
      getTranslations().then((translations) => {
        setT(translations);
      });
    }, [refetch]);

    return orderHistory.length === 0 ? (
      <Empty title={t?.["orderlist-empty" || "order is empty"]}   icon={<FaHistory size={32} />} />
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
