
"use client";
import React, { useState, useEffect } from "react";
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "@/redux/userService";

const Profile = ({t}) => {
  const [formData, setFormData] = useState({
    name_surname: "",
    tel: "",
  });
  const [error, setError] = useState(null);
  const [isPopup, setIsPopup] = useState(false);

  const {
    data: userInfo,
    error: fetchError,
    isLoading,
  } = useGetUserInfoQuery();

  const [updateUserInfo, { isLoading: isUpdating }] =
    useUpdateUserInfoMutation();

  useEffect(() => {
    if (userInfo) {
      setFormData({
        name_surname: userInfo.name_surname || "",
        tel: userInfo.tel || "",
      });
    }
    if (fetchError) {
      console.error("İstifadəçi məlumatları alınmadı:", fetchError);
    }
  }, [userInfo, fetchError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const digits = (formData.tel || "").replace(/\D/g, "");
    if (digits.length !== 9) {
      setError("Telefon nömrəsi 9 rəqəm olmalıdır");
      return;
    }

    if (!formData.name_surname.trim()) {
      setError("Ad soyad boş ola bilməz");
      return;
    }

    try {
      await updateUserInfo({
        name_surname: formData.name_surname.trim(),
        tel: digits,
      }).unwrap();

      setIsPopup(true);
      setError(null);
      setTimeout(() => setIsPopup(false), 2000);
    } catch (updateErr) {
      console.error("Məlumat yenilənərkən xəta baş verdi:", updateErr);
      setError("Məlumat yenilənərkən xəta baş verdi");
      setTimeout(() => setIsPopup(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="loaderDiv">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="profile">
      {/* <span>Profil</span> */}

      <div className="profileContent">
        <span>{t?.["personal-info"] || "Personal information"}</span>


        <form onSubmit={handleSubmit}>
          <div className="profileName">
            <strong>{t?.namesurname || "Name surname"}:</strong>
            <input
              type="text"
              value={formData.name_surname}
              onChange={(e) =>
                setFormData({ ...formData, name_surname: e.target.value })
              }
            />
          </div>

          <div className="profilePhone">
            <strong>{t?.phone || "phone"}:</strong>
            <div className="profilePhoneContent">
              <strong>+994</strong>
              <input
                type="text"
                value={formData.tel || ""}
                maxLength={9}
                pattern="[0-9]{9}"
                inputMode="numeric"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tel: e.target.value.replace(/\D/g, ""),
                  })
                }
              />
            </div>
          </div>
          {error && <div className="errorInfo">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Profile;

