// "use client";
// import Lock from "@/public/lock.svg";
// import { useTranslations } from "next-intl";
// import { useState } from "react";
// import { useUpdatePasswordMutation } from "@/redux/userService";

// const ChangePasswordPage = () => {
//   const t = useTranslations();
//   const [updatePassword] = useUpdatePasswordMutation();
//   const [formData, setFormData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     repeatNewPassword: "",
//   });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.newPassword !== formData.repeatNewPassword) {
//       setError(t("password-mismatch"));
//       return;
//     }

//     try {
//       await updatePassword({
//         current_password: formData.currentPassword,
//         new_password: formData.newPassword,
//       }).unwrap();
//       setSuccess(true);
//       setError(null);
//       setFormData({
//         currentPassword: "",
//         newPassword: "",
//         repeatNewPassword: "",
//       });
//     } catch (error) {
//       setError(t("update-password-error"));
//       console.error("Password update failed:", error);
//     }
//   };

//   return (
//     <div className="contactRight">
//       <div className="formParent">
//         <form onSubmit={handleSubmit}>
//           <p>{t("change-password")}</p>

//           <label>{t("current-password")}</label>
//           <div className="inputChild passwordChild">
//             <div className="password">
//               <Lock />
//             </div>
//             <input
//               type="password"
//               placeholder="*****"
//               value={formData.currentPassword}
//               onChange={(e) =>
//                 setFormData({ ...formData, currentPassword: e.target.value })
//               }
//               required
//             />
//           </div>

//           <label>{t("new-password")}</label>
//           <div className="inputChild passwordChild">
//             <div className="password">
//               <Lock />
//             </div>
//             <input
//               type="password"
//               placeholder="*****"
//               value={formData.newPassword}
//               onChange={(e) =>
//                 setFormData({ ...formData, newPassword: e.target.value })
//               }
//               required
//             />
//           </div>

//           <label>{t("repeat-new-password")}</label>
//           <div className="inputChild passwordChild">
//             <div className="password">
//               <Lock />
//             </div>
//             <input
//               type="password"
//               placeholder="*****"
//               value={formData.repeatNewPassword}
//               onChange={(e) =>
//                 setFormData({ ...formData, repeatNewPassword: e.target.value })
//               }
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className={`blackButton ${success ? "active" : ""}`}
//             disabled={success}
//           >
//             {success ? t("password-updated") : t("save")}
//           </button>

//           {error && <div className="errorInfo">{error}</div>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChangePasswordPage;




// !


"use client";

import { useState } from "react";
import { useUpdatePasswordMutation } from "@/redux/userService";
import { HiLockClosed } from "react-icons/hi";

const ChangePasswordPage = () => {
  const [updatePassword] = useUpdatePasswordMutation();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.repeatNewPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await updatePassword({
        current_password: formData.currentPassword,
        new_password: formData.newPassword,
      }).unwrap();

      setSuccess(true);
      setError(null);
      setFormData({
        currentPassword: "",
        newPassword: "",
        repeatNewPassword: "",
      });
    } catch (err) {
      console.error("Password update failed:", err);
      setError("Failed to update password. Please try again.");
    }
  };

  return (
    <div className="contactRight">
      <div className="formParent">
        <form onSubmit={handleSubmit}>
          <p>Change Password</p>

          <label>Current Password</label>
          <div className="inputChild inputChilds passwordChild">
            <div className="password">
              <HiLockClosed className="passIcon" />
            </div>
            <input
              type="password"
              placeholder=""
              value={formData.currentPassword}
              onChange={(e) =>
                setFormData({ ...formData, currentPassword: e.target.value })
              }
              required
            />
          </div>

          <label>New Password</label>
          <div className="inputChild inputChilds passwordChild">
            <div className="password">
              <HiLockClosed className="passIcon" />
            </div>
            <input
              type="password"
              placeholder=""
              value={formData.newPassword}
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
              required
            />
          </div>

          <label>Repeat New Password</label>
          <div className="inputChild inputChilds passwordChild">
            <div className="password">
              <HiLockClosed className="passIcon" />
            </div>
            <input
              type="password"
              placeholder=""
              value={formData.repeatNewPassword}
              onChange={(e) =>
                setFormData({ ...formData, repeatNewPassword: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            className={`blackButton ${success ? "active" : ""}`}
            disabled={success}
          >
            {success ? "Password Updated" : "Save"}
          </button>

          {error && <div className="errorInfo">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
