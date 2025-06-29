// src/src/components/PopupAddress.js
"use client";
import { FiX, FiChevronDown } from "react-icons/fi";
import {
  useAddAddressMutation,
  useUpdateAddressMutation,
} from "@/redux/userService";
import { useState, useEffect } from "react";

const PopupAddress = ({ active, setActive, edit, delivery }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [tel, setTel] = useState("");
  const [added, setAdded] = useState(false);

  const [addAddress, { isLoading: isAdding }] = useAddAddressMutation();
  const [updateAddress, { isLoading: isUpdating }] =
    useUpdateAddressMutation();

  useEffect(() => {
    if (edit) {
      setName(edit.name);
      setAddress(edit.address);
      setRegion(edit.region);
      setTel(edit.tel.replace("+994", ""));
    } else {
      setName("");
      setAddress("");
      setRegion("");
      setTel("");
    }
  }, [edit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { name, address, region, tel: `+994${tel}` };
      if (edit) {
        await updateAddress({ id: edit.id, data: payload }).unwrap();
      } else {
        await addAddress(payload).unwrap();
      }
      setAdded(true);
      setTimeout(() => setActive(false), 1500);
    } catch (error) {
      console.error("Failed to submit address", error);
    } finally {
      setTimeout(() => {
        setName("");
        setAddress("");
        setRegion("");
        setTel("");
        setAdded(false);
      }, 1500);
    }
  };

  return (
    <div className={`popupAddress ${active ? "active" : ""}`}>
      <div className="layer" onClick={() => setActive(false)}></div>
      <div className="popupContainer">
        <button className="close" onClick={() => setActive(false)}>
          <FiX />
        </button>
        <form onSubmit={handleSubmit}>
          <p>{edit ? "Update Address" : "Add Address"}</p>

          <label>Name</label>
          <div className="inputChild">
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label>Address</label>
          <div className="inputChild">
            <input
              type="text"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <label>City</label>
          <div className="selectBox selectBoxCity">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Region
              </option>
              {delivery?.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.region_az} | {city.region_ru}
                </option>
              ))}
            </select>
            <FiChevronDown />
          </div>

          <label>Phone</label>
          <div className="phoneInput">
            <span>+994</span>
            <input
              type="number"
              value={tel}
              required
              onChange={(e) => setTel(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`blackButton ${added ? "active" : ""}`}
            disabled={isAdding || isUpdating}
          >
            {isAdding || isUpdating ? (
              <div className="loader2"></div>
            ) : added ? (
              "Address Added"
            ) : edit ? (
              "Update Address"
            ) : (
              "Add Address"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupAddress;
