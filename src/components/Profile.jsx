import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="container">
        <div className="profile">
          <span>Profil</span>
          <div className="profileContent">
            <span>Şəxsi məlumatlar</span>
            <div className="profileName">
              <strong>Ad soyad:</strong>
              <span>Rafael Jafarov</span>
            </div>
            <div className="profilePhone">
              <strong>Telefon:</strong>
              <div className="profilePhoneContent">
                <strong>+994</strong>
                <span>708284050</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
