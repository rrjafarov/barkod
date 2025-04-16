"use-client";
import React, { useRef, useState } from "react";
import NewScale from "../../public/icons/newScale.svg";
import NewWishList from "../../public/icons/newWishlist.svg";
import Link from "next/link";
import Image from "next/image";
import { TbCurrencyManat } from "react-icons/tb";

const ProductCard = ({openModal}) => {
  return (
    <div className="container">
      <div className="secondHomePageProductsCard">
        <Link href="/products/id" className="blockCardLink">
          <div className="secondHomePageProductsCardImage">
            <Image
              src="/images/iphone16pro.png"
              alt="sony"
              width={200}
              height={200}
            />
          </div>
        </Link>
        <div className="secondHomePageProductsCardContent">
          <span>iPhone 16 Pro Max 256 GB Black Titanium</span>
          <div className="discount">
            <span>
              -350 <TbCurrencyManat />
            </span>
          </div>
          <div className="cardBottomContent">
            <div className="price">
              <span className="oldPrice">
                3000,00
                <TbCurrencyManat />
              </span>
              <span className="newPrice">
                2400,00
                <TbCurrencyManat />
              </span>
            </div>

            <div className="wishList">
              <button>
                <NewScale className="newScalePR" />
              </button>
              <button>
                <NewWishList className="newWishlistPR" />
              </button>
            </div>
          </div>
        </div>
        <div className="addToCartClick">
          <div className="addToCartClickItem">
            <button className="cartBtn">Səbətə at</button>
            <button onClick={openModal} className="clickBtn">Bir Klikle Al</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
