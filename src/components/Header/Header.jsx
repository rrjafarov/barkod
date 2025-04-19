// "use client";
// import React, { useState } from "react";
// import "@/components/Header/header.scss";
// import Link from "next/link";
// import { BiSolidCategoryAlt } from "react-icons/bi";
// import Image from "next/image";
// import RedCategory from "../../../public/icons/redCategory.svg";
// import BlackCategory from "../../../public/icons/blackCategory.svg";
// import BlackComparison from "../../../public/icons/blackComparison.svg"
// import RedComparison from "../../../public/icons/redComparison.svg"
// import BlackBasket from "../../../public/icons/blackBasket.svg"
// import RedBasket from "../../../public/icons/redBasket.svg"
// import BlackWishlist from "../../../public/icons/blackWishlist.svg"
// import RedWishlist from "../../../public/icons/redWishlist.svg"

// const Header = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   return (
//     <div className="container">
//       <nav id="header">
//         <div className="headerTop">
//           <div className="logo">
//             <Link href="/">
//               <Image
//                 src="/images/logo.png"
//                 alt="logo"
//                 width={200}
//                 height={40}
//               />
//             </Link>
//           </div>
//           <div className="storeAndCorporateSales">
//             <div className="stores">
//               <span>
//                 <Link href="#">Mağazalar</Link>
//               </span>
//             </div>
//             <div className="corporateSales">
//               <span>
//                 <Link href="#">Korporativ satış</Link>
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
//               <button>Aylıq Ödəniş</button>
//             </div>

//             <div className="changeLang">
//               <span>AZ</span>
//             </div>
//           </div>
//         </div>

//         <div className="headerMiddle">
//           <div className="row">
//             <div className="xl-2 lg-2 md-2 sm-2">
//               <div className="headerCatalog">
//                 <RedCategory className="redCategoryIcon" />
//                 <BlackCategory className="blackCategoryIcon" />
//                 <span>Katalog</span>
//               </div>
//             </div>
//             <div className="xl-8 lg-8 md-8 sm-8">
//               <div className="headerSearching">
//                 <div className="searchContainer">
//                   <span className="searchIcon">Search ...</span>
//                 </div>
//               </div>
//             </div>
//             <div className="xl-2 lg-2 md-2 sm-2">
//               <div className="headerMiddleRight">
//                 <div className="rightPagesIcon">
//                   <Link href="#">
//                     <button>
//                       <BlackComparison className="rightPagesIconBlackIcons"/>
//                       <RedComparison className="rightPagesIconRedIcons" />
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="rightPagesIcon">
//                   <Link href="#">
//                     <button>
//                       <BlackWishlist className="rightPagesIconBlackIcons"/>
//                       <RedWishlist className="rightPagesIconRedIcons" />
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="rightPagesIcon">
//                   <Link href="#">
//                     <button>
//                       <BlackBasket className="rightPagesIconBlackIcons"/>
//                       <RedBasket className="rightPagesIconRedIcons" />
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
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
import BlackBasket from "../../../public/icons/blackBasket.svg";
import NewScale from "../../../public/icons/newScale.svg";
import Login from "../../../public/icons/loginAdmin.svg";
import NewWishList from "../../../public/icons/newWishlist.svg";
import HamburgerMenu from "../../../public/icons/hamburgerMenu.svg";
import CategoryIcon from "../../../public/icons/categoryMenuNewIcon.svg";
import Select from "react-select";
import CatalogMenu from "@/components/CategoryMenu";


const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("AZ");
  const [showComponent, setShowComponent] = useState(false);
  const menuRef = useRef(null);

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
      border: "none", // Borderi kaldır
      borderRadius: "1rem", // Kenar yuvarlaklığını kaldır
      boxShadow: "none", // Focus olduğunda gölgeyi kaldır
      color: "red", // Metin rengini belirle
      fontWeight: "#111",
      fontFamily: '"Poppins", sans-serif',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#111", // Seçilen metnin rengini belirle
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white", // Dropdown menüsünün arka plan rengini belirle
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "default", // Hover durumunda imlecin değişmesini engeller
      backgroundColor: state.isFocused ? "transparent" : "transparent", // Hover durumundaki arka plan rengini kaldırır
      color: "black", // Seçenek metni rengi
      textAlign: "center", // Metni yatayda ortala
      display: "flex",
      justifyContent: "center", // Dikeyde ortalamak için flex ile hizalar
      alignItems: "center",
    }),
  };

  // Menü dışına tıklandığında menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowComponent(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
                <Link href="/products">Mağazalar</Link>
              </span>
            </div>
            <div className="corporateSales">
              <span>
                <Link href="#">Korporativ satış</Link>
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
              <button>Aylıq Ödəniş</button>
            </div>

            <div className="changeLang">
              {/* <span>AZ</span> */}
              <Select
                options={languageOptions}
                onChange={handleChange}
                defaultValue={languageOptions[0]}
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
                {/* <HamburgerMenu className="newCategoryIcon" /> */}
                <CategoryIcon className="newCategoryIcon" />
                <span>Kataloq</span>
              </div>
            </div>
            <div className="xl-8 lg-8 md-8 sm-8">
              <div className="headerSearching">
                <div className="searchContainer">
                  <input type="search" placeholder="Axtar..." />
                  <div className="searchButtonIcon">
                    <IoSearch />
                  </div>
                </div>
              </div>
            </div>
            <div className="xl-2 lg-2 md-2 sm-2">
              <div className="headerMiddleRight">
                <div className="rightPagesIcon">
                  <Link href="#">
                    <button>
                      <Login className="newScalet" />
                    </button>
                  </Link>
                </div>
                <div className="rightPagesIcon">
                  <Link href="#">
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
                  <Link href="#">
                    <button>
                      <BlackBasket className="rightPagesIconBlackIcons newCartIcon"  />
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
                  top: "100%", // headerCatalog'un hemen altında
                  left: 0,
                  width: "100%",
                  zIndex: 10, // diğer içeriklerin üzerinde
                  padding: "1rem 0",
                }}
              >
                <CatalogMenu />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
