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





































// components/LoginForm.jsx
'use client';
import { useState } from 'react';
import { LuEyeClosed } from 'react-icons/lu';
import { HiLockClosed } from 'react-icons/hi';

export default function LoginForm() {
  const [tab, setTab] = useState('login'); // 'login' | 'register'
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [agree, setAgree] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ phone, password });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ name, phone, password, confirmPwd });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">{tab === 'login' ? 'Daxil ol' : 'Qeydiyyat'}</h1>

      <div className="login-tabs">
        <button
          className={`login-tab ${tab === 'login' ? 'active' : ''}`}
          onClick={() => setTab('login')}
        >
          Daxil ol
        </button>
        <button
          className={`login-tab ${tab === 'register' ? 'active' : ''}`}
          onClick={() => setTab('register')}
        >
          Qeydiyyat
        </button>
      </div>

      {tab === 'login' && (
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="phone" className="login-label">Nömrə</label>
          <div className="login-group">
            <span className="login-prefix">+994</span>
            <input
              id="phone"
              type="tel"
              className="login-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <label htmlFor="password" className="login-label">Şifrə</label>
          <div className="login-group">
            <span className="login-icon"><HiLockClosed /></span>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="login-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
            >
              <LuEyeClosed />
            </button>
          </div>

          <button type="submit" className="login-submit">Daxil ol</button>
          <a href="#" className="login-forgot">Şifrəmi unutdum</a>
        </form>
      )}

      {tab === 'register' && (
        <form className="login-form" onSubmit={handleRegister}>
          <label htmlFor="name" className="login-label">Ad Soyad</label>
          <div className="login-group">
            <input
              id="name"
              type="text"
              className="login-input"
              value={name}
              onChange={e => setName(e.target.value)}
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
              onChange={e => setPhone(e.target.value)}
              required
            />
          </div>

          <label htmlFor="pwd2" className="login-label">Şifrə</label>
          <div className="login-group">
            <span className="login-icon"><HiLockClosed /></span>
            <input
              id="pwd2"
              type={showPassword ? 'text' : 'password'}
              className="login-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="login-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
            >
              <LuEyeClosed />
            </button>
          </div>

          <label htmlFor="confirm" className="login-label">Şifrəni təkrar et</label>
          <div className="login-group">
            <span className="login-icon"><HiLockClosed /></span>
            <input
              id="confirm"
              type={showPassword ? 'text' : 'password'}
              className="login-input"
              value={confirmPwd}
              onChange={e => setConfirmPwd(e.target.value)}
              required
            />
            <button
              type="button"
              className="login-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
            >
              <LuEyeClosed />
            </button>
          </div>

          <div className="register-terms">
            <input
              type="checkbox"
              id="terms"
              checked={agree}
              onChange={e => setAgree(e.target.checked)}
            />
            <label htmlFor="terms">Şərtləri oxudum, qəbul edirəm</label>
            {/* <a href="#">Gizlilik Siyasəti</a> */}
          </div>

          <button
            type="submit"
            className={`register-submit${agree ? ' enabled' : ''}`}
            disabled={!agree}
          >
            Qeydiyyatdan keç
          </button>

          <button
            type="button"
            className="register-back"
            onClick={() => setTab('login')}
          >
            Daxil ol
          </button>
        </form>
      )}
    </div>
);
}

