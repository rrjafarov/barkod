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
import { SlScreenSmartphone } from "react-icons/sl";
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
              <Link href="/category">
                <div className="categoryLeftIcon ee">
                  <Phone  />
                  {/* <SlScreenSmartphone  /> */}
                </div>
                <span>Telefonlar və aksesuarlar</span>
              </Link>
            </li>
            <li onMouseEnter={() => setActiveTab("tv")}>
              <Link href="/">
                <div className="categoryLeftIcon" id="categoryLeftIconTV">
                  <TV />
                </div>
                <span>TV, audio-video foto</span>
              </Link>
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              <Link href="/">
                <div className="categoryLeftIcon" id="categoryLeftIconLaptop">
                  <Laptop />
                </div>
                <span>Nodbuklar və planşetlər</span>
              </Link>
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              <Link href="/">
                <div className="categoryLeftIcon" id="categoryLeftIconMeiset">
                  <MeisetTexnikasi />
                </div>
                <span>Məişət texnikası</span>
              </Link>
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              <Link href="/">
                <div className="categoryLeftIcon" id="categoryLeftIconFan">
                  <Fan />
                </div>
                <span>Gözəllik və sağlamlıq</span>
              </Link>
            </li>
            <li onMouseEnter={() => setActiveTab("ev")}>
              <Link href="/">
                <div className="categoryLeftIcon" id="categoryLeftIconMebel">
                  <Mebel />
                </div>
                <span>Mebel, tekstil və dekor</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Sağ Kısım - Alt Kategoriler */}
        <div className="rightColumn">
          {activeTab === "elektronika" && (
            <>
              <div className="rightColumnItems">
                <div className="rightColumnItem">
                  <span className="catgorySubTitle"><Link href="/">Aksesuarlar</Link></span>
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
                  {/* <span className="catgorySubTitle">Electronics Home</span> */}
                  <span className="catgorySubTitle"><Link href="/">Aksesuarlar</Link></span>
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
                  {/* <span className="catgorySubTitle">Brendlər</span> */}
                  <span className="catgorySubTitle"><Link href="/">Aksesuarlar</Link></span>
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
                  {/* <span className="catgorySubTitle">Brendlər</span> */}
                  <span className="catgorySubTitle"><Link href="/">Aksesuarlar</Link></span>
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

// ***********
