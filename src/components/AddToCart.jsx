"use client";
import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoPlusCircle } from "react-icons/go";
import { HiOutlineMinusCircle } from "react-icons/hi2";
import { TbCurrencyManat } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const AddToCart = () => {
  const [count, setCount] = useState(1); // ✅ Say

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
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
        {/* <Link href="#"> */}
        <span className="lastChildBread">Səbət</span>
        {/* </Link> */}
      </div>
      <div className="row">
        <div className="xl-8 lg-8 md-8 sm-12">
          <div className="addToCartProductSection">
            <div className="cartProductSectionTop">
              <span className="cartTitle">Səbət</span>
              {/* <span>( 1 məhsul )</span> */}
            </div>
            {/* <div className="cartProductSectionBottom">
              <button>Hamısını seç</button>
              <button className="deleteCartItem">
                <span>
                  <RiDeleteBinLine />
                </span>{" "}
                Seçilənləri sil{" "}
              </button>
            </div> */}
          </div>

          <div className="cartProduct">
            <div className="cartProductLeft">
              <input type="checkbox" />
              <div className="cartProductImage">
                <Image
                  src="/images/iphone16pro.png"
                  alt="productImage"
                  width={800}
                  height={800}
                />
              </div>
              <div className="cartProductTitle">
                <h6>iPhone 16 Pro 256 GB Black</h6>
                {/* <button>
                  <span>
                    <GoPlusCircle />
                  </span>
                  Zəmanət
                </button> */}
              </div>
            </div>

            <div className="cartProductRight">
              <div className="cartCount">
                <HiOutlineMinusCircle
                  onClick={decreaseCount}
                  className="cartCountIcon"
                />
                <span>{count}</span>
                <GoPlusCircle
                  onClick={increaseCount}
                  className="cartCountIcon"
                />
              </div>
              <div className="cartPrices">
                <span className="cartNewPrice">
                  4599.00 <TbCurrencyManat />
                </span>
                <span className="cartOldPrice">
                  3599.00 <TbCurrencyManat />
                </span>
              </div>

              <button className="closeCartProduct">
                <IoClose />
              </button>
            </div>
          </div>
        </div>

        <div className="xl-4 lg-4 md-4 sm-12">
          <div className="addToCartPaymentSection">
            <div className="cartPaymentSectionTop">
              <div className="firstCartPaymentSectionTop">
                <span>Məhsul:</span>
                {/* <span>{count} Məhsul</span> */}
              </div>
              <div className="secondCartPaymentSectionTop">
                <span>
                  iPhone 16 Pro 256 GB Black
                  {/* <strong>(1ədəd)</strong> */}
                </span>
                <div className="cartPrices">
                  <span className="cartNewPrice">
                    4599.00 <TbCurrencyManat />
                  </span>
                  <span className="cartOldPrice">
                    3599.00 <TbCurrencyManat />
                  </span>
                </div>
              </div>
            </div>
            <div className="discountAndFinalPrice">
              <div className="discountPrice">
                <div className="discountPriceAll">
                  <span>Ümumi məbləğ:</span>
                  <span className="cartNewPrice">
                    3599.00 <TbCurrencyManat />
                  </span>
                </div>
                <div className="discountPricesInner">
                  <span>Endirim:</span>
                  <span className="cartNewPrice">
                    359.00 <TbCurrencyManat />
                  </span>
                </div>
              </div>
              <div className="finalPrice">
                <span>Yekun məbləğ:</span>
                <span className="cartNewPrice">
                  3259.00 <TbCurrencyManat />
                </span>
              </div>
            </div>
          </div>
          <div className="addToCartPaymentButtons">
            <Link href="/checkout">
              <button className="officialPaymentBtn">
                Sifarişi Rəsmiləşdir
              </button>
            </Link>
            <button>Bir kliklə al</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
