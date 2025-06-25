// "use client";
// import { useState } from "react";
// import { LuEyeClosed } from "react-icons/lu";
// import { HiLockClosed } from "react-icons/hi";

// export default function LoginForm() {
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: login lojiqasını bura yaz
//     console.log({ phone, password });
//   };

//   return (
//     <div className="login-container">
//       <h1 className="login-title">Daxil ol</h1>

//       <div className="login-tabs">
//         <button className="login-tab active">Daxil ol</button>
//         <button className="login-tab">Qeydiyyat</button>
//       </div>

//       <form className="login-form" onSubmit={handleSubmit}>
//         <label htmlFor="phone" className="login-label">
//           Nömrə
//         </label>
//         <div className="login-group">
//           <span className="login-prefix">+994</span>
//           <input
//             id="phone"
//             type="tel"
//             className="login-input"
//             placeholder=""
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>

//         <label htmlFor="password" className="login-label">
//           Şifrə
//         </label>
//         <div className="login-group">
//           <span className="login-icon">
//             <HiLockClosed />
//           </span>
//           <input
//             id="password"
//             type={showPassword ? "text" : "password"}
//             className="login-input"
//             placeholder="******"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="button"
//             className="login-toggle"
//             onClick={() => setShowPassword(!showPassword)}
//             aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
//           >
//             {showPassword ? <LuEyeClosed /> : <LuEyeClosed />}
//           </button>
//         </div>

//         <button type="submit" className="login-submit">
//           Daxil ol
//         </button>
//         <a href="#" className="login-forgot">
//           Şifrəmi unutdum
//         </a>
//       </form>
//     </div>
//   );
// }





































// // components/LoginForm.jsx
// 'use client';
// import { useState } from 'react';
// import { LuEyeClosed } from 'react-icons/lu';
// import { HiLockClosed } from 'react-icons/hi';

// export default function LoginForm() {
//   const [tab, setTab] = useState('login'); // 'login' | 'register'
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState('');
//   const [confirmPwd, setConfirmPwd] = useState('');
//   const [agree, setAgree] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log({ phone, password });
//   };
//   const handleRegister = (e) => {
//     e.preventDefault();
//     console.log({ name, phone, password, confirmPwd });
//   };

//   return (
//     <div className="login-container">
//       <h1 className="login-title">{tab === 'login' ? 'Daxil ol' : 'Qeydiyyat'}</h1>

//       <div className="login-tabs">
//         <button
//           className={`login-tab ${tab === 'login' ? 'active' : ''}`}
//           onClick={() => setTab('login')}
//         >
//           Daxil ol
//         </button>
//         <button
//           className={`login-tab ${tab === 'register' ? 'active' : ''}`}
//           onClick={() => setTab('register')}
//         >
//           Qeydiyyat
//         </button>
//       </div>

//       {tab === 'login' && (
//         <form className="login-form" onSubmit={handleLogin}>
//           <label htmlFor="phone" className="login-label">Nömrə</label>
//           <div className="login-group">
//             <span className="login-prefix">+994</span>
//             <input
//               id="phone"
//               type="tel"
//               className="login-input"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </div>

//           <label htmlFor="password" className="login-label">Şifrə</label>
//           <div className="login-group">
//             <span className="login-icon"><HiLockClosed /></span>
//             <input
//               id="password"
//               type={showPassword ? 'text' : 'password'}
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
//             >
//               <LuEyeClosed />
//             </button>
//           </div>

//           <button type="submit" className="login-submit">Daxil ol</button>
//           <a href="#" className="login-forgot">Şifrəmi unutdum</a>
//         </form>
//       )}

//       {tab === 'register' && (
//         <form className="login-form" onSubmit={handleRegister}>
//           <label htmlFor="name" className="login-label">Ad Soyad</label>
//           <div className="login-group">
//             <input
//               id="name"
//               type="text"
//               className="login-input"
//               value={name}
//               onChange={e => setName(e.target.value)}
//               required
//             />
//           </div>

//           <label htmlFor="phone2" className="login-label">Nömrə</label>
//           <div className="login-group">
//             <span className="login-prefix">+994</span>
//             <input
//               id="phone2"
//               type="tel"
//               className="login-input"
//               value={phone}
//               onChange={e => setPhone(e.target.value)}
//               required
//             />
//           </div>

//           <label htmlFor="pwd2" className="login-label">Şifrə</label>
//           <div className="login-group">
//             <span className="login-icon"><HiLockClosed /></span>
//             <input
//               id="pwd2"
//               type={showPassword ? 'text' : 'password'}
//               className="login-input"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
//             >
//               <LuEyeClosed />
//             </button>
//           </div>

//           <label htmlFor="confirm" className="login-label">Şifrəni təkrar et</label>
//           <div className="login-group">
//             <span className="login-icon"><HiLockClosed /></span>
//             <input
//               id="confirm"
//               type={showPassword ? 'text' : 'password'}
//               className="login-input"
//               value={confirmPwd}
//               onChange={e => setConfirmPwd(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
//             >
//               <LuEyeClosed />
//             </button>
//           </div>

//           <div className="register-terms">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={agree}
//               onChange={e => setAgree(e.target.checked)}
//             />
//             <label htmlFor="terms">Şərtləri oxudum, qəbul edirəm</label>
//             {/* <a href="#">Gizlilik Siyasəti</a> */}
//           </div>

//           <button
//             type="submit"
//             className={`register-submit${agree ? ' enabled' : ''}`}
//             disabled={!agree}
//           >
//             Qeydiyyatdan keç
//           </button>

//           <button
//             type="button"
//             className="register-back"
//             onClick={() => setTab('login')}
//           >
//             Daxil ol
//           </button>
//         </form>
//       )}
//     </div>
// );
// }


// components/LoginForm.jsx









































// 'use client';
// import { useState } from 'react';
// import { LuEyeClosed } from 'react-icons/lu';
// import { HiLockClosed } from 'react-icons/hi';

// export default function LoginForm() {
//   const [tab, setTab] = useState('login'); // 'login' | 'register'
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState('');
//   const [confirmPwd, setConfirmPwd] = useState('');
//   const [agree, setAgree] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log({ phone, password });
//   };
//   const handleRegister = (e) => {
//     e.preventDefault();
//     console.log({ name, phone, password, confirmPwd });
//   };

//   return (
//     <div className="login-container">
//       <h1 className="login-title">{tab === 'login' ? 'Daxil ol' : 'Qeydiyyat'}</h1>

//       <div className="login-tabs">
//         <button
//           className={`login-tab ${tab === 'login' ? 'active' : ''}`}
//           onClick={() => setTab('login')}
//         >
//           Daxil ol
//         </button>
//         <button
//           className={`login-tab ${tab === 'register' ? 'active' : ''}`}
//           onClick={() => setTab('register')}
//         >
//           Qeydiyyat
//         </button>
//       </div>

//       {tab === 'login' && (
//         <form className="login-form" onSubmit={handleLogin}>
//           <label htmlFor="phone" className="login-label">Nömrə</label>
//           <div className="login-group">
//             <span className="login-prefix">+994</span>
//             <input
//               id="phone"
//               type="tel"
//               className="login-input"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </div>

//           <label htmlFor="password" className="login-label">Şifrə</label>
//           <div className="login-group">
//             <span className="login-icon"><HiLockClosed /></span>
//             <input
//               id="password"
//               type={showPassword ? 'text' : 'password'}
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
//             >
//               <LuEyeClosed />
//             </button>
//           </div>

//           <button type="submit" className="login-submit">Daxil ol</button>
//           <a href="#" className="login-forgot">Şifrəmi unutdum</a>
//         </form>
//       )}

//       {tab === 'register' && (
//         <form className="login-form" onSubmit={handleRegister}>
//           <label htmlFor="name" className="login-label">Ad Soyad</label>
//           <div className="login-group">
//             <input
//               id="name"
//               type="text"
//               className="login-input"
//               value={name}
//               onChange={e => setName(e.target.value)}
//               required
//             />
//           </div>

//           <label htmlFor="phone2" className="login-label">Nömrə</label>
//           <div className="login-group">
//             <span className="login-prefix">+994</span>
//             <input
//               id="phone2"
//               type="tel"
//               className="login-input"
//               value={phone}
//               onChange={e => setPhone(e.target.value)}
//               required
//             />
//           </div>

//           <label htmlFor="pwd2" className="login-label">Şifrə</label>
//           <div className="login-group">
//             <span className="login-icon"><HiLockClosed /></span>
//             <input
//               id="pwd2"
//               type={showPassword ? 'text' : 'password'}
//               className="login-input"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
//             >
//               <LuEyeClosed />
//             </button>
//           </div>

//           <label htmlFor="confirm" className="login-label">Şifrəni təkrar et</label>
//           <div className="login-group">
//             <span className="login-icon"><HiLockClosed /></span>
//             <input
//               id="confirm"
//               type={showPassword ? 'text' : 'password'}
//               className="login-input"
//               value={confirmPwd}
//               onChange={e => setConfirmPwd(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
//             >
//               <LuEyeClosed />
//             </button>
//           </div>

//           <div className="register-terms">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={agree}
//               onChange={e => setAgree(e.target.checked)}
//             />
//             <label htmlFor="terms">Şərtləri oxudum, qəbul edirəm</label>
//             {/* <a href="#">Gizlilik Siyasəti</a> */}
//           </div>

//           <button
//             type="submit"
//             className={`register-submit${agree ? ' enabled' : ''}`}
//             disabled={!agree}
//           >
//             Qeydiyyatdan keç
//           </button>

//           <button
//             type="button"
//             className="register-back"
//             onClick={() => setTab('login')}
//           >
//             Daxil ol
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }







// !son versiya

// components/Auth/LoginForm.jsx



// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, useParams } from "next/navigation";
// import Cookies from "js-cookie";
// import axiosInstance from "@/lib/axios";  // page.js’deki axios importunla aynı yolu kullan
// // import Breadcrumb from "@/src/components/Breadcrumb"; // import yolunu projenle eşle
// import { useTranslations } from "next-intl";
// // import Popup from "@/src/components/Popup"; // Popup komponentin varsa import et
// import OtpInput from "react-otp-input";
// import Link from "next/link";
// import { HiLockClosed } from "react-icons/hi";
// import { LuEyeClosed } from "react-icons/lu";

// export default function LoginForm() {
//   const t = useTranslations();
//   const router = useRouter();
//   const { locale } = useParams(); // [locale] parametre

//   // Tab state: 'login' veya 'register'
//   const [tab, setTab] = useState("login");

//   // Ortak form alanları
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // Login kısmı
//   const [loginError, setLoginError] = useState(null);
//   const [loginLoading, setLoginLoading] = useState(false);
//   const [loginPopup, setLoginPopup] = useState(false);

//   // Register kısmı (ilk adım)
//   const [name, setName] = useState("");
//   const [confirmPwd, setConfirmPwd] = useState("");
//   const [agree, setAgree] = useState(false);
//   const [registerError, setRegisterError] = useState(null);
//   const [registerLoading, setRegisterLoading] = useState(false);

//   // OTP akışı
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [otpSentAgain, setOtpSentAgain] = useState(false);
//   const [otpTimer, setOtpTimer] = useState(0);
//   const [registerPopup, setRegisterPopup] = useState(false);

//   // Support verisi (privacy policy link gibi)
//   const [support, setSupport] = useState(null);

//   // 1) Token kontrolü: component mount olduğunda eğer token varsa direkt yönlendir
//   useEffect(() => {
//     const token = Cookies.get("token");
//     if (token) {
//       router.replace(`/${locale}/account/profile`);
//     }
//   }, [locale, router]);

//   // 2) Support fetch: register sayfası için privacy-policy linki vb.
//   useEffect(() => {
//     let isMounted = true;
//     const fetchSupport = async () => {
//       try {
//         const resp = await axiosInstance.get("/supports");
//         if (isMounted) {
//           setSupport(resp?.data?.support || []);
//         }
//       } catch (err) {
//         console.error("Error fetching support data:", err);
//       }
//     };
//     fetchSupport();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // OTP resend timer: countdown
//   useEffect(() => {
//     let timerId;
//     if (otpTimer > 0) {
//       timerId = setTimeout(() => {
//         setOtpTimer((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearTimeout(timerId);
//   }, [otpTimer]);

//   // Handler: Login submit
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoginError(null);

//     // Basit validasyon: telefon 9 hane, şifre dolu
//     const digits = phone.replace(/\D/g, "");
//     if (digits.length !== 9) {
//       setLoginError(t("number-length-error") || "Telefon 9 rəqəm olmalıdır");
//       return;
//     }
//     if (!password) {
//       setLoginError(t("password-required") || "Şifrə daxil edin");
//       return;
//     }

//     setLoginLoading(true);
//     try {
//       const resp = await axiosInstance.post("/login", {
//         tel: digits,
//         password,
//       });
//       const { token } = resp.data;
//       // Cookie saklama
//       Cookies.set("token", token, {
//         expires: 3,
//         secure: true,
//         sameSite: "Lax",
//       });
//       setLoginPopup(true);
//       // Başarı mesajı gösterildikten sonra yönlendir
//       setTimeout(() => {
//         router.replace(`/${locale}/account/profile`);
//       }, 1000);
//     } catch (err) {
//       console.error("Login error:", err);
//       if (err.response?.status === 401) {
//         setLoginError(t("invalid-credentials") || "Telefon və ya şifrə səhvdir");
//       } else {
//         setLoginError(t("login-error") || "Giriş zamanı xəta baş verdi");
//       }
//     } finally {
//       setLoginLoading(false);
//     }
//   };

//   // Handler: Register initial submit -> OTP gönder
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setRegisterError(null);

//     // Validasyon
//     const digits = phone.replace(/\D/g, "");
//     if (!name.trim() || digits.length !== 9 || !password || !confirmPwd || !agree) {
//       setRegisterError(t("complete-all-fields") || "Bütün sahələri doldurun və razılaşın");
//       return;
//     }
//     if (password !== confirmPwd) {
//       setRegisterError(t("password-mismatch") || "Şifrəlar eyni deyil");
//       return;
//     }
//     if (password.length < 6) {
//       setRegisterError(t("password-length") || "Şifrə ən az 6 simvol olmalıdır");
//       return;
//     }

//     setRegisterLoading(true);
//     try {
//       // OTP isteği
//       await axiosInstance.post("/otp", { tel: digits });
//       setOtpSent(true);
//       setOtpTimer(30);
//       setOtpSentAgain(false);
//     } catch (err) {
//       console.error("Error sending OTP:", err);
//       setRegisterError(t("otp-send-error") || "OTP göndərilərkən xəta");
//     } finally {
//       setRegisterLoading(false);
//     }
//   };

//   // Handler: OTP tekrar gönder
//   const handleSendOtpAgain = async () => {
//     if (otpTimer > 0) return;
//     setRegisterError(null);
//     const digits = phone.replace(/\D/g, "");
//     try {
//       await axiosInstance.post("/otp", { tel: digits });
//       setOtpSentAgain(true);
//       setOtpTimer(30);
//     } catch (err) {
//       console.error("Error sending OTP again:", err);
//       setRegisterError(t("otp-send-error") || "OTP göndərilərkən xəta");
//     }
//   };

//   // Handler: OTP ile kaydı tamamla
//   const handleRegisterVerify = async (e) => {
//     e.preventDefault();
//     setRegisterError(null);
//     if (otp.length !== 4) {
//       setRegisterError(t("otp-error") || "Düzgün OTP daxil edin");
//       return;
//     }
//     setRegisterLoading(true);
//     const digits = phone.replace(/\D/g, "");
//     try {
//       await axiosInstance.post("/register", {
//         name: name.trim(),
//         tel: digits,
//         password,
//         password_confirmation: confirmPwd,
//         otp_code: otp,
//       });
//       setRegisterPopup(true);
//       // Kayıt başarılı, login sekmesine dön
//       setTimeout(() => {
//         setTab("login");
//         // Alanları temizle
//         setName("");
//         setPhone("");
//         setPassword("");
//         setConfirmPwd("");
//         setAgree(false);
//         setOtp("");
//         setOtpSent(false);
//       }, 1500);
//     } catch (err) {
//       console.error("Registration error:", err);
//       if (err.response?.status === 422) {
//         setRegisterError(t("validation-error") || "Doğrulama xətası");
//       } else {
//         setRegisterError(t("phone-number-used") || "Bu nömrə artıq istifadə olunub");
//       }
//     } finally {
//       setRegisterLoading(false);
//     }
//   };

//   // Breadcrumb başlığı
//   const pageTitle = tab === "login" ? t("login") || "Daxil ol" : t("registration") || "Qeydiyyat";
//   const linkHref = `/${locale}/auth/login`;

//   return (
//     <div className="login-container pages">
//       {/* Breadcrumb */}
//       <Breadcrumb pageTitle={pageTitle} title={pageTitle} link={linkHref} />

//       {/* Başlık */}
//       <h1 className="login-title">{tab === "login" ? t("login") || "Daxil ol" : t("registration") || "Qeydiyyat"}</h1>

//       {/* Sekme butonları */}
//       <div className="login-tabs">
//         <button
//           className={`login-tab ${tab === "login" ? "active" : ""}`}
//           onClick={() => {
//             setTab("login");
//             // Reset login/registration alt durumları
//             setLoginError(null);
//             setLoginLoading(false);
//             setLoginPopup(false);
//             // ayrıca register alt adımları sıfırla
//             setOtpSent(false);
//             setOtp("");
//             setRegisterError(null);
//             setRegisterLoading(false);
//           }}
//         >
//           {t("login") || "Daxil ol"}
//         </button>
//         <button
//           className={`login-tab ${tab === "register" ? "active" : ""}`}
//           onClick={() => {
//             setTab("register");
//             // Reset register alt durumları
//             setRegisterError(null);
//             setRegisterLoading(false);
//             setOtpSent(false);
//             setOtp("");
//             setOtpSentAgain(false);
//             setOtpTimer(0);
//             setRegisterPopup(false);
//             // reset common fields?
//             setName("");
//             setPhone("");
//             setPassword("");
//             setConfirmPwd("");
//             setAgree(false);
//           }}
//         >
//           {t("registration") || "Qeydiyyat"}
//         </button>
//       </div>

//       {/* LOGIN FORM */}
//       {tab === "login" && (
//         <form className="login-form" onSubmit={handleLogin}>
//           <label htmlFor="phone" className="login-label">{t("number") || "Nömrə"}</label>
//           <div className="login-group">
//             <span className="login-prefix">+994</span>
//             <input
//               id="phone"
//               type="tel"
//               className="login-input"
//               value={phone}
//               onChange={(e) => {
//                 // sadece rakam
//                 const v = e.target.value.replace(/\D/g, "");
//                 setPhone(v);
//               }}
//               maxLength={9}
//               required
//             />
//           </div>
//           <label htmlFor="password" className="login-label">{t("password") || "Şifrə"}</label>
//           <div className="login-group">
//             <span className="login-icon"><HiLockClosed /></span>
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? t("hide-password") || "Şifrəni gizlət" : t("show-password") || "Şifrəni göstər"}
//             >
//               <LuEyeClosed />
//             </button>
//           </div>
//           {loginError && <div className="errorInfo" role="alert">{loginError}</div>}
//           <button type="submit" className="login-submit blackButton" disabled={loginLoading}>
//             {loginLoading ? t("loading") || "Yüklənir..." : t("login") || "Daxil ol"}
//           </button>
//           <a href={`/${locale}/forgot-password`} className="login-forgot">
//             {t("forgot-password") || "Şifrəmi unutdum"}
//           </a>

//           {/* Popup göster */}
//           <Popup icon="check" title={t("login-success") || "Uğurla daxil oldunuz"} isActive={loginPopup} />
//         </form>
//       )}

//       {/* REGISTER FORM veya OTP FORM */}
//       {tab === "register" && !otpSent && (
//         <form className="login-form" onSubmit={handleRegister}>
//           <label htmlFor="name" className="login-label">{t("name-surname") || "Ad Soyad"}</label>
//           <div className="login-group">
//             <input
//               id="name"
//               type="text"
//               className="login-input"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <label htmlFor="phone2" className="login-label">{t("number") || "Nömrə"}</label>
//           <div className="login-group">
//             <span className="login-prefix">+994</span>
//             <input
//               id="phone2"
//               type="tel"
//               className="login-input"
//               value={phone}
//               onChange={(e) => {
//                 const v = e.target.value.replace(/\D/g, "");
//                 setPhone(v);
//               }}
//               maxLength={9}
//               required
//             />
//           </div>
//           <label htmlFor="pwd2" className="login-label">{t("password") || "Şifrə"}</label>
//           <div className="login-group">
//             <span className="login-icon"><HiLockClosed /></span>
//             <input
//               id="pwd2"
//               type={showPassword ? "text" : "password"}
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? t("hide-password") || "Şifrəni gizlət" : t("show-password") || "Şifrəni göstər"}
//             >
//               <LuEyeClosed />
//             </button>
//           </div>
//           <label htmlFor="confirm" className="login-label">{t("repeat-password") || "Şifrəni təkrar et"}</label>
//           <div className="login-group">
//             <span className="login-icon"><HiLockClosed /></span>
//             <input
//               id="confirm"
//               type={showPassword ? "text" : "password"}
//               className="login-input"
//               value={confirmPwd}
//               onChange={(e) => setConfirmPwd(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? t("hide-password") || "Şifrəni gizlət" : t("show-password") || "Şifrəni göstər"}
//             >
//               <LuEyeClosed />
//             </button>
//           </div>
//           <div className="register-terms">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={agree}
//               onChange={(e) => setAgree(e.target.checked)}
//             />
//             <label htmlFor="terms">{t("registration-agree") || "Şərtləri oxudum, qəbul edirəm"}</label>
//             {/*
//               Eğer support içinden privacy-policy linki göstermek istersen:
//             */}
//             {support &&
//               (() => {
//                 const policyItem = support.find(item =>
//                   item.slug.includes("politika") || item.slug.includes("gizlilik")
//                 );
//                 if (policyItem) {
//                   return (
//                     <Link href={`/${locale}/support/${policyItem.slug}`} className="privacy-link">
//                       {t("privacy-policy") || "Gizlilik Siyasəti"}
//                     </Link>
//                   );
//                 }
//                 return null;
//               })()}
//           </div>
//           {registerError && <div className="errorInfo" role="alert">{registerError}</div>}
//           <button
//             type="submit"
//             className={`register-submit blackButton${agree ? "" : " deactive"}`}
//             disabled={!agree || registerLoading}
//           >
//             {registerLoading ? t("loading") || "Yüklənir..." : t("register") || "Qeydiyyatdan keç"}
//           </button>
//           <button
//             type="button"
//             className="register-back linkButton"
//             onClick={() => {
//               setTab("login");
//               // temizle
//               setPhone("");
//               setPassword("");
//               setLoginError(null);
//             }}
//           >
//             {t("login") || "Daxil ol"}
//           </button>
//         </form>
//       )}

//       {/* OTP doğrulama bölümü */}
//       {tab === "register" && otpSent && (
//         <form className="login-form" onSubmit={handleRegisterVerify}>
//           {/* Başarı popup */}
//           <Popup icon="check" title={t("register-success") || "Uğurla qeydiyyatdan keçdiniz"} isActive={registerPopup} />
//           <p className="otp-title">{t("otp-code") || "Doğrulama Kodu"}</p>
//           <div className="otp-group">
//             <OtpInput
//               value={otp}
//               onChange={setOtp}
//               numInputs={4}
//               isInputNum
//               shouldAutoFocus
//               renderInput={(props) => (
//                 <input className="login-input otp-input" {...props} placeholder="-" />
//               )}
//             />
//           </div>
//           {registerError && <div className="errorInfo" role="alert">{registerError}</div>}
//           <button type="submit" className="login-submit blackButton" disabled={registerLoading}>
//             {registerLoading ? t("loading") || "Yüklənir..." : t("register") || "Təsdiq et"}
//           </button>
//           <div className="otp-resend">
//             <p>{t("send-otp-again") || "OTP yenidən göndər"}</p>
//             <button
//               type="button"
//               onClick={handleSendOtpAgain}
//               disabled={otpTimer > 0}
//               className={otpSentAgain && otpTimer === 0 ? "active" : ""}
//             >
//               {otpTimer > 0
//                 ? `${otpTimer}s`
//                 : otpSentAgain
//                 ? t("sent") || "Göndərildi"
//                 : t("send-again") || "Yenidən göndər"}
//             </button>
//           </div>
//           <button
//             type="button"
//             className="register-back linkButton"
//             onClick={() => {
//               // OTP ekranından geri dön register formuna
//               setOtpSent(false);
//               setOtp("");
//               setRegisterError(null);
//             }}
//           >
//             {t("change-number") || "Nömrəni dəyiş"}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// // !son versiya 















// // components/Auth/LoginForm.jsx
// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, useParams } from "next/navigation";
// import Cookies from "js-cookie";
// import axiosInstance from "@/lib/axios"; // Projendeki axios yolu ile uyumlu olsun

// export default function LoginForm() {
//   const router = useRouter();
//   const { locale } = useParams(); // [locale] parametre varsa

//   // Sekme: 'login' veya 'register'
//   const [tab, setTab] = useState("login");

//   // Ortak alanlar
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // Login durumu
//   const [loginError, setLoginError] = useState(null);
//   const [loginLoading, setLoginLoading] = useState(false);
//   const [loginSuccess, setLoginSuccess] = useState(false);

//   // Register adım 1 durumu
//   const [name, setName] = useState("");
//   const [confirmPwd, setConfirmPwd] = useState("");
//   const [agree, setAgree] = useState(false);
//   const [registerError, setRegisterError] = useState(null);
//   const [registerLoading, setRegisterLoading] = useState(false);
//   const [registerSuccess, setRegisterSuccess] = useState(false);

//   // OTP akışı durumu
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [otpSentAgain, setOtpSentAgain] = useState(false);
//   const [otpTimer, setOtpTimer] = useState(0);

//   // Support verisi (opsiyonel privacy-policy linki için)
//   const [support, setSupport] = useState(null);

//   // 1) Token kontrolü: eğer token varsa profile sayfasına yönlendir
//   useEffect(() => {
//     const token = Cookies.get("token");
//     if (token) {
//       router.replace(`/${locale}/account/profile`);
//     }
//   }, [locale, router]);

//   // 2) Support verisini fetch et (register sırasında privacy-policy linki göstermek için)
//   useEffect(() => {
//     let isMounted = true;
//     const fetchSupport = async () => {
//       try {
//         const resp = await axiosInstance.get("/supports");
//         if (isMounted) {
//           setSupport(resp?.data?.support || []);
//         }
//       } catch (err) {
//         console.error("Error fetching support data:", err);
//       }
//     };
//     fetchSupport();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // OTP yeniden gönderme geri sayım timer
//   useEffect(() => {
//     let timerId;
//     if (otpTimer > 0) {
//       timerId = setTimeout(() => {
//         setOtpTimer((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearTimeout(timerId);
//   }, [otpTimer]);

//   // Login submit handler
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoginError(null);
//     setLoginSuccess(false);

//     const digits = phone.replace(/\D/g, "");
//     if (digits.length !== 9) {
//       setLoginError("Telefon nömrəsi 9 rəqəm olmalıdır");
//       return;
//     }
//     if (!password) {
//       setLoginError("Şifrə daxil edin");
//       return;
//     }

//     setLoginLoading(true);
//     try {
//       const resp = await axiosInstance.post("/login", {
//         tel: digits,
//         password,
//       });
//       const { token } = resp.data;
//       Cookies.set("token", token, {
//         expires: 3,
//         secure: true,
//         sameSite: "Lax",
//       });
//       setLoginSuccess(true);
//       setTimeout(() => {
//         router.replace(`/${locale}/account/profile`);
//       }, 1000);
//     } catch (err) {
//       console.error("Login error:", err);
//       if (err.response?.status === 401) {
//         setLoginError("Telefon və ya şifrə səhvdir");
//       } else {
//         setLoginError("Giriş zamanı xəta baş verdi");
//       }
//     } finally {
//       setLoginLoading(false);
//     }
//   };

//   // Register initial submit -> OTP gönder
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setRegisterError(null);
//     setRegisterSuccess(false);

//     const digits = phone.replace(/\D/g, "");
//     if (!name.trim() || digits.length !== 9 || !password || !confirmPwd || !agree) {
//       setRegisterError("Bütün sahələri doldurun və şərtləri qəbul edin");
//       return;
//     }
//     if (password !== confirmPwd) {
//       setRegisterError("Şifrələr eyni deyil");
//       return;
//     }
//     if (password.length < 6) {
//       setRegisterError("Şifrə ən az 6 simvol olmalıdır");
//       return;
//     }

//     setRegisterLoading(true);
//     try {
//       await axiosInstance.post("/otp", { tel: digits });
//       setOtpSent(true);
//       setOtpTimer(30);
//       setOtpSentAgain(false);
//       setRegisterSuccess(true); // Kısa mesaj göstermek için
//     } catch (err) {
//       console.error("Error sending OTP:", err);
//       setRegisterError("OTP göndərilərkən xəta baş verdi");
//     } finally {
//       setRegisterLoading(false);
//     }
//   };

//   // OTP tekrar gönder
//   const handleSendOtpAgain = async () => {
//     if (otpTimer > 0) return;
//     setRegisterError(null);
//     const digits = phone.replace(/\D/g, "");
//     try {
//       await axiosInstance.post("/otp", { tel: digits });
//       setOtpSentAgain(true);
//       setOtpTimer(30);
//     } catch (err) {
//       console.error("Error sending OTP again:", err);
//       setRegisterError("OTP göndərilərkən xəta baş verdi");
//     }
//   };

//   // OTP ile register tamamla
//   const handleRegisterVerify = async (e) => {
//     e.preventDefault();
//     setRegisterError(null);

//     if (otp.length !== 4) {
//       setRegisterError("Düzgün OTP daxil edin");
//       return;
//     }
//     setRegisterLoading(true);
//     const digits = phone.replace(/\D/g, "");
//     try {
//       await axiosInstance.post("/register", {
//         name: name.trim(),
//         tel: digits,
//         password,
//         password_confirmation: confirmPwd,
//         otp_code: otp,
//       });
//       setRegisterSuccess(true);
//       setTimeout(() => {
//         // Kayıt sonrası login tabına dön ve alanları sıfırla
//         setTab("login");
//         setName("");
//         setPhone("");
//         setPassword("");
//         setConfirmPwd("");
//         setAgree(false);
//         setOtp("");
//         setOtpSent(false);
//         setOtpSentAgain(false);
//         setOtpTimer(0);
//         setRegisterSuccess(false);
//       }, 1500);
//     } catch (err) {
//       console.error("Registration error:", err);
//       if (err.response?.status === 422) {
//         setRegisterError("Doğrulama xətası");
//       } else {
//         setRegisterError("Bu nömrə artıq istifadə olunub");
//       }
//     } finally {
//       setRegisterLoading(false);
//     }
//   };

//   // Sekme değiştirirken state temizleme
//   const switchToLogin = () => {
//     setTab("login");
//     setLoginError(null);
//     setLoginLoading(false);
//     setLoginSuccess(false);
//     // register alt durumları temizle
//     setOtpSent(false);
//     setOtp("");
//     setRegisterError(null);
//     setRegisterLoading(false);
//     setRegisterSuccess(false);
//   };
//   const switchToRegister = () => {
//     setTab("register");
//     setRegisterError(null);
//     setRegisterLoading(false);
//     setOtpSent(false);
//     setOtp("");
//     setOtpSentAgain(false);
//     setOtpTimer(0);
//     setRegisterSuccess(false);
//     // ortak alanları temizle
//     setName("");
//     setPhone("");
//     setPassword("");
//     setConfirmPwd("");
//     setAgree(false);
//   };

//   return (
//     <div className="login-container">
//       {/* Başlık */}
//       <h1 className="login-title">
//         {tab === "login"
//           ? "Daxil ol"
//           : otpSent
//           ? "OTP Doğrulama"
//           : "Qeydiyyat"}
//       </h1>

//       {/* Sekme butonları */}
//       <div className="login-tabs">
//         <button
//           className={`login-tab ${tab === "login" ? "active" : ""}`}
//           onClick={switchToLogin}
//         >
//           Daxil ol
//         </button>
//         <button
//           className={`login-tab ${tab === "register" ? "active" : ""}`}
//           onClick={switchToRegister}
//         >
//           Qeydiyyat
//         </button>
//       </div>

//       {/* LOGIN FORM */}
//       {tab === "login" && (
//         <form className="login-form" onSubmit={handleLogin}>
//           <label htmlFor="phone" className="login-label">Nömrə</label>
//           <div className="login-group">
//             <span className="login-prefix">+994</span>
//             <input
//               id="phone"
//               type="tel"
//               className="login-input"
//               value={phone}
//               onChange={(e) => {
//                 const v = e.target.value.replace(/\D/g, "");
//                 if (v.length <= 9) setPhone(v);
//               }}
//               maxLength={9}
//               required
//             />
//           </div>

//           <label htmlFor="password" className="login-label">Şifrə</label>
//           <div className="login-group">
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
//             >
//               {showPassword ? "Gizlət" : "Göstər"}
//             </button>
//           </div>

//           {loginError && (
//             <div className="errorInfo" role="alert">{loginError}</div>
//           )}
//           <button
//             type="submit"
//             className="login-submit"
//             disabled={loginLoading}
//           >
//             {loginLoading ? "Yüklənir..." : "Daxil ol"}
//           </button>
//           <a href={`/${locale}/forgot-password`} className="login-forgot">
//             Şifrəmi unutdum
//           </a>

//           {loginSuccess && (
//             <div className="successInfo">Uğurla daxil oldunuz</div>
//           )}
//         </form>
//       )}

//       {/* REGISTER FORM (ilk adım) */}
//       {tab === "register" && !otpSent && (
//         <form className="login-form" onSubmit={handleRegister}>
//           <label htmlFor="name" className="login-label">Ad Soyad</label>
//           <div className="login-group">
//             <input
//               id="name"
//               type="text"
//               className="login-input"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <label htmlFor="phone2" className="login-label">Nömrə</label>
//           <div className="login-group">
//             <span className="login-prefix">+994</span>
//             <input
//               id="phone2"
//               type="tel"
//               className="login-input"
//               value={phone}
//               onChange={(e) => {
//                 const v = e.target.value.replace(/\D/g, "");
//                 if (v.length <= 9) setPhone(v);
//               }}
//               maxLength={9}
//               required
//             />
//           </div>

//           <label htmlFor="pwd2" className="login-label">Şifrə</label>
//           <div className="login-group">
//             <input
//               id="pwd2"
//               type={showPassword ? "text" : "password"}
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
//             >
//               {showPassword ? "Gizlət" : "Göstər"}
//             </button>
//           </div>

//           <label htmlFor="confirm" className="login-label">Şifrəni təkrar et</label>
//           <div className="login-group">
//             <input
//               id="confirm"
//               type={showPassword ? "text" : "password"}
//               className="login-input"
//               value={confirmPwd}
//               onChange={(e) => setConfirmPwd(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
//             >
//               {showPassword ? "Gizlət" : "Göstər"}
//             </button>
//           </div>

//           <div className="register-terms">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={agree}
//               onChange={(e) => setAgree(e.target.checked)}
//             />
//             <label htmlFor="terms">Şərtləri oxudum, qəbul edirəm</label>
//             {support && (
//               (() => {
//                 const policyItem = support.find(item =>
//                   item.slug.includes("politika") || item.slug.includes("gizlilik")
//                 );
//                 if (policyItem) {
//                   return (
//                     <a
//                       href={`/${locale}/support/${policyItem.slug}`}
//                       className="privacy-link"
//                     >
//                       Gizlilik Siyasəti
//                     </a>
//                   );
//                 }
//                 return null;
//               })()
//             )}
//           </div>

//           {registerError && (
//             <div className="errorInfo" role="alert">{registerError}</div>
//           )}
//           <button
//             type="submit"
//             className={`register-submit${agree ? "" : " disabled"}`}
//             disabled={!agree || registerLoading}
//           >
//             {registerLoading ? "Yüklənir..." : "Qeydiyyatdan keç"}
//           </button>

//           <button
//             type="button"
//             className="register-back"
//             onClick={switchToLogin}
//           >
//             Daxil ol
//           </button>

//           {registerSuccess && (
//             <div className="successInfo">OTP gözlənilir...</div>
//           )}
//         </form>
//       )}

//       {/* OTP doğrulama bölümü */}
//       {tab === "register" && otpSent && (
//         <form className="login-form" onSubmit={handleRegisterVerify}>
//           <p className="otp-title">Doğrulama Kodu</p>
//           <div className="login-group otp-group">
//             <input
//               type="text"
//               className="login-input otp-input"
//               value={otp}
//               onChange={(e) => {
//                 const v = e.target.value.replace(/\D/g, "");
//                 if (v.length <= 4) setOtp(v);
//               }}
//               maxLength={4}
//               required
//             />
//           </div>

//           {registerError && (
//             <div className="errorInfo" role="alert">{registerError}</div>
//           )}
//           <button
//             type="submit"
//             className="login-submit"
//             disabled={registerLoading}
//           >
//             {registerLoading ? "Yüklənir..." : "Təsdiq et"}
//           </button>

//           <div className="otp-resend">
//             <p>OTP yenidən göndər</p>
//             <button
//               type="button"
//               onClick={handleSendOtpAgain}
//               disabled={otpTimer > 0}
//               className={otpSentAgain && otpTimer === 0 ? "active" : ""}
//             >
//               {otpTimer > 0 ? `${otpTimer}s` : otpSentAgain ? "Göndərildi" : "Yenidən göndər"}
//             </button>
//           </div>

//           <button
//             type="button"
//             className="register-back"
//             onClick={() => {
//               setOtpSent(false);
//               setOtp("");
//               setRegisterError(null);
//             }}
//           >
//             Nömrəni dəyiş
//           </button>

//           {registerSuccess && (
//             <div className="successInfo">Uğurla qeydiyyatdan keçdiniz</div>
//           )}
//         </form>
//       )}
//     </div>
//   );
// }





// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------














// components/Auth/LoginForm.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Cookies from "js-cookie";
import axiosInstance from "@/lib/axios"; // Projendeki axios yolu ile uyumlu olsun
import { HiLockClosed, HiCheckCircle } from "react-icons/hi";
import { LuEyeClosed, LuEye } from "react-icons/lu";

export default function LoginForm() {
  const router = useRouter();
  const { locale } = useParams(); // [locale] parametre varsa

  // Sekme: 'login' veya 'register'
  const [tab, setTab] = useState("login");

  // Ortak alanlar
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Login durumu
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Register adım 1 durumu
  const [name, setName] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [agree, setAgree] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  // OTP akışı durumu
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSentAgain, setOtpSentAgain] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  // Support verisi (opsiyonel privacy-policy linki için)
  const [support, setSupport] = useState(null);

  // 1) Token kontrolü: eğer token varsa profile sayfasına yönlendir
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.replace(`/${locale}/account/profile`);
    }
  }, [locale, router]);

  // 2) Support verisini fetch et (register sırasında privacy-policy linki göstermek için)
  useEffect(() => {
    let isMounted = true;
    const fetchSupport = async () => {
      try {
        const resp = await axiosInstance.get("/supports");
        if (isMounted) {
          setSupport(resp?.data?.support || []);
        }
      } catch (err) {
        console.error("Error fetching support data:", err);
      }
    };
    fetchSupport();
    return () => {
      isMounted = false;
    };
  }, []);

  // OTP yeniden gönderme geri sayım timer
  useEffect(() => {
    let timerId;
    if (otpTimer > 0) {
      timerId = setTimeout(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [otpTimer]);

  // Login submit handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(null);
    setLoginSuccess(false);

    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 9) {
      setLoginError("Telefon nömrəsi 9 rəqəm olmalıdır");
      return;
    }
    if (!password) {
      setLoginError("Şifrə daxil edin");
      return;
    }

    setLoginLoading(true);
    try {
      const resp = await axiosInstance.post("/login", {
        tel: digits,
        password,
      });
      const { token } = resp.data;
      Cookies.set("token", token, {
        expires: 3,
        secure: true,
        sameSite: "Lax",
      });
      // Başarı durumunu göster
      setLoginSuccess(true);

      // Bir süre sonra otomatik yönlendirme
      setTimeout(() => {
        router.replace(`/${locale}/account/profile`);
      }, 1000);
    } catch (err) {
      console.error("Login error:", err);
      if (err.response?.status === 401) {
        setLoginError("Telefon və ya şifrə səhvdir");
      } else {
        setLoginError("Giriş zamanı xəta baş verdi");
      }
    } finally {
      setLoginLoading(false);
    }
  };

  // Register initial submit -> OTP gönder
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError(null);
    setRegisterSuccess(false);

    const digits = phone.replace(/\D/g, "");
    if (!name.trim() || digits.length !== 9 || !password || !confirmPwd || !agree) {
      setRegisterError("Bütün sahələri doldurun və şərtləri qəbul edin");
      return;
    }
    if (password !== confirmPwd) {
      setRegisterError("Şifrələr eyni deyil");
      return;
    }
    if (password.length < 6) {
      setRegisterError("Şifrə ən az 6 simvol olmalıdır");
      return;
    }

    setRegisterLoading(true);
    try {
      await axiosInstance.post("/otp", { tel: digits });
      setOtpSent(true);
      setOtpTimer(30);
      setOtpSentAgain(false);
      setRegisterSuccess(true); // Kısa mesaj göstermek için
    } catch (err) {
      console.error("Error sending OTP:", err);
      setRegisterError("OTP göndərilərkən xəta baş verdi");
    } finally {
      setRegisterLoading(false);
    }
  };

  // OTP tekrar gönder
  const handleSendOtpAgain = async () => {
    if (otpTimer > 0) return;
    setRegisterError(null);
    const digits = phone.replace(/\D/g, "");
    try {
      await axiosInstance.post("/otp", { tel: digits });
      setOtpSentAgain(true);
      setOtpTimer(30);
    } catch (err) {
      console.error("Error sending OTP again:", err);
      setRegisterError("OTP göndərilərkən xəta baş verdi");
    }
  };

  // OTP ile register tamamla
  const handleRegisterVerify = async (e) => {
    e.preventDefault();
    setRegisterError(null);

    if (otp.length !== 4) {
      setRegisterError("Düzgün OTP daxil edin");
      return;
    }
    setRegisterLoading(true);
    const digits = phone.replace(/\D/g, "");
    try {
      await axiosInstance.post("/register", {
        name: name.trim(),
        tel: digits,
        password,
        password_confirmation: confirmPwd,
        otp_code: otp,
      });
      setRegisterSuccess(true);
      setTimeout(() => {
        // Kayıt sonrası login tabına dön ve alanları sıfırla
        setTab("login");
        setName("");
        setPhone("");
        setPassword("");
        setConfirmPwd("");
        setAgree(false);
        setOtp("");
        setOtpSent(false);
        setOtpSentAgain(false);
        setOtpTimer(0);
        setRegisterSuccess(false);
      }, 1500);
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response?.status === 422) {
        setRegisterError("Doğrulama xətası");
      } else {
        setRegisterError("Bu nömrə artıq istifadə olunub");
      }
    } finally {
      setRegisterLoading(false);
    }
  };

  // Sekme değiştirirken state temizleme
  const switchToLogin = () => {
    setTab("login");
    setLoginError(null);
    setLoginLoading(false);
    setLoginSuccess(false);
    // register alt durumları temizle
    setOtpSent(false);
    setOtp("");
    setRegisterError(null);
    setRegisterLoading(false);
    setRegisterSuccess(false);
  };
  const switchToRegister = () => {
    setTab("register");
    setRegisterError(null);
    setRegisterLoading(false);
    setOtpSent(false);
    setOtp("");
    setOtpSentAgain(false);
    setOtpTimer(0);
    setRegisterSuccess(false);
    // ortak alanları temizle
    setName("");
    setPhone("");
    setPassword("");
    setConfirmPwd("");
    setAgree(false);
  };

  return (
    <div className="login-container">
      {/* Başlık */}
      <h1 className="login-title">
        {tab === "login"
          ? "Daxil ol"
          : otpSent
          ? "OTP Doğrulama"
          : "Qeydiyyat"}
      </h1>

      {/* Sekme butonları */}
      <div className="login-tabs">
        <button
          type="button"
          className={`login-tab ${tab === "login" ? "active" : ""}`}
          onClick={switchToLogin}
        >
          Daxil ol
        </button>
        <button
          type="button"
          className={`login-tab ${tab === "register" ? "active" : ""}`}
          onClick={switchToRegister}
        >
          Qeydiyyat
        </button>
      </div>

      {/* LOGIN FORM */}
      {tab === "login" && (
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="phone" className="login-label">Nömrə</label>
          <div className="login-group">
            <span className="login-prefix">+994</span>
            <input
              id="phone"
              type="tel"
              className="login-input"
              value={phone}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "");
                if (v.length <= 9) setPhone(v);
              }}
              maxLength={9}
              required
            />
          </div>

          <label htmlFor="password" className="login-label">Şifrə</label>
          <div className="login-group">
            <span className="login-icon">
              <HiLockClosed />
            </span>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="login-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
            >
              {showPassword ? <LuEye /> : <LuEyeClosed />}
            </button>
          </div>

          {loginError && (
            <div className="errorInfo" role="alert">{loginError}</div>
          )}
          <button
            type="submit"
            className="login-submit"
            disabled={loginLoading}
          >
            {loginLoading ? "Yüklənir..." : "Daxil ol"}
          </button>
          <a href={`/${locale}/forgot-password`} className="login-forgot">
            Şifrəmi unutdum
          </a>

          {loginSuccess && (
            <div className="successInfo">Uğurla daxil oldunuz: </div>
          )}
        </form>
      )}

      {/* REGISTER FORM (ilk adım) */}
      {tab === "register" && !otpSent && (
        <form className="login-form" onSubmit={handleRegister}>
          <label htmlFor="name" className="login-label">Ad Soyad</label>
          <div className="login-group">
            <input
              id="name"
              type="text"
              className="login-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <label htmlFor="phone2" className="login-label">Nömrə</label>
          <div className="login-group">
            <span className="login-prefix">+994</span>
            <input
              id="phone2"
              type="tel"
              className="login-input"
              value={phone}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "");
                if (v.length <= 9) setPhone(v);
              }}
              maxLength={9}
              required
            />
          </div>

          <label htmlFor="pwd2" className="login-label">Şifrə</label>
          <div className="login-group">
            <span className="login-icon">
              <HiLockClosed />
            </span>
            <input
              id="pwd2"
              type={showPassword ? "text" : "password"}
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="login-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
            >
              {showPassword ? <LuEye /> : <LuEyeClosed />}
            </button>
          </div>

          <label htmlFor="confirm" className="login-label">Şifrəni təkrar et</label>
          <div className="login-group">
            <span className="login-icon">
              <HiLockClosed />
            </span>
            <input
              id="confirm"
              type={showPassword ? "text" : "password"}
              className="login-input"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
              required
            />
            <button
              type="button"
              className="login-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
            >
              {showPassword ? <LuEye /> : <LuEyeClosed />}
            </button>
          </div>

          <div className="register-terms">
            <input
              type="checkbox"
              id="terms"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="terms">Şərtləri oxudum, qəbul edirəm</label>
            {support && (
              (() => {
                const policyItem = support.find(item =>
                  item.slug.includes("politika") || item.slug.includes("gizlilik")
                );
                if (policyItem) {
                  return (
                    <a
                      href={`/${locale}/support/${policyItem.slug}`}
                      className="privacy-link"
                    >
                      Gizlilik Siyasəti
                    </a>
                  );
                }
                return null;
              })()
            )}
          </div>

          {registerError && (
            <div className="errorInfo" role="alert">{registerError}</div>
          )}
          <button
            type="submit"
            className={`register-submit${agree ? "" : " disabled"}`}
            disabled={!agree || registerLoading}
          >
            {registerLoading ? "Yüklənir..." : "Qeydiyyatdan keç"}
          </button>

          <button
            type="button"
            className="register-back"
            onClick={switchToLogin}
          >
            Daxil ol
          </button>

          {registerSuccess && (
            <div className="successInfo">OTP gözlənilir...</div>
          )}
        </form>
      )}

      {/* OTP doğrulama bölümü */}
      {tab === "register" && otpSent && (
        <form className="login-form" onSubmit={handleRegisterVerify}>
          <p className="otp-title">Doğrulama Kodu</p>
          <div className="login-group otp-group">
            <input
              type="text"
              className="login-input otp-input"
              value={otp}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "");
                if (v.length <= 4) setOtp(v);
              }}
              maxLength={4}
              required
            />
          </div>

          {registerError && (
            <div className="errorInfo" role="alert">{registerError}</div>
          )}
          <button
            type="submit"
            className="login-submit"
            disabled={registerLoading}
          >
            {registerLoading ? "Yüklənir..." : "Təsdiq et"}
          </button>

          <div className="otp-resend">
            {/* <p>OTP yenidən göndər</p> */}
            <button
              type="button"
              id="otpRepeat"
              onClick={handleSendOtpAgain}
              disabled={otpTimer > 0}
              className={otpSentAgain && otpTimer === 0 ? "active" : ""}
            >
              {otpTimer > 0 ? `${otpTimer}s` : otpSentAgain ? "Göndərildi" : "Yenidən göndər"}
            </button>
          </div>

          <button
            type="button"
            className="register-back"
            onClick={() => {
              setOtpSent(false);
              setOtp("");
              setRegisterError(null);
            }}
          >
            Nömrəni dəyiş
          </button>

          {/* {registerSuccess && (
            <div className="successInfos">Uğurla qeydiyyatdan keçdiniz</div>
          )} */}
        </form>
      )}

      {/* LOGIN BAŞARILIYSA GÖSTERİLECEK POPUP */}
      {loginSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            {/* <div className="flex justify-center mb-4">
              <HiCheckCircle className="text-green-500" size={48} />
            </div> */}
            {/* <p className="text-gray-700 text-lg sbSuccess">Uğurla giriş edildi</p> */}
          </div>
        </div>
      )}
    </div>
  );
}



















// // components/Auth/LoginForm.jsx
// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, useParams } from "next/navigation";
// import Cookies from "js-cookie";
// import axiosInstance from "@/lib/axios"; // Projendeki axios yolu ile uyumlu olsun
// import { HiLockClosed } from "react-icons/hi";
// import { LuEyeClosed, LuEye } from "react-icons/lu"; // LuEyeClosed ve LuEye (göz açık) import

// export default function LoginForm() {
//   const router = useRouter();
//   const { locale } = useParams(); // [locale] parametre varsa

//   // Sekme: 'login' veya 'register'
//   const [tab, setTab] = useState("login");

//   // Ortak alanlar
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // Login durumu
//   const [loginError, setLoginError] = useState(null);
//   const [loginLoading, setLoginLoading] = useState(false);
//   const [loginSuccess, setLoginSuccess] = useState(false);

//   // Register adım 1 durumu
//   const [name, setName] = useState("");
//   const [confirmPwd, setConfirmPwd] = useState("");
//   const [agree, setAgree] = useState(false);
//   const [registerError, setRegisterError] = useState(null);
//   const [registerLoading, setRegisterLoading] = useState(false);
//   const [registerSuccess, setRegisterSuccess] = useState(false);

//   // OTP akışı durumu
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [otpSentAgain, setOtpSentAgain] = useState(false);
//   const [otpTimer, setOtpTimer] = useState(0);

//   // Support verisi (opsiyonel privacy-policy linki için)
//   const [support, setSupport] = useState(null);

//   // 1) Token kontrolü: eğer token varsa profile sayfasına yönlendir
//   useEffect(() => {
//     const token = Cookies.get("token");
//     if (token) {
//       router.replace(`/${locale}/account/profile`);
//     }
//   }, [locale, router]);

//   // 2) Support verisini fetch et (register sırasında privacy-policy linki göstermek için)
//   useEffect(() => {
//     let isMounted = true;
//     const fetchSupport = async () => {
//       try {
//         const resp = await axiosInstance.get("/supports");
//         if (isMounted) {
//           setSupport(resp?.data?.support || []);
//         }
//       } catch (err) {
//         console.error("Error fetching support data:", err);
//       }
//     };
//     fetchSupport();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // OTP yeniden gönderme geri sayım timer
//   useEffect(() => {
//     let timerId;
//     if (otpTimer > 0) {
//       timerId = setTimeout(() => {
//         setOtpTimer((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearTimeout(timerId);
//   }, [otpTimer]);

//   // Login submit handler
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoginError(null);
//     setLoginSuccess(false);

//     const digits = phone.replace(/\D/g, "");
//     if (digits.length !== 9) {
//       setLoginError("Telefon nömrəsi 9 rəqəm olmalıdır");
//       return;
//     }
//     if (!password) {
//       setLoginError("Şifrə daxil edin");
//       return;
//     }

//     setLoginLoading(true);
//     try {
//       const resp = await axiosInstance.post("/login", {
//         tel: digits,
//         password,
//       });
//       const { token } = resp.data;
//       Cookies.set("token", token, {
//         expires: 3,
//         secure: true,
//         sameSite: "Lax",
//       });
//       setLoginSuccess(true);
//       setTimeout(() => {
//         router.replace(`/${locale}/account/profile`);
//       }, 1000);
//     } catch (err) {
//       console.error("Login error:", err);
//       if (err.response?.status === 401) {
//         setLoginError("Telefon və ya şifrə səhvdir");
//       } else {
//         setLoginError("Giriş zamanı xəta baş verdi");
//       }
//     } finally {
//       setLoginLoading(false);
//     }
//   };

//   // Register initial submit -> OTP gönder
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setRegisterError(null);
//     setRegisterSuccess(false);

//     const digits = phone.replace(/\D/g, "");
//     if (!name.trim() || digits.length !== 9 || !password || !confirmPwd || !agree) {
//       setRegisterError("Bütün sahələri doldurun və şərtləri qəbul edin");
//       return;
//     }
//     if (password !== confirmPwd) {
//       setRegisterError("Şifrələr eyni deyil");
//       return;
//     }
//     if (password.length < 6) {
//       setRegisterError("Şifrə ən az 6 simvol olmalıdır");
//       return;
//     }

//     setRegisterLoading(true);
//     try {
//       await axiosInstance.post("/otp", { tel: digits });
//       setOtpSent(true);
//       setOtpTimer(30);
//       setOtpSentAgain(false);
//       setRegisterSuccess(true); // Kısa mesaj göstermek için
//     } catch (err) {
//       console.error("Error sending OTP:", err);
//       setRegisterError("OTP göndərilərkən xəta baş verdi");
//     } finally {
//       setRegisterLoading(false);
//     }
//   };

//   // OTP tekrar gönder
//   const handleSendOtpAgain = async () => {
//     if (otpTimer > 0) return;
//     setRegisterError(null);
//     const digits = phone.replace(/\D/g, "");
//     try {
//       await axiosInstance.post("/otp", { tel: digits });
//       setOtpSentAgain(true);
//       setOtpTimer(30);
//     } catch (err) {
//       console.error("Error sending OTP again:", err);
//       setRegisterError("OTP göndərilərkən xəta baş verdi");
//     }
//   };

//   // OTP ile register tamamla
//   const handleRegisterVerify = async (e) => {
//     e.preventDefault();
//     setRegisterError(null);

//     if (otp.length !== 4) {
//       setRegisterError("Düzgün OTP daxil edin");
//       return;
//     }
//     setRegisterLoading(true);
//     const digits = phone.replace(/\D/g, "");
//     try {
//       await axiosInstance.post("/register", {
//         name: name.trim(),
//         tel: digits,
//         password,
//         password_confirmation: confirmPwd,
//         otp_code: otp,
//       });
//       setRegisterSuccess(true);
//       setTimeout(() => {
//         // Kayıt sonrası login tabına dön ve alanları sıfırla
//         setTab("login");
//         setName("");
//         setPhone("");
//         setPassword("");
//         setConfirmPwd("");
//         setAgree(false);
//         setOtp("");
//         setOtpSent(false);
//         setOtpSentAgain(false);
//         setOtpTimer(0);
//         setRegisterSuccess(false);
//       }, 1500);
//     } catch (err) {
//       console.error("Registration error:", err);
//       if (err.response?.status === 422) {
//         setRegisterError("Doğrulama xətası");
//       } else {
//         setRegisterError("Bu nömrə artıq istifadə olunub");
//       }
//     } finally {
//       setRegisterLoading(false);
//     }
//   };

//   // Sekme değiştirirken state temizleme
//   const switchToLogin = () => {
//     setTab("login");
//     setLoginError(null);
//     setLoginLoading(false);
//     setLoginSuccess(false);
//     // register alt durumları temizle
//     setOtpSent(false);
//     setOtp("");
//     setRegisterError(null);
//     setRegisterLoading(false);
//     setRegisterSuccess(false);
//   };
//   const switchToRegister = () => {
//     setTab("register");
//     setRegisterError(null);
//     setRegisterLoading(false);
//     setOtpSent(false);
//     setOtp("");
//     setOtpSentAgain(false);
//     setOtpTimer(0);
//     setRegisterSuccess(false);
//     // ortak alanları temizle
//     setName("");
//     setPhone("");
//     setPassword("");
//     setConfirmPwd("");
//     setAgree(false);
//   };

//   return (
//     <div className="login-container">
//       {/* Başlık */}
//       <h1 className="login-title">
//         {tab === "login"
//           ? "Daxil ol"
//           : otpSent
//           ? "OTP Doğrulama"
//           : "Qeydiyyat"}
//       </h1>

//       {/* Sekme butonları */}
//       <div className="login-tabs">
//         <button
//           type="button"
//           className={`login-tab ${tab === "login" ? "active" : ""}`}
//           onClick={switchToLogin}
//         >
//           Daxil ol
//         </button>
//         <button
//           type="button"
//           className={`login-tab ${tab === "register" ? "active" : ""}`}
//           onClick={switchToRegister}
//         >
//           Qeydiyyat
//         </button>
//       </div>

//       {/* LOGIN FORM */}
//       {tab === "login" && (
//         <form className="login-form" onSubmit={handleLogin}>
//           <label htmlFor="phone" className="login-label">Nömrə</label>
//           <div className="login-group">
//             <span className="login-prefix">+994</span>
//             <input
//               id="phone"
//               type="tel"
//               className="login-input"
//               value={phone}
//               onChange={(e) => {
//                 const v = e.target.value.replace(/\D/g, "");
//                 if (v.length <= 9) setPhone(v);
//               }}
//               maxLength={9}
//               required
//             />
//           </div>

//           <label htmlFor="password" className="login-label">Şifrə</label>
//           <div className="login-group">
//             <span className="login-icon">
//               <HiLockClosed />
//             </span>
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
//             >
//               {showPassword ? <LuEye /> : <LuEyeClosed />}
//             </button>
//           </div>

//           {loginError && (
//             <div className="errorInfo" role="alert">{loginError}</div>
//           )}
//           <button
//             type="submit"
//             className="login-submit"
//             disabled={loginLoading}
//           >
//             {loginLoading ? "Yüklənir..." : "Daxil ol"}
//           </button>
//           <a href={`/${locale}/forgot-password`} className="login-forgot">
//             Şifrəmi unutdum
//           </a>

//           {loginSuccess && (
//             <div className="successInfo">Uğurla daxil oldunuz</div>
//           )}
//         </form>
//       )}

//       {/* REGISTER FORM (ilk adım) */}
//       {tab === "register" && !otpSent && (
//         <form className="login-form" onSubmit={handleRegister}>
//           <label htmlFor="name" className="login-label">Ad Soyad</label>
//           <div className="login-group">
//             <input
//               id="name"
//               type="text"
//               className="login-input"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <label htmlFor="phone2" className="login-label">Nömrə</label>
//           <div className="login-group">
//             <span className="login-prefix">+994</span>
//             <input
//               id="phone2"
//               type="tel"
//               className="login-input"
//               value={phone}
//               onChange={(e) => {
//                 const v = e.target.value.replace(/\D/g, "");
//                 if (v.length <= 9) setPhone(v);
//               }}
//               maxLength={9}
//               required
//             />
//           </div>

//           <label htmlFor="pwd2" className="login-label">Şifrə</label>
//           <div className="login-group">
//             <span className="login-icon">
//               <HiLockClosed />
//             </span>
//             <input
//               id="pwd2"
//               type={showPassword ? "text" : "password"}
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
//             >
//               {showPassword ? <LuEye /> : <LuEyeClosed />}
//             </button>
//           </div>

//           <label htmlFor="confirm" className="login-label">Şifrəni təkrar et</label>
//           <div className="login-group">
//             <span className="login-icon">
//               <HiLockClosed />
//             </span>
//             <input
//               id="confirm"
//               type={showPassword ? "text" : "password"}
//               className="login-input"
//               value={confirmPwd}
//               onChange={(e) => setConfirmPwd(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               className="login-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
//             >
//               {showPassword ? <LuEye /> : <LuEyeClosed />}
//             </button>
//           </div>

//           <div className="register-terms">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={agree}
//               onChange={(e) => setAgree(e.target.checked)}
//             />
//             <label htmlFor="terms">Şərtləri oxudum, qəbul edirəm</label>
//             {support && (
//               (() => {
//                 const policyItem = support.find(item =>
//                   item.slug.includes("politika") || item.slug.includes("gizlilik")
//                 );
//                 if (policyItem) {
//                   return (
//                     <a
//                       href={`/${locale}/support/${policyItem.slug}`}
//                       className="privacy-link"
//                     >
//                       Gizlilik Siyasəti
//                     </a>
//                   );
//                 }
//                 return null;
//               })()
//             )}
//           </div>

//           {registerError && (
//             <div className="errorInfo" role="alert">{registerError}</div>
//           )}
//           <button
//             type="submit"
//             className={`register-submit${agree ? "" : " disabled"}`}
//             disabled={!agree || registerLoading}
//           >
//             {registerLoading ? "Yüklənir..." : "Qeydiyyatdan keç"}
//           </button>

//           <button
//             type="button"
//             className="register-back"
//             onClick={switchToLogin}
//           >
//             Daxil ol
//           </button>

//           {registerSuccess && (
//             <div className="successInfo">OTP gözlənilir...</div>
//           )}
//         </form>
//       )}

//       {/* OTP doğrulama bölümü */}
//       {tab === "register" && otpSent && (
//         <form className="login-form" onSubmit={handleRegisterVerify}>
//           <p className="otp-title">Doğrulama Kodu</p>
//           <div className="login-group otp-group">
//             <input
//               type="text"
//               className="login-input otp-input"
//               value={otp}
//               onChange={(e) => {
//                 const v = e.target.value.replace(/\D/g, "");
//                 if (v.length <= 4) setOtp(v);
//               }}
//               maxLength={4}
//               required
//             />
//           </div>

//           {registerError && (
//             <div className="errorInfo" role="alert">{registerError}</div>
//           )}
//           <button
//             type="submit"
//             className="login-submit"
//             disabled={registerLoading}
//           >
//             {registerLoading ? "Yüklənir..." : "Təsdiq et"}
//           </button>

//           <div className="otp-resend">
//             <p>OTP yenidən göndər</p>
//             <button
//               type="button"
//               onClick={handleSendOtpAgain}
//               disabled={otpTimer > 0}
//               className={otpSentAgain && otpTimer === 0 ? "active" : ""}
//             >
//               {otpTimer > 0 ? `${otpTimer}s` : otpSentAgain ? "Göndərildi" : "Yenidən göndər"}
//             </button>
//           </div>

//           <button
//             type="button"
//             className="register-back"
//             onClick={() => {
//               setOtpSent(false);
//               setOtp("");
//               setRegisterError(null);
//             }}
//           >
//             Nömrəni dəyiş
//           </button>

//           {registerSuccess && (
//             <div className="successInfo">Uğurla qeydiyyatdan keçdiniz</div>
//           )}
//         </form>
//       )}
//     </div>
//   );
// }



















