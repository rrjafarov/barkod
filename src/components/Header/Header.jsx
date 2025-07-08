
"use client";
import React, { useRef, useEffect, useState } from "react";
import "@/components/Header/header.scss";
import Link from "next/link";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import BlackBasket from "../../../public/icons/blackBasket.svg";
import NewScale from "../../../public/icons/newScale.svg";
import Login from "../../../public/icons/loginAdmin.svg";
import NewWishList from "../../../public/icons/newWishlist.svg";
import LastLogin from "../../../public/icons/lastLogin.svg";
import LastScale from "../../../public/icons/lastScale.svg";
import LastWishList from "../../../public/icons/lastWishlist.svg";
import LastBasket from "../../../public/icons/lastBasket.svg";
import LikeChange from "../../../public/icons/likeChange.svg";
import LoginChange from "../../../public/icons/loginChange.svg";
import CategoryIcon from "../../../public/icons/categoryMenuNewIcon.svg";
import Select from "react-select";
import CategoryMenu from "@/components/CategoryMenu";

const Header = ({ categoryData, t }) => {
  const router = useRouter();
  const [placeholder, setPlaceholder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // ** Aşağısını əlavə et **
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProductData(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts([]);
      return;
    }
    const term = searchTerm.toLowerCase();
    setFilteredProducts(
      productData.filter(p =>
        p.name.toLowerCase().includes(term)
      )
    );
  }, [searchTerm, productData]);
  // ** Əlavə etmə bitdi **

  // 1) Cookie'dən son seçimi oxu, yoxdursa AZ olsun
  const initialLang = Cookies.get("NEXT_LOCALE")?.toUpperCase() || "AZ";
  const [language, setLanguage] = useState(initialLang);

  const [showComponent, setShowComponent] = useState(false);
  const menuRef = useRef(null);
  const placeholders = categoryData.map((item) => item.name);
  const [text, setText] = useState("");
  const [mode, setMode] = useState("typing");
  const [idx, setIdx] = useState(0);

  // Placeholder animation V2
  useEffect(() => {
    let timeout;
    const full = placeholders[idx];

    if (mode === "typing") {
      timeout = setTimeout(() => {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) setMode("pausing");
      }, 150);
    } else if (mode === "pausing") {
      timeout = setTimeout(() => setMode("deleting"), 1000);
    } else {
      timeout = setTimeout(() => {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIdx((i) => (i + 1) % placeholders.length);
          setMode("typing");
        }
      }, 20);
    }

    return () => clearTimeout(timeout);
  }, [text, mode, idx]);
  // Placeholder animation V2

  const languageOptions = [
    { value: "AZ", label: "AZ" },
    // { value: "EN", label: "EN" },
    { value: "RU", label: "RU" },
  ];

  const handleChange = (selectedOption) => {
    const newLang = selectedOption.value.toLowerCase(); // "az", "en", "ru"
    if (newLang.toUpperCase() === language) return;

    // 1) Çereze yaz
    Cookies.set("NEXT_LOCALE", newLang, { path: "/" });
    // 2) State güncelle
    setLanguage(selectedOption.value);
    // 3) URL'deki eski locale prefix'ini temizle ve yeni locale ekle
    const cleanPath = window.location.pathname.replace(
      /^\/[a-z]{2}(?=\/|$)/,
      ""
    );
    const query = window.location.search || "";
    const newUrl = `/${newLang}${cleanPath}${query}`;

    // 4) Sayfayı yeni locale ile yeniden yükle
    router.replace(newUrl);
  };

  // Search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const currentLang = language.toLowerCase();
      router.push(`/${currentLang}/products?search_text=${encodeURIComponent(searchTerm)}&page=1`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
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
                <Link href="/stores">{t?.stores || "Stores"}</Link>
              </span>
            </div>
            <div className="corporateSales">
              <span>
                <Link href="#">{t?.corporatesale || "Sales"}</Link>
              </span>
            </div>
          </div>

          <div className="headerTopRight">
            <div className="contactCall">
              <span>
                <Link href="tel:*0092">*0092</Link>
              </span>
            </div>

            <div className="changeLang">
              <Select
                options={languageOptions.filter(
                  (opt) => opt.value !== language
                )}
                value={languageOptions.find(
                  (opt) => opt.value === language
                )}
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
                <span>{t?.catalog || "Kataloq"}</span>
              </div>
            </div>

            <div className="xl-8 lg-8 md-8 sm-10">
              <div className="headerSearching">
                <div className="searchContainer">
                  <input
                    type="search"
                    placeholder={text}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <div className="searchButtonIcon" onClick={handleSearch}>
                    <IoSearch />
                  </div>

                  {/* {searchTerm.trim() && filteredProducts.length > 0 && (
                    <div className="searchResults">
                      {filteredProducts.map(p => (
                        <div key={p.id} className="searchResultItem">
                          <img
                            src={p.photo}
                            alt={p.name}
                            className="resultItemImage"
                          />
                          <div className="resultItemInfo">
                            <span className="resultItemName">{p.name}</span>
                            <span className="resultItemPrice">{p.price}₼</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {searchTerm.trim() && filteredProducts.length === 0 && (
                    <div className="searchResults noResults">
                      {t?.notresults	 || "No resuts found"}
                    </div>
                  )} */}
                </div>
              </div>
            </div>

            <div
              className="xl-2 lg-2 md-2 sm-2"
              id="headerMiddleRightNotMobile"
            >
              <div className="headerMiddleRight">
                <div className="rightPagesIcon">
                  <Link href="/login">
                    <button>
                      <LastLogin className="newScalet" />
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
                      <LastWishList className="newWishlist" />
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
                <CategoryMenu t={t} categoryData={categoryData} />
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="mobileFixedButtons">
        <div className="mobileFixedButton">
          <Link href="/login">
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
              <LastWishList />
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









// * nag saasadas nah sana
// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import "@/components/Header/header.scss";
// import Link from "next/link";
// import Image from "next/image";
// import { IoSearch } from "react-icons/io5";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";

// import BlackBasket from "../../../public/icons/blackBasket.svg";
// import NewScale from "../../../public/icons/newScale.svg";
// import Login from "../../../public/icons/loginAdmin.svg";
// import NewWishList from "../../../public/icons/newWishlist.svg";
// import LastLogin from "../../../public/icons/lastLogin.svg";
// import LastScale from "../../../public/icons/lastScale.svg";
// import LastWishList from "../../../public/icons/lastWishlist.svg";
// import LastBasket from "../../../public/icons/lastBasket.svg";
// import LikeChange from "../../../public/icons/likeChange.svg";
// import LoginChange from "../../../public/icons/loginChange.svg";
// import CategoryIcon from "../../../public/icons/categoryMenuNewIcon.svg";
// import Select from "react-select";
// import CategoryMenu from "@/components/CategoryMenu";

// const Header = ({ categoryData, t }) => {
//   const router = useRouter();
//   const [placeholder, setPlaceholder] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   // ** Aşağısını əlavə et **
//   const [productData, setProductData] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then(res => res.json())
//       .then(data => setProductData(data))
//       .catch(err => console.error(err));
//   }, []);

//   useEffect(() => {
//     if (!searchTerm.trim()) {
//       setFilteredProducts([]);
//       return;
//     }
//     const term = searchTerm.toLowerCase();
//     setFilteredProducts(
//       productData.filter(p =>
//         p.name.toLowerCase().includes(term)
//       )
//     );
//   }, [searchTerm, productData]);
//   // ** Əlavə etmə bitdi **

//   // 1) Cookie'dən son seçimi oxu, yoxdursa AZ olsun
//   const initialLang = Cookies.get("NEXT_LOCALE")?.toUpperCase() || "AZ";
//   const [language, setLanguage] = useState(initialLang);

//   const [showComponent, setShowComponent] = useState(false);
//   const menuRef = useRef(null);
//   const placeholders = categoryData.map((item) => item.name);
//   const [text, setText] = useState("");
//   const [mode, setMode] = useState("typing");
//   const [idx, setIdx] = useState(0);

//   // Placeholder animation V2
//   useEffect(() => {
//     let timeout;
//     const full = placeholders[idx];

//     if (mode === "typing") {
//       timeout = setTimeout(() => {
//         setText(full.slice(0, text.length + 1));
//         if (text.length + 1 === full.length) setMode("pausing");
//       }, 150);
//     } else if (mode === "pausing") {
//       timeout = setTimeout(() => setMode("deleting"), 1000);
//     } else {
//       timeout = setTimeout(() => {
//         setText(full.slice(0, text.length - 1));
//         if (text.length - 1 === 0) {
//           setIdx((i) => (i + 1) % placeholders.length);
//           setMode("typing");
//         }
//       }, 20);
//     }

//     return () => clearTimeout(timeout);
//   }, [text, mode, idx]);
//   // Placeholder animation V2

//   const languageOptions = [
//     { value: "AZ", label: "AZ" },
//     // { value: "EN", label: "EN" },
//     { value: "RU", label: "RU" },
//   ];

//   const handleChange = (selectedOption) => {
//     const newLang = selectedOption.value.toLowerCase(); // "az", "en", "ru"
//     if (newLang.toUpperCase() === language) return;

//     // 1) Çereze yaz
//     Cookies.set("NEXT_LOCALE", newLang, { path: "/" });
//     // 2) State güncelle
//     setLanguage(selectedOption.value);
//     // 3) URL'deki eski locale prefix'ini temizle ve yeni locale ekle
//     const cleanPath = window.location.pathname.replace(
//       /^\/[a-z]{2}(?=\/|$)/,
//       ""
//     );
//     const query = window.location.search || "";
//     const newUrl = `/${newLang}${cleanPath}${query}`;

//     // 4) Sayfayı yeni locale ile yeniden yükle
//     router.replace(newUrl);
//   };

//   const customStyles = {
//     control: (provided) => ({
//       ...provided,
//       border: "none",
//       borderRadius: "1rem",
//       boxShadow: "none",
//       color: "red",
//       fontWeight: "#111",
//       height: "2rem",
//     }),
//     singleValue: (provided) => ({
//       ...provided,
//       color: "#111",
//       fontSize: "1.6rem",
//     }),
//     menu: (provided) => ({
//       ...provided,
//       backgroundColor: "white",
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       cursor: "default",
//       backgroundColor: state.isFocused ? "transparent" : "transparent",
//       color: "black",
//       textAlign: "center",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     }),
//   };

//   // Close on overlay
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setShowComponent(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
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
//                 <Link href="/stores">{t?.stores || "Stores"}</Link>
//               </span>
//             </div>
//             <div className="corporateSales">
//               <span>
//                 <Link href="#">{t?.corporatesale || "Sales"}</Link>
//               </span>
//             </div>
//           </div>

//           <div className="headerTopRight">
//             <div className="contactCall">
//               <span>
//                 <Link href="tel:*0092">*0092</Link>
//               </span>
//             </div>

//             <div className="changeLang">
//               <Select
//                 options={languageOptions.filter(
//                   (opt) => opt.value !== language
//                 )}
//                 value={languageOptions.find(
//                   (opt) => opt.value === language
//                 )}
//                 onChange={handleChange}
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
//                 <CategoryIcon className="newCategoryIcon" />
//                 <span>{t?.catalog || "Kataloq"}</span>
//               </div>
//             </div>





//             <div className="xl-8 lg-8 md-8 sm-10">
//               <div className="headerSearching">
//                 <div className="searchContainer">
//                   <input
//                     type="search"
//                     placeholder={text}
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                   <div className="searchButtonIcon">
//                     <IoSearch />
//                   </div>

//                   {/* {searchTerm.trim() && filteredProducts.length > 0 && (
//                     <div className="searchResults">
//                       {filteredProducts.map(p => (
//                         <div key={p.id} className="searchResultItem">
//                           <img
//                             src={p.photo}
//                             alt={p.name}
//                             className="resultItemImage"
//                           />
//                           <div className="resultItemInfo">
//                             <span className="resultItemName">{p.name}</span>
//                             <span className="resultItemPrice">{p.price}₼</span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                   {searchTerm.trim() && filteredProducts.length === 0 && (
//                     <div className="searchResults noResults">
//                       {t?.notresults	 || "No resuts found"}
//                     </div>
//                   )} */}
//                 </div>
//               </div>
//             </div>

//             <div
//               className="xl-2 lg-2 md-2 sm-2"
//               id="headerMiddleRightNotMobile"
//             >
//               <div className="headerMiddleRight">
//                 <div className="rightPagesIcon">
//                   <Link href="/login">
//                     <button>
//                       <LastLogin className="newScalet" />
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
//                       <LastWishList className="newWishlist" />
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="rightPagesIcon">
//                   <Link href="/cart">
//                     <button>
//                       <BlackBasket className="newCartIcon" />
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
//                   top: "100%",
//                   left: 0,
//                   width: "100%",
//                   zIndex: 10,
//                   padding: "1rem 0",
//                 }}
//               >
//                 <CategoryMenu t={t} categoryData={categoryData} />
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       <div className="mobileFixedButtons">
//         <div className="mobileFixedButton">
//           <Link href="/login">
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
//               <LastWishList />
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






























