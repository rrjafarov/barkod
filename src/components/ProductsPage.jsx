"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Filter from "../../public/icons/filter.svg";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../public/icons/newScale.svg";
import NewWishList from "../../public/icons/newWishlist.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductsPageBannerSlider from "./Slider/ProductsPageBannerSlider";

const FilterAccordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          src={isOpen ? "/icons/minusIcon.svg" : "/icons/plusIcon.svg"}
          alt="+"
          className="toggle-icon"
        />
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const ProductsPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div>
      <div className="container">
        <div className="breadCrumb">
          <Link href="/">
            <span>Ana Səhifə</span>
          </Link>
          <strong>
            <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
          </strong>
          <Link href="/products">
            <span>Məhsullar</span>
          </Link>
          <strong>
            <MdKeyboardArrowRight className="breadCrumpIcon" />
          </strong>
          <span className="lastChildBread">Telefonlar</span>
        </div>
        <div className="productsPageBanner">
          <div className="productsPageBannerImage">
            <Image
              src="/images/productPageBanner.jpeg"
              alt="banner"
              width={1000}
              height={600}
            />
          </div>
        </div>
        <div className="productsPageSliderBanner">
          <ProductsPageBannerSlider />
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

        <div className="row">
          <div className="xl-2 lg-2 md-2 sm-12">
            <div className="filter-container">
              {/* Filtre butonu her zaman görünsün */}
              <button
                className="filter-title"
                onClick={() => setMobileFilterOpen(!isMobileFilterOpen)}
              >
                <span>Filter</span>
                <div className="filter-icon">
                  <Filter className="filIcon" />
                </div>
              </button>

              {/* Desktop için seçili filtreler (filter-title altında) */}
              {/* <div className="selectedFilter desktop-only">
                <div className="selectedFilterInner">
                  <span>x</span>
                  <p>siemens</p>
                </div>
                <div className="selectedFilterInner">
                  <span>x</span>
                  <p>borsch</p>
                </div>
              </div> */}

              {/* Filtre paneli: mobilde açıldığında tüm ekranı kaplar */}
              <div
                className={`filter-panel ${isMobileFilterOpen ? "active" : ""}`}
              >
                {/* Mobilde açılan menüde filter-titless başlığı altında olacak */}
                <button className="filter-titless">Filter</button>

                {/* Mobil için seçili filtreler (filter-titless altında) */}
                <div className="selectedFilter mobile-only">
                  <div className="selectedFilterInner">
                    <span>x</span>
                    <p>siemens</p>
                  </div>
                  <div className="selectedFilterInner">
                    <span>x</span>
                    <p>borsch</p>
                  </div>
                </div>

                <button
                  className="close-btn"
                  onClick={() => setMobileFilterOpen(false)}
                >
                  x
                </button>
                <div className="lineFiltered"></div>
                <FilterAccordion title="Qiymət" defaultOpen={true}>
                  <ul>
                    <li>
                      X-ray Equipment<p>(22)</p>
                    </li>
                    <li>Medical Devices</li>
                    <li>
                      Dental Equipment <p>(23)</p>
                    </li>
                    <li>
                      Surgical Equipment <p>(22)</p>
                    </li>
                  </ul>
                </FilterAccordion>
                <FilterAccordion title="İstehsalçı">
                  <ul>
                    <li>
                      X-ray Equipment<p>(22)</p>
                    </li>
                    <li>
                      Medical Devices <p>(54)</p>
                    </li>
                    <li>
                      Dental Equipment <p>(23)</p>
                    </li>
                    <li>
                      Surgical Equipment <p>(22)</p>
                    </li>
                  </ul>
                </FilterAccordion>
                <FilterAccordion title="Qiymət">
                  <ul>
                    <li>
                      X-ray Equipment<p>(22)</p>
                    </li>
                    <li>Medical Devices</li>
                    <li>
                      Dental Equipment <p>(23)</p>
                    </li>
                    <li>
                      Surgical Equipment <p>(22)</p>
                    </li>
                  </ul>
                </FilterAccordion>
                <FilterAccordion title="İstehsalçı">
                  <ul>
                    <li>
                      X-ray Equipment<p>(22)</p>
                    </li>
                    <li>
                      Medical Devices <p>(54)</p>
                    </li>
                    <li>
                      Dental Equipment <p>(23)</p>
                    </li>
                    <li>
                      Surgical Equipment <p>(22)</p>
                    </li>
                  </ul>
                </FilterAccordion>
                <FilterAccordion title="Qiymət">
                  <ul>
                    <li>
                      X-ray Equipment<p>(22)</p>
                    </li>
                    <li>Medical Devices</li>
                    <li>
                      Dental Equipment <p>(23)</p>
                    </li>
                    <li>
                      Surgical Equipment <p>(22)</p>
                    </li>
                  </ul>
                </FilterAccordion>
                <FilterAccordion title="İstehsalçı">
                  <ul>
                    <li>
                      X-ray Equipment<p>(22)</p>
                    </li>
                    <li>
                      Medical Devices <p>(54)</p>
                    </li>
                    <li>
                      Dental Equipment <p>(23)</p>
                    </li>
                    <li>
                      Surgical Equipment <p>(22)</p>
                    </li>
                  </ul>
                </FilterAccordion>
              </div>
            </div>
          </div>
          <div className="xl-10 lg-10 md-10 sm-12">
            <div className="productPageCards">
              <div className="row">
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="productSecondHomePageProductsCard">
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
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="productSecondHomePageProductsCard">
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
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="productSecondHomePageProductsCard">
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
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="productSecondHomePageProductsCard">
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
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="productSecondHomePageProductsCard">
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
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="productSecondHomePageProductsCard">
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
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="productSecondHomePageProductsCard">
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
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="productSecondHomePageProductsCard">
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
    </div>
  );
};

export default ProductsPage;
