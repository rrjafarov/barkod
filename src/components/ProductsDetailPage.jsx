// !
"use client";
import Link from "next/link";
import Form from "next/form";
import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";
import ProductsDPFancybox from "./ProductsDPFancybox";
import { Rating, Box } from "@mui/material";
import { Progress, Row, Col, Typography } from "antd";
import NewScale from "../../public/icons/newScale.svg";
import NewWishList from "../../public/icons/newWishlist.svg";
import BlackBasket from "../../public/icons/blackBasket.svg";
import { IoCartOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const ProductsDetailPage = () => {
  const [value, setValue] = useState(2);
  const [activeTab, setActiveTab] = useState("tech");
  const [showModal, setShowModal] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };
  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  return (
    <div id="productsDetailPage">
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
          <Link href="/category">
            <span>Telefonlar</span>
          </Link>
          <strong>
            <MdKeyboardArrowRight className="breadCrumpIcon" />
          </strong>
          <span className="lastChildBread">iPhone 16 Pro</span>
        </div>
        {/* <div className="productDPTitle">
          <h2>Aeroqril PHILIPS HD04949</h2>
          <div className="productDPRating">
            <Box className="productDPRatingBox">
              <Rating
                name="star-rating"
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
              />
            </Box>
            <p>({value})</p>
          </div>
        </div> */}
        <div className="row">
          <div className="xl-6 lg-6 md-6 sm-12">
            <ProductsDPFancybox />
          </div>

          <div className="xl-6 lg-6 md-6 sm-12">
            {/* <div className="productDPTitle">
              <h2>Aeroqril PHILIPS HD04949</h2>
              <div className="productDPRating">
                <Box className="productDPRatingBox">
                  <Rating
                    name="star-rating"
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                  />
                </Box>
                <p>({value})</p>
              </div>
            </div> */}
            <div className="productDPDetail">
              <div className="productDPTitle">
                <h2>Aeroqril PHILIPS HD04949</h2>
                <div className="productDPRating">
                  <Box className="productDPRatingBox">
                    <Rating
                      name="star-rating"
                      value={value}
                      onChange={(event, newValue) => setValue(newValue)}
                    />
                  </Box>
                  <p>({value})</p>
                </div>
              </div>
              <span className="depo">Məhsul Mövcuddur: </span>
              <span className="productCode">
                Məhsul kodu : <strong>00049</strong>
              </span>
              <div className="productDPPrices">
                <span className="productDPOldPrice">200.00$</span>
                <span className="productDPNewPrice">250.00$</span>
              </div>
              <div className="productsDPButtons">
                <Link href="#">
                  <button className="productsDPaddToCart">
                    <IoCartOutline /> Səbətə at
                  </button>
                </Link>
                <Link href="#">
                  <button onClick={openModal} className="productsDPbuyNow">
                    Bir Kliklə al
                  </button>
                </Link>
                <Link href="#">
                  {/* <button className="productsDPwishlist">
                    <NewWishList className="productsDPwishIcon" />
                  </button> */}
                  <button
                    onClick={toggleWishlist}
                    className="wishlist-btn productsDPwishlist"
                  >
                    {isWishlisted ? (
                      <FaHeart className="productsDPwishIcon newWishlistPR active" />
                    ) : (
                      <FiHeart className="productsDPwishIcon newWishlistPR" />
                    )}
                  </button>
                </Link>
                <Link href="#">
                  <button className="productsDPscale">
                    <NewScale className="productsDPwishIcon" />
                  </button>
                </Link>
              </div>
              <div className="paymentCalculator">
                <div className="paymentCalculatorTitle">
                  <span>Hissəli alış kalkulyatoru</span>
                  <strong>*Şərtlər endrimsiz qiymətə tətbiq olunur</strong>
                </div>
                <div className="paymentCalculatorButtons">
                  <div className="paymentCalculatorButton">
                    <p>0%</p>
                    <button>3 ay</button>
                  </div>
                  <div className="paymentCalculatorButton">
                    <p>0%</p>
                    <button>6 ay</button>
                  </div>
                  <div className="paymentCalculatorButton">
                    <p>0%</p>
                    <button>9 ay</button>
                  </div>
                  <div className="paymentCalculatorButton">
                    <p>0%</p>
                    <button>12 ay</button>
                  </div>
                  <div className="paymentCalculatorButton">
                    <p>0%</p>
                    <button>18 ay</button>
                  </div>
                  <div className="monthPayment">
                    <span>Aylıq Ödəniş</span>
                    <strong>50.00$</strong>
                  </div>
                </div>
              </div>
              {/* <div className="productsDPBuyInInstallments">
                <button>Hissə-hissə ödənişlə al</button>
              </div> */}
            </div>
          </div>
        </div>

        <section>
          <div className="productsDPTechnicalSection">
            <div className="productsDPTechnicalSectionTitle">
              <button onClick={() => setActiveTab("tech")}>
                Texniki Xüsusiyyətlər
              </button>
              <button onClick={() => setActiveTab("desc")}>Təsvir</button>
              <button onClick={() => setActiveTab("reviews")}>Rəylər</button>
            </div>

            {activeTab === "tech" && (
              <div className="technicalDetailsContent">
                <div className="technicalContentAll">
                  <div className="technicalContent">
                    <span className="techContentLeft">Marka</span>
                    <span className="techContentRight">Apple</span>
                  </div>
                  <div className="technicalContent">
                    <span className="techContentLeft">
                      Prosessor tipi (Chipset)
                    </span>
                    <span className="techContentRight">
                      Apple A14 Bionic (5 nm)
                    </span>
                  </div>
                  <div className="technicalContent">
                    <span className="techContentLeft">Ekran</span>
                    <span className="techContentRight">Oled</span>
                  </div>
                  <div className="technicalContent">
                    <span className="techContentLeft">Marka</span>
                    <span className="techContentRight">Apple</span>
                  </div>
                  <div className="technicalContent">
                    <span className="techContentLeft">
                      Prosessor tipi (Chipset)
                    </span>
                    <span className="techContentRight">
                      Apple A14 Bionic (5 nm)
                    </span>
                  </div>
                  <div className="technicalContent">
                    <span className="techContentLeft">
                      Prosessor tipi (Chipset)
                    </span>
                    <span className="techContentRight">
                      Apple A14 Bionic (5 nm)
                    </span>
                  </div>
                  <div className="technicalContent">
                    <span className="techContentLeft">Ekran</span>
                    <span className="techContentRight">Oled</span>
                  </div>
                  <div className="technicalContent">
                    <span className="techContentLeft">Marka</span>
                    <span className="techContentRight">Apple</span>
                  </div>
                  <div className="technicalContent">
                    <span className="techContentLeft">
                      Prosessor tipi (Chipset)
                    </span>
                    <span className="techContentRight">
                      Apple A14 Bionic (5 nm)
                    </span>
                  </div>
                  <div className="technicalContent">
                    <span className="techContentLeft">Ekran</span>
                    <span className="techContentRight">Oled</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "desc" && (
              <div className="descriptionContent">
                <p>Məhsulun təsviri burada göstəriləcək.</p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="productsDPComments">
                <span>Rəy Bildir</span>
                <div className="commentsFormSection">
                  <Form className="formComment" action="/search">
                    <label htmlFor="">Adınız Soyadınız</label>
                    <input type="text" placeholder="..." />
                    <label htmlFor="">Rəy</label>
                    <textarea
                      placeholder="..."
                      name="comment"
                      id="commentArea"
                    ></textarea>
                    <label htmlFor="">Dəyərləndir:</label>
                    <div className="commentsRating">
                      <Box className="commentsRatingBox">
                        <Rating
                          name="star-rating"
                          value={value}
                          onChange={(event, newValue) => setValue(newValue)}
                        />
                      </Box>
                    </div>
                    <button className="submitCommentBTN" type="submit">
                      Göndər
                    </button>
                  </Form>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsDetailPage;
