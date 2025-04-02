
// components/MegaMenu.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import Phone from "../../public/icons/blackPhone.svg";
import TV from "../../public/icons/blackTV.svg";
import Laptop from "../../public/icons/blackLaptop.svg";
import MeisetTexnikasi from "../../public/icons/blackMeisetTexnikasi.svg";
import Fan from "../../public/icons/blackFan.svg";
import Mebel from "../../public/icons/blackMebel.svg";

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
              <div className="categoryLeftIcon ee">
                <Phone />
              </div>
              Telefonlar və aksesuarlar 
            </li>
            <li onMouseEnter={() => setActiveTab("tv")}>
              <div className="categoryLeftIcon" id="categoryLeftIconTV">
                <TV />
              </div>
              TV, audio-video foto
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              <div className="categoryLeftIcon" id="categoryLeftIconLaptop">
                <Laptop />
              </div>
              Nodbuklar və planşetlər
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              <div className="categoryLeftIcon" id="categoryLeftIconMeiset">
                <MeisetTexnikasi />
              </div>
              Məişət texnikası
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              <div className="categoryLeftIcon" id="categoryLeftIconFan">
                <Fan />
              </div>
              Gözəllik və sağlamlıq
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              <div className="categoryLeftIcon" id="categoryLeftIconMebel">
                <Mebel />
              </div>
              <span>Mebel, tekstil və dekor</span>
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
