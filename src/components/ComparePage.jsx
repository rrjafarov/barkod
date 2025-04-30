"use client";
import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../public/icons/newScale.svg";
import NewWishList from "../../public/icons/newWishlist.svg";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Switch } from "antd";


const ComparePage = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <>
      <div className="container">
        <div className="breadCrumb">
          <Link href="/">
            <span>Ana Səhifə</span>
          </Link>
          <strong>
            <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
          </strong>
          <Link href="#">
            <span>Müqaisə</span>
          </Link>
        </div>
      </div>
      <section id="comparePageSection">
        <div className="container">
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
          <div className="row">
            <div className="xl-3 lg-3 md-3 sm-12">
              <div className="comparePageLeft">
                <span>Göstər</span>
                <div className="compareAllParametrs">
                  <span>Telefonlar</span>
                  <span>Hamısını silin</span>
                </div>
                <div className="allParametrAndDifference">
                  <span>Bütün Parametrər</span>
                  <Switch
                    defaultChecked
                    // onChange={onChange}
                  />
                  <span>Fərqlər</span>
                </div>
              </div>
              <div className="comparePageLeftAttribute">
                <span className="attr">Xüsusiyyətlər</span>
                <ul>
                  <li>
                    <span>Marka</span>
                  </li>
                  <li>
                    <span>Dioqonal</span>
                  </li>
                  <li>
                    <span>HDR</span>
                  </li>
                  <li>
                    <span>Ekran Tezliyi</span>
                  </li>
                  <li>
                    <span>Kamera</span>
                  </li>
                  <li>
                    <span>Prosessor</span>
                  </li>
                  <li>
                    <span>Ekran Tezliyi</span>
                  </li>
                  <li>
                    <span>Kamera</span>
                  </li>
                  <li>
                    <span>Prosessor</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl-9 lg-9 md-9 sm-12">
              <div className="comparePageRight">
                <div className="row">
                  <div className="xl-4 lg-4 md-6 sm-6">
                    <div className="productSecondHomePageProductsCard">
                      <div className="compareCloseIcon">
                        <IoCloseSharp id="compareCloseIcon" />
                      </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ComparePage;
