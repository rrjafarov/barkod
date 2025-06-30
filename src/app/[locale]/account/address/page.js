// src/app/[locale]/account/address/page.js
"use client";
import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import UserAddressCard from "@/components/UserAddressCard";
import PopupAddress from "@/components/PopupAddress";
import { useGetAddressListQuery } from "@/redux/userService";


const UserAddressPage = () => {
  const [active, setActive] = useState(false);
  const [edit, setEdit] = useState(null);

  const { data, isLoading, refetch } = useGetAddressListQuery();

  useEffect(() => {
    refetch();
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
        active={active}
        setActive={setActive}
        edit={edit}
        delivery={data?.delivery}
      />
      <div className="contactRight">
        <div className="addressParent">
          {/* <label>Address</label> */}
          <div className="addressParentCards">
            <button
              type="button"
              className="addressCardCreate"
              onClick={handleAddClick}
            >
              <FiPlus />
              <span>Add Address</span>
            </button>
            {data?.shipping_address?.map((item) => (
              <UserAddressCard
                key={item.id}
                address={item}
                setActive={setActive}
                onEdit={handleEditClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAddressPage;
