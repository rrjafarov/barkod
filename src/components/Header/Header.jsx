// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import "@/components/Header/header.scss";
// import Link from "next/link";
// import Image from "next/image";
// import { IoSearch } from "react-icons/io5";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";

// import { useSelector } from "react-redux";
// import { useGetCartQuery } from "@/redux/cartService";

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

// const Header = ({ categoryData, t, settingData }) => {
//   const router = useRouter();
//   const [placeholder, setPlaceholder] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Cart məlumatlarını oxuyuruq - useGetCartQuery istifadə edərək
//   const { data: cartData } = useGetCartQuery();

//   // Cart məhsullarının sayını hesablayırıq - sadəcə neçə məhsul var
//   const cartItemCount = cartData?.cart?.cart_products?.length || 0;

//   // ** Aşağısını əlavə et **
//   const [productData, setProductData] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => setProductData(data))
//       .catch((err) => console.error(err));
//   }, []);

//   useEffect(() => {
//     if (!searchTerm.trim()) {
//       setFilteredProducts([]);
//       return;
//     }
//     const term = searchTerm.toLowerCase();
//     setFilteredProducts(
//       productData.filter((p) => p.name.toLowerCase().includes(term))
//     );
//   }, [searchTerm, productData]);
//   // ** Əlavə etmə bitdi **

//   // 1) Cookie'dən son seçimi oxu, yoxdursa AZ olsun
//   const initialLang = Cookies.get("NEXT_LOCALE")?.toUpperCase() || "AZ";
//   const [language, setLanguage] = useState(initialLang);

//   const [showComponent, setShowComponent] = useState(false);
//   const menuRef = useRef(null); // original headerMiddle ref
//   const fixedMenuRef = useRef(null); // fixed copy ref
//   const sentinelRef = useRef(null); // sentinel üçün ref (observer üçün)
//   const placeholders = categoryData.map((item) => item.name);
//   const [text, setText] = useState("");
//   const [mode, setMode] = useState("typing");
//   const [idx, setIdx] = useState(0);

//   // Yeni: sabit header görünüb/görünməməsi üçün state
//   const [showFixedHeader, setShowFixedHeader] = useState(false);
//   // Hansı header copy-dən açılan menu aktivdir: 'original' | 'fixed' | null
//   const [menuAnchor, setMenuAnchor] = useState(null);

//   // Placeholder animation V2
//   useEffect(() => {
//     let timeout;
//     const full = placeholders[idx] || "";

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

//   // Search functionality
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       const currentLang = language.toLowerCase();
//       router.push(
//         `/${currentLang}/products?search_text=${encodeURIComponent(
//           searchTerm
//         )}&page=1`
//       );
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch(e);
//     }
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

//   // Close on overlay - both original and fixed refs nəzərə alınır
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const orig = menuRef.current;
//       const fix = fixedMenuRef.current;
//       if (
//         (orig && orig.contains(event.target)) ||
//         (fix && fix.contains(event.target))
//       ) {
//         return;
//       }
//       setShowComponent(false);
//       setMenuAnchor(null);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // IntersectionObserver-based scroll detection (daha stabil)
//   useEffect(() => {
//     if (!sentinelRef.current) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const ent = entries[0];
//         // ent.isIntersecting === true -> sentinel görünür -> headerMiddle hələ görünür -> gizlət
//         // ent.isIntersecting === false -> sentinel görünmür -> scroll edib headerMiddle-i keçmisən -> göstər
//         setShowFixedHeader(!ent.isIntersecting);
//         if (ent.isIntersecting) {
//           // səhifə yuxarı düşəndə menu bağla
//           setShowComponent(false);
//           setMenuAnchor(null);
//         }
//       },
//       {
//         root: null,
//         threshold: 0,
//         rootMargin: "0px",
//       }
//     );

//     observer.observe(sentinelRef.current);
//     return () => observer.disconnect();
//   }, [sentinelRef.current]);

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
//                 <Link href="/campaign">{t?.campaigns || "campaign"}</Link>
//               </span>
//             </div>
//             <div className="corporateSales">
//               <span>
//                 <Link href="/corporate-sales">
//                   {t?.corporatesale || "Sales"}
//                 </Link>
//               </span>
//             </div>
//           </div>

//           <div className="headerTopRight">
//             <div className="contactCall">
//               <span>
//                 <Link href={`tel:${settingData.tel_short}`}>
//                   {settingData.tel_short}
//                 </Link>
//               </span>
//             </div>

//             <div className="changeLang">
//               <Select
//                 options={languageOptions.filter((opt) => opt.value !== language)}
//                 value={languageOptions.find((opt) => opt.value === language)}
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

//         {/* ORİGİNAL headerMiddle */}
//         <div className="headerMiddle">
//           <div className="row" ref={menuRef} style={{ position: "relative" }}>
//             <div className="xl-2 lg-2 md-2 sm-2">
//               <div
//                 className="headerCatalog"
//                 onClick={() => {
//                   setShowComponent((prev) => !prev);
//                   setMenuAnchor("original");
//                 }}
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
//                     onKeyPress={handleKeyPress}
//                   />
//                   <div className="searchButtonIcon" onClick={handleSearch}>
//                     <IoSearch />
//                   </div>
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
//                 <div
//                   className="rightPagesIcon"
//                   style={{ position: "relative" }}
//                 >
//                   <Link href="/cart">
//                     <button>
//                       <BlackBasket className="newCartIcon" />
//                       {cartItemCount > 0 && (
//                         <span className="cart-badge">
//                           {cartItemCount > 99 ? "99+" : cartItemCount}
//                         </span>
//                       )}
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* CategoryMenu for original anchor */}
//             {showComponent && menuAnchor === "original" && (
//               <div
//                 className="myComponentWrapper"
//                 style={{
//                   position: "absolute",
//                   top: "100%",
//                   left: 0,
//                   width: "100%",
//                   zIndex: 222222,
//                   padding: "1rem 0",
//                 }}
//               >
//                 <CategoryMenu t={t} categoryData={categoryData} />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* sentinel: headerMiddle bitəndən dərhal sonra gəlir, observer bunu izləyəcək */}
//         <div ref={sentinelRef} style={{ width: "100%", height: "1px" }} />

//         {/* FIXED headerMiddle copy */}
//         {showFixedHeader && (
//           <div
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               zIndex: 9999,
//               background: "#fff",
//               boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
//             }}
//             aria-hidden={false}
//           >
//             <div className="container">
//               <div className="headerMiddle" ref={fixedMenuRef}>
//                 <div className="row" style={{ position: "relative" }}>
//                   <div className="xl-2 lg-2 md-2 sm-2">
//                     <div
//                       className="headerCatalog"
//                       onClick={() => {
//                         setShowComponent((prev) => !prev);
//                         setMenuAnchor("fixed");
//                       }}
//                     >
//                       <CategoryIcon className="newCategoryIcon" />
//                       <span>{t?.catalog || "Kataloq"}</span>
//                       {/* <img className="fixedHeadLogo" src="favicon.png" alt="" /> */}
//                     </div>
//                   </div>

//                   <div className="xl-8 lg-8 md-8 sm-10">
//                     <div className="headerSearching">
//                       <div className="searchContainer">
//                         <input
//                           type="search"
//                           placeholder={text}
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           onKeyPress={handleKeyPress}
//                         />
//                         <div className="searchButtonIcon" onClick={handleSearch}>
//                           <IoSearch />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div
//                     className="xl-2 lg-2 md-2 sm-2"
//                     id="headerMiddleRightNotMobile"
//                   >
//                     <div className="headerMiddleRight">
//                       <div className="rightPagesIcon">
//                         <Link href="/login">
//                           <button>
//                             <LastLogin className="newScalet" />
//                           </button>
//                         </Link>
//                       </div>
//                       <div className="rightPagesIcon">
//                         <Link href="/compare">
//                           <button>
//                             <NewScale className="newScale" />
//                           </button>
//                         </Link>
//                       </div>
//                       <div className="rightPagesIcon">
//                         <Link href="/wishlist">
//                           <button>
//                             <LastWishList className="newWishlist" />
//                           </button>
//                         </Link>
//                       </div>
//                       <div
//                         className="rightPagesIcon"
//                         style={{ position: "relative" }}
//                       >
//                         <Link href="/cart">
//                           <button>
//                             <BlackBasket className="newCartIcon" />
//                             {cartItemCount > 0 && (
//                               <span className="cart-badge">
//                                 {cartItemCount > 99 ? "99+" : cartItemCount}
//                               </span>
//                             )}
//                           </button>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>

//                   {/* CategoryMenu for fixed anchor */}
//                   {showComponent && menuAnchor === "fixed" && (
//                     <div
//                       className="myComponentWrapper"
//                       style={{
//                         position: "absolute",
//                         top: "100%",
//                         left: 0,
//                         width: "100%",
//                         zIndex: 10,
//                         padding: "1rem 0",
//                       }}
//                     >
//                       <CategoryMenu t={t} categoryData={categoryData} />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
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
//         <div className="mobileFixedButton" style={{ position: "relative" }}>
//           <Link href="/cart">
//             <button>
//               <BlackBasket />
//               {cartItemCount > 0 && (
//                 <span className="cart-badge">
//                   {cartItemCount > 99 ? "99+" : cartItemCount}
//                 </span>
//               )}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

"use client";
import React, { useRef, useEffect, useState } from "react";
import "@/components/Header/header.scss";
import Link from "next/link";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { useSelector } from "react-redux";
import { useGetCartQuery } from "@/redux/cartService";
import { useGetFavQuery } from "@/redux/wishlistService"; // Wishlist service əlavə edildi
import { CompareService } from "@/lib/compareService"; // Compare service əlavə edildi

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
import Burger from "../../../public/icons/burger2.svg";

import Select from "react-select";
import CategoryMenu from "@/components/CategoryMenu";

const Header = ({ categoryData, t, settingData, supportData }) => {
  const router = useRouter();
  const [placeholder, setPlaceholder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Cart məlumatlarını oxuyuruq - useGetCartQuery istifadə edərək
  const { data: cartData } = useGetCartQuery();

  // Cart məhsullarının sayını hesablayırıq - sadəcə neçə məhsul var
  const cartItemCount = cartData?.cart?.cart_products?.length || 0;

  // Wishlist məlumatlarını oxuyuruq - useGetFavQuery istifadə edərək
  const { data: wishlistData } = useGetFavQuery();

  // Wishlist məhsullarının sayını hesablayırıq - count property-sindən
  const wishlistItemCount = wishlistData?.wishlist?.count || 0;

  // Compare məhsullarının sayını hesablayırıq - localStorage-dan
  const [compareItemCount, setCompareItemCount] = useState(0);

  // Compare count-u yüklə və event listener əlavə et
  useEffect(() => {
    const updateCompareCount = () => {
      setCompareItemCount(CompareService.getCompareCount());
    };

    // İlk yüklənmə
    updateCompareCount();

    // Event listener əlavə et
    if (typeof window !== "undefined") {
      window.addEventListener("compare_updated", updateCompareCount);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("compare_updated", updateCompareCount);
      }
    };
  }, []);

  // ** Aşağısını əlavə et **
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProductData(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts([]);
      return;
    }
    const term = searchTerm.toLowerCase();
    setFilteredProducts(
      productData.filter((p) => p.name.toLowerCase().includes(term))
    );
  }, [searchTerm, productData]);
  // ** Əlavə etmə bitdi **

  // 1) Cookie'dən son seçimi oxu, yoxdursa AZ olsun
  const initialLang = Cookies.get("NEXT_LOCALE")?.toUpperCase() || "AZ";
  const [language, setLanguage] = useState(initialLang);

  const [showComponent, setShowComponent] = useState(false);
  const menuRef = useRef(null); // original headerMiddle ref
  const fixedMenuRef = useRef(null); // fixed copy ref
  const sentinelRef = useRef(null); // sentinel üçün ref (observer üçün)
  const placeholders = categoryData.map((item) => item.name);
  const [text, setText] = useState("");
  const [mode, setMode] = useState("typing");
  const [idx, setIdx] = useState(0);

  // Yeni: sabit header görünüb/görünməməsi üçün state
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  // Hansı header copy-dən açılan menu aktivdir: 'original' | 'fixed' | null
  const [menuAnchor, setMenuAnchor] = useState(null);

  // Placeholder animation V2
  useEffect(() => {
    let timeout;
    const full = placeholders[idx] || "";

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
      router.push(
        `/${currentLang}/products?search_text=${encodeURIComponent(
          searchTerm
        )}&page=1`
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
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

  // Close on overlay - both original and fixed refs nəzərə alınır
  useEffect(() => {
    const handleClickOutside = (event) => {
      const orig = menuRef.current;
      const fix = fixedMenuRef.current;
      if (
        (orig && orig.contains(event.target)) ||
        (fix && fix.contains(event.target))
      ) {
        return;
      }
      setShowComponent(false);
      setMenuAnchor(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // IntersectionObserver-based scroll detection (daha stabil)
  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];
        // ent.isIntersecting === true -> sentinel görünür -> headerMiddle hələ görünür -> gizlət
        // ent.isIntersecting === false -> sentinel görünmür -> scroll edib headerMiddle-i keçmisən -> göstər
        setShowFixedHeader(!ent.isIntersecting);
        if (ent.isIntersecting) {
          // səhifə yuxarı düşəndə menu bağla
          setShowComponent(false);
          setMenuAnchor(null);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px",
      }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [sentinelRef.current]);

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
                <Link href="/campaign">{t?.campaigns || "campaign"}</Link>
              </span>
            </div>
            {supportData
              ?.filter((item) => item.show_in_header === 1)
              .map((supportItem) => (
                <div className="corporateSales" key={supportItem.id}>
                  <span>
                    <Link href={`/support/${supportItem.slug}`}>
                      {supportItem.title}
                    </Link>
                  </span>
                </div>
              ))}
              <div className="corporateSales">
              <span>
                <Link href="/security">{t?.warranty || "Zəmanət"}</Link>
              </span>
            </div>

          </div>

          <div className="headerTopRight">
            <div className="contactCall">
              <span>
                <Link href={`tel:${settingData.tel_short}`}>
                  {settingData.tel_short}
                </Link>
              </span>
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

        {/* ORİGİNAL headerMiddle */}
        <div className="headerMiddle">
          <div className="row" ref={menuRef} style={{ position: "relative" }}>
            <div className="xl-2 lg-2 md-2 sm-2">
              <div
                className="headerCatalog"
                onClick={() => {
                  setShowComponent((prev) => !prev);
                  setMenuAnchor("original");
                }}
              >
                {/* <CategoryIcon className="newCategoryIcon" /> */}
                <Burger className="newCategoryIcon" />

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
                <div
                  className="rightPagesIcon"
                  style={{ position: "relative" }}
                >
                  <Link href="/compare">
                    <button>
                      <NewScale className="newScale" />
                      {compareItemCount > 0 && (
                        <span className="cart-badge">
                          {compareItemCount > 99 ? "99+" : compareItemCount}
                        </span>
                      )}
                    </button>
                  </Link>
                </div>
                <div
                  className="rightPagesIcon"
                  style={{ position: "relative" }}
                >
                  <Link href="/wishlist">
                    <button>
                      <LastWishList className="newWishlist" />
                      {wishlistItemCount > 0 && (
                        <span className="cart-badge">
                          {wishlistItemCount > 99 ? "99+" : wishlistItemCount}
                        </span>
                      )}
                    </button>
                  </Link>
                </div>
                <div
                  className="rightPagesIcon"
                  style={{ position: "relative" }}
                >
                  <Link href="/cart">
                    <button>
                      <BlackBasket className="newCartIcon" />
                      {cartItemCount > 0 && (
                        <span className="cart-badge">
                          {cartItemCount > 99 ? "99+" : cartItemCount}
                        </span>
                      )}
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* CategoryMenu for original anchor */}
            {showComponent && menuAnchor === "original" && (
              <div
                className="myComponentWrapper"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  zIndex: 222222,
                  padding: "1rem 0",
                }}
              >
                <CategoryMenu t={t} categoryData={categoryData} />
              </div>
            )}
          </div>
        </div>

        {/* sentinel: headerMiddle bitəndən dərhal sonra gəlir, observer bunu izləyəcək */}
        <div ref={sentinelRef} style={{ width: "100%", height: "1px" }} />

        {/* FIXED headerMiddle copy */}
        {showFixedHeader && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 9999,
              background: "#fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            }}
            aria-hidden={false}
          >
            <div className="container">
              <div className="headerMiddle" ref={fixedMenuRef}>
                <div className="row" style={{ position: "relative" }}>
                  <div className="xl-2 lg-2 md-2 sm-2">
                    <div
                      className="headerCatalog"
                      onClick={() => {
                        setShowComponent((prev) => !prev);
                        setMenuAnchor("fixed");
                      }}
                    >
                      {/* <CategoryIcon className="newCategoryIcon" /> */}
                      <Burger className="newCategoryIcon" />
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
                        <div
                          className="searchButtonIcon"
                          onClick={handleSearch}
                        >
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
                        <Link href="/login">
                          <button>
                            <LastLogin className="newScalet" />
                          </button>
                        </Link>
                      </div>
                      <div
                        className="rightPagesIcon"
                        style={{ position: "relative" }}
                      >
                        <Link href="/compare">
                          <button>
                            <NewScale className="newScale" />
                            {compareItemCount > 0 && (
                              <span className="cart-badge">
                                {compareItemCount > 99
                                  ? "99+"
                                  : compareItemCount}
                              </span>
                            )}
                          </button>
                        </Link>
                      </div>
                      <div
                        className="rightPagesIcon"
                        style={{ position: "relative" }}
                      >
                        <Link href="/wishlist">
                          <button>
                            <LastWishList className="newWishlist" />
                            {wishlistItemCount > 0 && (
                              <span className="cart-badge">
                                {wishlistItemCount > 99
                                  ? "99+"
                                  : wishlistItemCount}
                              </span>
                            )}
                          </button>
                        </Link>
                      </div>
                      <div
                        className="rightPagesIcon"
                        style={{ position: "relative" }}
                      >
                        <Link href="/cart">
                          <button>
                            <BlackBasket className="newCartIcon" />
                            {cartItemCount > 0 && (
                              <span className="cart-badge">
                                {cartItemCount > 99 ? "99+" : cartItemCount}
                              </span>
                            )}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* CategoryMenu for fixed anchor */}
                  {showComponent && menuAnchor === "fixed" && (
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
            </div>
          </div>
        )}
      </nav>

      <div className="mobileFixedButtons">
        <div className="mobileFixedButton">
          <Link href="/login">
            <button>
              <Login />
            </button>
          </Link>
        </div>
        <div className="mobileFixedButton" style={{ position: "relative" }}>
          <Link href="/compare">
            <button>
              <NewScale />
              {compareItemCount > 0 && (
                <span className="cart-badge">
                  {compareItemCount > 99 ? "99+" : compareItemCount}
                </span>
              )}
            </button>
          </Link>
        </div>
        <div className="mobileFixedButton" style={{ position: "relative" }}>
          <Link href="/wishlist">
            <button>
              <LastWishList />
              {wishlistItemCount > 0 && (
                <span className="cart-badge">
                  {wishlistItemCount > 99 ? "99+" : wishlistItemCount}
                </span>
              )}
            </button>
          </Link>
        </div>
        <div className="mobileFixedButton" style={{ position: "relative" }}>
          <Link href="/cart">
            <button>
              <BlackBasket />
              {cartItemCount > 0 && (
                <span className="cart-badge">
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import "@/components/Header/header.scss";
// import Link from "next/link";
// import Image from "next/image";
// import { IoSearch } from "react-icons/io5";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";

// import { useSelector } from "react-redux";
// import { useGetCartQuery } from "@/redux/cartService";
// import { useGetFavQuery } from "@/redux/wishlistService"; // Wishlist service əlavə edildi

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

// const Header = ({ categoryData, t, settingData }) => {
//   const router = useRouter();
//   const [placeholder, setPlaceholder] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Cart məlumatlarını oxuyuruq - useGetCartQuery istifadə edərək
//   const { data: cartData } = useGetCartQuery();

//   // Cart məhsullarının sayını hesablayırıq - sadəcə neçə məhsul var
//   const cartItemCount = cartData?.cart?.cart_products?.length || 0;

//   // Wishlist məlumatlarını oxuyuruq - useGetFavQuery istifadə edərək
//   const { data: wishlistData } = useGetFavQuery();

//   // Wishlist məhsullarının sayını hesablayırıq - count property-sindən
//   const wishlistItemCount = wishlistData?.wishlist?.count || 0;

//   // ** Aşağısını əlavə et **
//   const [productData, setProductData] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => setProductData(data))
//       .catch((err) => console.error(err));
//   }, []);

//   useEffect(() => {
//     if (!searchTerm.trim()) {
//       setFilteredProducts([]);
//       return;
//     }
//     const term = searchTerm.toLowerCase();
//     setFilteredProducts(
//       productData.filter((p) => p.name.toLowerCase().includes(term))
//     );
//   }, [searchTerm, productData]);
//   // ** Əlavə etmə bitdi **

//   // 1) Cookie'dən son seçimi oxu, yoxdursa AZ olsun
//   const initialLang = Cookies.get("NEXT_LOCALE")?.toUpperCase() || "AZ";
//   const [language, setLanguage] = useState(initialLang);

//   const [showComponent, setShowComponent] = useState(false);
//   const menuRef = useRef(null); // original headerMiddle ref
//   const fixedMenuRef = useRef(null); // fixed copy ref
//   const sentinelRef = useRef(null); // sentinel üçün ref (observer üçün)
//   const placeholders = categoryData.map((item) => item.name);
//   const [text, setText] = useState("");
//   const [mode, setMode] = useState("typing");
//   const [idx, setIdx] = useState(0);

//   // Yeni: sabit header görünüb/görünməməsi üçün state
//   const [showFixedHeader, setShowFixedHeader] = useState(false);
//   // Hansı header copy-dən açılan menu aktivdir: 'original' | 'fixed' | null
//   const [menuAnchor, setMenuAnchor] = useState(null);

//   // Placeholder animation V2
//   useEffect(() => {
//     let timeout;
//     const full = placeholders[idx] || "";

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

//   // Search functionality
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       const currentLang = language.toLowerCase();
//       router.push(
//         `/${currentLang}/products?search_text=${encodeURIComponent(
//           searchTerm
//         )}&page=1`
//       );
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch(e);
//     }
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

//   // Close on overlay - both original and fixed refs nəzərə alınır
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const orig = menuRef.current;
//       const fix = fixedMenuRef.current;
//       if (
//         (orig && orig.contains(event.target)) ||
//         (fix && fix.contains(event.target))
//       ) {
//         return;
//       }
//       setShowComponent(false);
//       setMenuAnchor(null);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // IntersectionObserver-based scroll detection (daha stabil)
//   useEffect(() => {
//     if (!sentinelRef.current) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const ent = entries[0];
//         // ent.isIntersecting === true -> sentinel görünür -> headerMiddle hələ görünür -> gizlət
//         // ent.isIntersecting === false -> sentinel görünmür -> scroll edib headerMiddle-i keçmisən -> göstər
//         setShowFixedHeader(!ent.isIntersecting);
//         if (ent.isIntersecting) {
//           // səhifə yuxarı düşəndə menu bağla
//           setShowComponent(false);
//           setMenuAnchor(null);
//         }
//       },
//       {
//         root: null,
//         threshold: 0,
//         rootMargin: "0px",
//       }
//     );

//     observer.observe(sentinelRef.current);
//     return () => observer.disconnect();
//   }, [sentinelRef.current]);

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
//                 <Link href="/campaign">{t?.campaigns || "campaign"}</Link>
//               </span>
//             </div>
//             <div className="corporateSales">
//               <span>
//                 <Link href="/corporate-sales">
//                   {t?.corporatesale || "Sales"}
//                 </Link>
//               </span>
//             </div>
//           </div>

//           <div className="headerTopRight">
//             <div className="contactCall">
//               <span>
//                 <Link href={`tel:${settingData.tel_short}`}>
//                   {settingData.tel_short}
//                 </Link>
//               </span>
//             </div>

//             <div className="changeLang">
//               <Select
//                 options={languageOptions.filter((opt) => opt.value !== language)}
//                 value={languageOptions.find((opt) => opt.value === language)}
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

//         {/* ORİGİNAL headerMiddle */}
//         <div className="headerMiddle">
//           <div className="row" ref={menuRef} style={{ position: "relative" }}>
//             <div className="xl-2 lg-2 md-2 sm-2">
//               <div
//                 className="headerCatalog"
//                 onClick={() => {
//                   setShowComponent((prev) => !prev);
//                   setMenuAnchor("original");
//                 }}
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
//                     onKeyPress={handleKeyPress}
//                   />
//                   <div className="searchButtonIcon" onClick={handleSearch}>
//                     <IoSearch />
//                   </div>
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
//                 <div className="rightPagesIcon" style={{ position: "relative" }}>
//                   <Link href="/wishlist">
//                     <button>
//                       <LastWishList className="newWishlist" />
//                       {wishlistItemCount > 0 && (
//                         <span className="cart-badge">
//                           {wishlistItemCount > 99 ? "99+" : wishlistItemCount}
//                         </span>
//                       )}
//                     </button>
//                   </Link>
//                 </div>
//                 <div
//                   className="rightPagesIcon"
//                   style={{ position: "relative" }}
//                 >
//                   <Link href="/cart">
//                     <button>
//                       <BlackBasket className="newCartIcon" />
//                       {cartItemCount > 0 && (
//                         <span className="cart-badge">
//                           {cartItemCount > 99 ? "99+" : cartItemCount}
//                         </span>
//                       )}
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* CategoryMenu for original anchor */}
//             {showComponent && menuAnchor === "original" && (
//               <div
//                 className="myComponentWrapper"
//                 style={{
//                   position: "absolute",
//                   top: "100%",
//                   left: 0,
//                   width: "100%",
//                   zIndex: 222222,
//                   padding: "1rem 0",
//                 }}
//               >
//                 <CategoryMenu t={t} categoryData={categoryData} />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* sentinel: headerMiddle bitəndən dərhal sonra gəlir, observer bunu izləyəcək */}
//         <div ref={sentinelRef} style={{ width: "100%", height: "1px" }} />

//         {/* FIXED headerMiddle copy */}
//         {showFixedHeader && (
//           <div
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               zIndex: 9999,
//               background: "#fff",
//               boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
//             }}
//             aria-hidden={false}
//           >
//             <div className="container">
//               <div className="headerMiddle" ref={fixedMenuRef}>
//                 <div className="row" style={{ position: "relative" }}>
//                   <div className="xl-2 lg-2 md-2 sm-2">
//                     <div
//                       className="headerCatalog"
//                       onClick={() => {
//                         setShowComponent((prev) => !prev);
//                         setMenuAnchor("fixed");
//                       }}
//                     >
//                       <CategoryIcon className="newCategoryIcon" />
//                       <span>{t?.catalog || "Kataloq"}</span>
//                       {/* <img className="fixedHeadLogo" src="favicon.png" alt="" /> */}
//                     </div>
//                   </div>

//                   <div className="xl-8 lg-8 md-8 sm-10">
//                     <div className="headerSearching">
//                       <div className="searchContainer">
//                         <input
//                           type="search"
//                           placeholder={text}
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           onKeyPress={handleKeyPress}
//                         />
//                         <div className="searchButtonIcon" onClick={handleSearch}>
//                           <IoSearch />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div
//                     className="xl-2 lg-2 md-2 sm-2"
//                     id="headerMiddleRightNotMobile"
//                   >
//                     <div className="headerMiddleRight">
//                       <div className="rightPagesIcon">
//                         <Link href="/login">
//                           <button>
//                             <LastLogin className="newScalet" />
//                           </button>
//                         </Link>
//                       </div>
//                       <div className="rightPagesIcon">
//                         <Link href="/compare">
//                           <button>
//                             <NewScale className="newScale" />
//                           </button>
//                         </Link>
//                       </div>
//                       <div className="rightPagesIcon" style={{ position: "relative" }}>
//                         <Link href="/wishlist">
//                           <button>
//                             <LastWishList className="newWishlist" />
//                             {wishlistItemCount > 0 && (
//                               <span className="cart-badge">
//                                 {wishlistItemCount > 99 ? "99+" : wishlistItemCount}
//                               </span>
//                             )}
//                           </button>
//                         </Link>
//                       </div>
//                       <div
//                         className="rightPagesIcon"
//                         style={{ position: "relative" }}
//                       >
//                         <Link href="/cart">
//                           <button>
//                             <BlackBasket className="newCartIcon" />
//                             {cartItemCount > 0 && (
//                               <span className="cart-badge">
//                                 {cartItemCount > 99 ? "99+" : cartItemCount}
//                               </span>
//                             )}
//                           </button>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>

//                   {/* CategoryMenu for fixed anchor */}
//                   {showComponent && menuAnchor === "fixed" && (
//                     <div
//                       className="myComponentWrapper"
//                       style={{
//                         position: "absolute",
//                         top: "100%",
//                         left: 0,
//                         width: "100%",
//                         zIndex: 10,
//                         padding: "1rem 0",
//                       }}
//                     >
//                       <CategoryMenu t={t} categoryData={categoryData} />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
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
//         <div className="mobileFixedButton" style={{ position: "relative" }}>
//           <Link href="/wishlist">
//             <button>
//               <LastWishList />
//               {wishlistItemCount > 0 && (
//                 <span className="cart-badge">
//                   {wishlistItemCount > 99 ? "99+" : wishlistItemCount}
//                 </span>
//               )}
//             </button>
//           </Link>
//         </div>
//         <div className="mobileFixedButton" style={{ position: "relative" }}>
//           <Link href="/cart">
//             <button>
//               <BlackBasket />
//               {cartItemCount > 0 && (
//                 <span className="cart-badge">
//                   {cartItemCount > 99 ? "99+" : cartItemCount}
//                 </span>
//               )}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// ! son versiya budur burda fixed yoxdur
// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import "@/components/Header/header.scss";
// import Link from "next/link";
// import Image from "next/image";
// import { IoSearch } from "react-icons/io5";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";

// import { useSelector } from "react-redux";
// import { useGetCartQuery } from "@/redux/cartService";

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

// const Header = ({ categoryData, t, settingData }) => {
//   const router = useRouter();
//   const [placeholder, setPlaceholder] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Cart məlumatlarını oxuyuruq - useGetCartQuery istifadə edərək
//   const { data: cartData } = useGetCartQuery();

//   // Cart məhsullarının sayını hesablayırıq - sadəcə neçə məhsul var
//   const cartItemCount = cartData?.cart?.cart_products?.length || 0;

//   // ** Aşağısını əlavə et **
//   const [productData, setProductData] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => setProductData(data))
//       .catch((err) => console.error(err));
//   }, []);

//   useEffect(() => {
//     if (!searchTerm.trim()) {
//       setFilteredProducts([]);
//       return;
//     }
//     const term = searchTerm.toLowerCase();
//     setFilteredProducts(
//       productData.filter((p) => p.name.toLowerCase().includes(term))
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

//   // Search functionality
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       const currentLang = language.toLowerCase();
//       router.push(
//         `/${currentLang}/products?search_text=${encodeURIComponent(
//           searchTerm
//         )}&page=1`
//       );
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch(e);
//     }
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
//                 <Link href="/campaign">{t?.campaigns || "campaign"}</Link>
//               </span>
//             </div>
//             <div className="corporateSales">
//               <span>
//                 <Link href="/corporate-sales">
//                   {t?.corporatesale || "Sales"}
//                 </Link>
//               </span>
//             </div>
//           </div>

//           <div className="headerTopRight">
//             <div className="contactCall">
//               <span>
//                 <Link href={`tel:${settingData.tel_short}`}>
//                   {settingData.tel_short}
//                 </Link>
//               </span>
//             </div>

//             <div className="changeLang">
//               <Select
//                 options={languageOptions.filter(
//                   (opt) => opt.value !== language
//                 )}
//                 value={languageOptions.find((opt) => opt.value === language)}
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
//                     onKeyPress={handleKeyPress}
//                   />
//                   <div className="searchButtonIcon" onClick={handleSearch}>
//                     <IoSearch />
//                   </div>
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
//                 <div
//                   className="rightPagesIcon"
//                   style={{ position: "relative" }}
//                 >
//                   <Link href="/cart">
//                     <button>
//                       <BlackBasket className="newCartIcon" />
//                       {cartItemCount > 0 && (
//                         <span className="cart-badge">
//                           {cartItemCount > 99 ? "99+" : cartItemCount}
//                         </span>
//                       )}
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
//         <div className="mobileFixedButton" style={{ position: "relative" }}>
//           <Link href="/cart">
//             <button>
//               <BlackBasket />
//               {cartItemCount > 0 && (
//                 <span className="cart-badge">
//                   {cartItemCount > 99 ? "99+" : cartItemCount}
//                 </span>
//               )}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
