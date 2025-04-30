"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../../public/icons/newScale.svg";
import NewWishList from "../../../public/icons/newWishlist.svg";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

const Wishlist = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className="container">
      <div className="breadCrumb">
        <Link href="/">
          <span>Ana Səhifə</span>
        </Link>
        <strong>
          <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
        </strong>
        <Link href="#">
          <span>Seçilmişlər</span>
        </Link>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <button className="close-btns" onClick={closeModal}>
              X
            </button>
            <span>Bir kliklə al</span>
            <div></div>
            <div className="numberModal">
              <label htmlFor="phone">Nömrə: +994</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <button className="open-btn">Bir kliklə al</button>
          </div>
        </div>
      )}
      <div className="wishlistPage">
        <span className="wishTitle">Seçilmişlər</span>
        <div className="ptop row">
          <div className="xl-3 lg-4 md-4 sm-6">
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
                      {/* <NewWishList className="newWishlistPR" /> */}
                      <AiFillHeart className="wishlistFillIcon" />

                    </button>
                  </div>
                </div>
              </div>
              <div className="addToCartClick">
                <div className="addToCartClickItem">
                  <button className="cartBtn">Səbətə at</button>
                  <button onClick={openModal} className="clickBtn">
                    Bir Klikle Al
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="xl-3 lg-4 md-4 sm-6">
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
                      {/* <NewWishList className="newWishlistPR" /> */}
                      <AiFillHeart className="wishlistFillIcon" />

                    </button>
                  </div>
                </div>
              </div>
              <div className="addToCartClick">
                <div className="addToCartClickItem">
                  <button className="cartBtn">Səbətə at</button>
                  <button onClick={openModal} className="clickBtn">
                    Bir Klikle Al
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
