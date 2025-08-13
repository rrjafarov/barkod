// src/app/[locale]/account/address/page.js
"use client";
import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import UserAddressCard from "@/components/UserAddressCard";
import PopupAddress from "@/components/PopupAddress";
import { useGetAddressListQuery } from "@/redux/userService";
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

const UserAddressPage = () => {
  const [active, setActive] = useState(false);
  const [edit, setEdit] = useState(null);
  const [t, setT] = useState({});
  const [deliveryData, setDeliveryData] = useState([]);

  const { data, isLoading, refetch } = useGetAddressListQuery();
  console.log(data);

  useEffect(() => {
    refetch();
    getTranslations().then((translations) => {
      setT(translations);
    });

    axiosInstance
      .get("/delivery-regions")
      .then((res) => {
        setDeliveryData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refetch]);

  const handleAddClick = () => {
    setEdit(null);
    setActive(true);
  };

  const handleEditClick = (address) => {
    setEdit(address);
    setActive(true);
  };

  if (isLoading) {
    return (
      <div className="loaderDiv">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <PopupAddress
        t={t}
        active={active}
        setActive={setActive}
        edit={edit}
        delivery={deliveryData}
      />
      <div className="contactRight">
        <div className="addressParent">
          <div className="addressParentCards">
            <button
              type="button"
              className="addressCardCreate"
              onClick={handleAddClick}
            >
              <FiPlus />
              <span>{t?.["add-address"] || "Add address"}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="addressCardRow">
        {data?.map((item) => (
          <UserAddressCard
            t={t}
            key={item.id}
            address={item}
            setActive={setActive}
            onEdit={handleEditClick}
          />
        ))}
      </div>
    </>
  );
};

export default UserAddressPage;
