// import React from "react";
// import Link from "next/link";

// const CategoryMenu = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//             <div className="xl-3 lg-3 md-3 sm-3">
//                 Salam
//             </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CategoryMenu;

// components/MegaMenu.jsx
"use client";
import Link from "next/link";
import { useState } from "react";

const MegaMenu = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="containera">
      <div className="categoryMegaMenu">
        {/* Sol Kısım - Kategoriler */}
        <div className="leftColumn">
          {/* <h3>Ürünler</h3> */}
          <ul>
            <li onMouseEnter={() => setActiveTab("elektronika")}>
              Telefonlar və aksesuarlar
            </li>
            <li onMouseEnter={() => setActiveTab("tv")}>
              TV, audio-video foto
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              Nodbuklar və planşetlər
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>Məişət texnikası</li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              Gözəllik və sağlamlıq
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              Mebel, tekstil və dekor
            </li>
          </ul>
        </div>

        {/* Sağ Kısım - Alt Kategoriler */}
        <div className="rightColumn">
          {activeTab === "elektronika" && (
            <>
              <div className="rightColumnItems">
                <div className="rightColumnItem">
                  <span className="catgorySubTitle">Aksesuarlar</span>
                  <ul>
                    <li>
                      <Link href="#">Qulaqlıq</Link>
                    </li>
                    <li>
                      <Link href="#">Naqil</Link>
                    </li>
                    <li>
                      <Link href="#">Adapter</Link>
                    </li>
                  </ul>
                </div>
                <div className="rightColumnItem">
                  <span className="catgorySubTitle">Electronics Home</span>
                  <ul>
                    <li>
                      <Link href="#">Machinecs</Link>
                    </li>
                    <li>
                      <Link href="#">Phones</Link>
                    </li>
                    <li>
                      <Link href="#">Tablets</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === "tv" && (
            <>
              <div className="rightColumnItems">
                <div className="rightColumnItem">
                  <span className="catgorySubTitle">Brendlər</span>
                  <ul>
                    <li>
                      <Link href="#">Toshiba</Link>
                    </li>
                    <li>
                      <Link href="#">LG</Link>
                    </li>
                    <li>
                      <Link href="#">Samsung</Link>
                    </li>
                  </ul>
                </div>
                <div className="rightColumnItem">
                  <span className="catgorySubTitle">Brendlər</span>
                  <ul>
                    <li>
                      <Link href="#">Toshiba</Link>
                    </li>
                    <li>
                      <Link href="#">LG</Link>
                    </li>
                    <li>
                      <Link href="#">Samsung</Link>
                    </li>
                  </ul>
                </div>
                <div className="rightColumnItem">
                  <span className="catgorySubTitle">Brendlər</span>
                  <ul>
                    <li>
                      <Link href="#">Toshiba</Link>
                    </li>
                    <li>
                      <Link href="#">LG</Link>
                    </li>
                    <li>
                      <Link href="#">Samsung</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* {!activeTab && <p>Kategoriya seçin</p>} */}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
