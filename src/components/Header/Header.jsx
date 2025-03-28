"use client";
import React, { useState } from "react";
import "@/components/Header/header.scss";
import Link from "next/link";
import { BiSolidCategoryAlt } from "react-icons/bi";
import Image from "next/image";
import RedCategory from "../../../public/icons/redCategory.svg";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <nav id="header">
        <div className="headerTop">
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={200}
                height={40}
              />
            </Link>
          </div>
          <div className="storeAndCorporateSales">
            <div className="stores">
              <span>
                <Link href="#">Mağazalar</Link>
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
              <span>AZ</span>
            </div>
          </div>
        </div>

        <div className="headerMiddle">
          <div className="row">
            <div className="xl-2 lg-2 md-2 sm-2">
              <div className="headerCatalog">
                <RedCategory className="categoryIcon" />
                <span>Katalog</span>
              </div>
            </div>
            <div className="xl-8 lg-8 md-8 sm-8">
              <div className="headerSearching">
                <div className="searchContainer">
                  <span className="searchIcon">Search ...</span>
                </div>
              </div>
            </div>
            <div className="xl-2 lg-2 md-2 sm-2">
              <div className="headerCartWishlist">
                <span>Cart&Wishlist</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
