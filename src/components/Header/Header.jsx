// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import "@/components/Header/header.scss";
// import Link from "next/link";
// import Image from "next/image";
// import { IoSearch } from "react-icons/io5";
// import BlackBasket from "../../../public/icons/blackBasket.svg";
// import NewScale from "../../../public/icons/newScale.svg";
// import Login from "../../../public/icons/loginAdmin.svg";
// import NewWishList from "../../../public/icons/newWishlist.svg";
// import HamburgerMenu from "../../../public/icons/hamburgerMenu.svg";
// import CategoryIcon from "../../../public/icons/categoryMenuNewIcon.svg";
// import Select from "react-select";
// import CategoryMenu from "@/components/CategoryMenu";

// const Header = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [language, setLanguage] = useState("AZ");
//   const [showComponent, setShowComponent] = useState(false);
//   const menuRef = useRef(null);

//   const languageOptions = [
//     { value: "AZ", label: "AZ" },
//     { value: "EN", label: "EN" },
//     { value: "RU", label: "RU" },
//   ];
//   const handleChange = (selectedOption) => {
//     setLanguage(selectedOption.value);
//   };
//   const customStyles = {
//     control: (provided) => ({
//       ...provided,
//       border: "none", // Borderi kaldır
//       borderRadius: "1rem", // Kenar yuvarlaklığını kaldır
//       boxShadow: "none", // Focus olduğunda gölgeyi kaldır
//       color: "red", // Metin rengini belirle
//       fontWeight: "#111",
//     }),
//     singleValue: (provided) => ({
//       ...provided,
//       color: "#111", // Seçilen metnin rengini belirle
//     }),
//     menu: (provided) => ({
//       ...provided,
//       backgroundColor: "white", // Dropdown menüsünün arka plan rengini belirle
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       cursor: "default", // Hover durumunda imlecin değişmesini engeller
//       backgroundColor: state.isFocused ? "transparent" : "transparent", // Hover durumundaki arka plan rengini kaldırır
//       color: "black", // Seçenek metni rengi
//       textAlign: "center", // Metni yatayda ortala
//       display: "flex",
//       justifyContent: "center", // Dikeyde ortalamak için flex ile hizalar
//       alignItems: "center",
//     }),
//   };

//   // Menü dışına tıklandığında menüyü kapat
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setShowComponent(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="container">
//       <nav id="header">
//         <div className="headerTop">
//           <div className="logo">
//             <Link href="/">
//               <Image
//                 src="/images/barkodLogo.png"
//                 alt="logo"
//                 width={1000}
//                 height={1000}
//               />
//             </Link>
//           </div>

//           <div className="storeAndCorporateSales">
//             <div className="stores">
//               <span>
//                 <Link href="/stores">Mağazalar</Link>
//               </span>
//             </div>
//             <div className="corporateSales">
//               <span>
//                 <Link href="/products">Kорпоративные продажи</Link>
//               </span>
//             </div>
//           </div>

//           <div className="headerTopRight">
//             <div className="contactCall">
//               <span>
//                 <Link href="#">*0092</Link>
//               </span>
//             </div>
//             <div className="payment">
//               <button>Online Ödəniş</button>
//             </div>

//             <div className="changeLang">
//               <Select
//                 options={languageOptions}
//                 onChange={handleChange}
//                 defaultValue={languageOptions[0]}
//                 isSearchable={false}
//                 components={{
//                   IndicatorSeparator: () => null,
//                   DropdownIndicator: () => null,
//                 }}
//                 className="langSelect"
//                 styles={customStyles}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="headerMiddle">
//           <div className="row" ref={menuRef} style={{ position: "relative" }}>
//             <div className="xl-2 lg-2 md-2 sm-2">
//               <div
//                 className="headerCatalog"
//                 onClick={() => setShowComponent((prev) => !prev)}
//               >
//                 {/* <HamburgerMenu className="newCategoryIcon" /> */}
//                 <CategoryIcon className="newCategoryIcon" />
//                 <span>Kataloq</span>
//               </div>
//             </div>

//             <div className="xl-8 lg-8 md-8 sm-8">
//               <div className="headerSearching">
//                 <div className="searchContainer">
//                   <input type="search" placeholder="Axtar..." />
//                   <div className="searchButtonIcon">
//                     <IoSearch />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="xl-2 lg-2 md-2 sm-2">
//               <div className="headerMiddleRight">
//                 <div className="rightPagesIcon">
//                   <Link href="#">
//                     <button>
//                       <Login className="newScalet" />
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="rightPagesIcon">
//                   <Link href="/compare">
//                     <button>
//                       <NewScale className="newScale" />
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="rightPagesIcon">
//                   <Link href="/wishlist">
//                     <button>
//                       <NewWishList className="newWishlist" />
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="rightPagesIcon">
//                   <Link href="/cart">
//                     <button>
//                       <BlackBasket className="rightPagesIconBlackIcons newCartIcon" />
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {showComponent && (
//               <div
//                 className="myComponentWrapper"
//                 style={{
//                   position: "absolute",
//                   top: "100%", // headerCatalog'un hemen altında
//                   left: 0,
//                   width: "100%",
//                   zIndex: 10, // diğer içeriklerin üzerinde
//                   padding: "1rem 0",
//                 }}
//               >
//                 <CategoryMenu />
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       <div className="mobileFixedButtons">
//         <div className="mobileFixedButton">
//           <Link href="#">
//             <button>
//               <Login />
//             </button>
//           </Link>
//         </div>
//         <div className="mobileFixedButton">
//           <Link href="/compare">
//             <button>
//               <NewScale />
//             </button>
//           </Link>
//         </div>
//         <div className="mobileFixedButton">
//           <Link href="/wishlist">
//             <button>
//               <NewWishList />
//             </button>
//           </Link>
//         </div>
//         <div className="mobileFixedButton">
//           <Link href="/cart">
//             <button>
//               <BlackBasket />
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// !son versiya
"use client";
import React, { useRef, useEffect, useState } from "react";
import "@/components/Header/header.scss";
import Link from "next/link";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import BlackBasket from "../../../public/icons/blackBasket.svg";
import NewScale from "../../../public/icons/newScale.svg";
import Login from "../../../public/icons/loginAdmin.svg";
import NewWishList from "../../../public/icons/newWishlist.svg";
// import HamburgerMenu from "../../../public/icons/hamburgerMenu.svg";
import CategoryIcon from "../../../public/icons/categoryMenuNewIcon.svg";
import Select from "react-select";
import CategoryMenu from "@/components/CategoryMenu";

const Header = () => {
  const [placeholder, setPlaceholder] = useState("");
  const fullPlaceholder = "Axtarış edin...";
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("AZ");
  const [showComponent, setShowComponent] = useState(false);
  const menuRef = useRef(null);

  // Placeholder animation
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setPlaceholder(fullPlaceholder.slice(0, i + 1));
      i++;
      if (i === fullPlaceholder.length) {
        clearInterval(timer);
      }
    }, 150); // hər 150ms-də yeni hərf

    return () => clearInterval(timer);
  }, []);

  const languageOptions = [
    { value: "AZ", label: "AZ" },
    { value: "EN", label: "EN" },
    { value: "RU", label: "RU" },
  ];

  const handleChange = (selectedOption) => {
    setLanguage(selectedOption.value);
  };
  

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      borderRadius: "1rem",
      boxShadow: "none",
      color: "red",
      fontWeight: "#111",
      height: "2rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#111",
      fontSize: "1.6rem",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "default",
      backgroundColor: state.isFocused ? "transparent" : "transparent",
      color: "black",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
  };

  // Close on overlay
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowComponent(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="container">
      <nav id="header">
        <div className="headerTop">
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/barkodLogo.png"
                alt="logo"
                width={1000}
                height={1000}
              />
            </Link>
          </div>

          <div className="storeAndCorporateSales">
            <div className="stores">
              <span>
                <Link href="/stores">Mağazalar</Link>
              </span>
            </div>
            <div className="corporateSales">
              <span>
                <Link href="/products">Корпоративные продажи</Link>
              </span>
            </div>
          </div>

          <div className="headerTopRight">
            <div className="contactCall">
              <span>
                <Link href="#">*0092</Link>
              </span>
            </div>
            <div className="payment">
              <button>Online Ödəniş</button>
            </div>

            <div className="changeLang">
              <Select
                options={languageOptions.filter(
                  (opt) => opt.value !== language
                )}
                value={languageOptions.find((opt) => opt.value === language)}
                onChange={handleChange}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => null,
                }}
                className="langSelect"
                styles={customStyles}
              />
            </div>
          </div>
        </div>

        <div className="headerMiddle">
          <div className="row" ref={menuRef} style={{ position: "relative" }}>
            <div className="xl-2 lg-2 md-2 sm-2">
              <div
                className="headerCatalog"
                onClick={() => setShowComponent((prev) => !prev)}
              >
                <CategoryIcon className="newCategoryIcon" />
                <span>Kataloq</span>
              </div>
            </div>
            <div className="xl-8 lg-8 md-8 sm-10">
              <div className="headerSearching">
                <div className="searchContainer">
                  <input
                    type="search"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="searchButtonIcon">
                    <IoSearch />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="xl-2 lg-2 md-2 sm-2"
              id="headerMiddleRightNotMobile"
            >
              <div className="headerMiddleRight">
                <div className="rightPagesIcon">
                  <Link href="#">
                    <button>
                      <Login className="newScalet" />
                    </button>
                  </Link>
                </div>
                <div className="rightPagesIcon">
                  <Link href="/compare">
                    <button>
                      <NewScale className="newScale" />
                    </button>
                  </Link>
                </div>
                <div className="rightPagesIcon">
                  <Link href="/wishlist">
                    <button>
                      <NewWishList className="newWishlist" />
                    </button>
                  </Link>
                </div>
                <div className="rightPagesIcon">
                  <Link href="/cart">
                    <button>
                      <BlackBasket className="newCartIcon" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {showComponent && (
              <div
                className="myComponentWrapper"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  zIndex: 10,
                  padding: "1rem 0",
                }}
              >
                <CategoryMenu />
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="mobileFixedButtons">
        <div className="mobileFixedButton">
          <Link href="#">
            <button>
              <Login />
            </button>
          </Link>
        </div>
        <div className="mobileFixedButton">
          <Link href="/compare">
            <button>
              <NewScale />
            </button>
          </Link>
        </div>
        <div className="mobileFixedButton">
          <Link href="/wishlist">
            <button>
              <NewWishList />
            </button>
          </Link>
        </div>
        <div className="mobileFixedButton">
          <Link href="/cart">
            <button>
              <BlackBasket />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

// !son versiya
