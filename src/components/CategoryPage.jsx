import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";

const CategoryPage = () => {
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
          {/* <Link href="#"> */}
            <span className="lastChildBread" >Kategoriya</span>
          {/* </Link> */}
        </div>
      </div>

      <section id="categoryPage">
        <div className="container">
          <div className="row">
            <div className="xl-2 lg-2 md-3 lg-4">
              <Link className="categoryPageLinkData" href="/">
                <div className="categoryPageCard">
                  <div className="categoryPageCardItem">
                    <Image
                      src="/images/iphone16pro.png"
                      alt="productsBannerSlider1"
                      width={500}
                      height={500}
                    />
                    <span>Phone</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-2 lg-2 md-3 lg-4">
              <Link className="categoryPageLinkData" href="/">
                <div className="categoryPageCard">
                  <div className="categoryPageCardItem">
                    <Image
                      src="/images/iphone16pro.png"
                      alt="productsBannerSlider1"
                      width={500}
                      height={500}
                    />
                    <span>Phone</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-2 lg-2 md-3 lg-4">
              <Link className="categoryPageLinkData" href="/">
                <div className="categoryPageCard">
                  <div className="categoryPageCardItem">
                    <Image
                      src="/images/iphone16pro.png"
                      alt="productsBannerSlider1"
                      width={500}
                      height={500}
                    />
                    <span>Phone</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-2 lg-2 md-3 lg-4">
              <Link className="categoryPageLinkData" href="/">
                <div className="categoryPageCard">
                  <div className="categoryPageCardItem">
                    <Image
                      src="/images/iphone16pro.png"
                      alt="productsBannerSlider1"
                      width={500}
                      height={500}
                    />
                    <span>Phone</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-2 lg-2 md-3 lg-4">
              <Link className="categoryPageLinkData" href="/">
                <div className="categoryPageCard">
                  <div className="categoryPageCardItem">
                    <Image
                      src="/images/iphone16pro.png"
                      alt="productsBannerSlider1"
                      width={500}
                      height={500}
                    />
                    <span>Phone</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-2 lg-2 md-3 lg-4">
              <Link className="categoryPageLinkData" href="/">
                <div className="categoryPageCard">
                  <div className="categoryPageCardItem">
                    <Image
                      src="/images/iphone16pro.png"
                      alt="productsBannerSlider1"
                      width={500}
                      height={500}
                    />
                    <span>Phone</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-2 lg-2 md-3 lg-4">
              <Link className="categoryPageLinkData" href="/">
                <div className="categoryPageCard">
                  <div className="categoryPageCardItem">
                    <Image
                      src="/images/iphone16pro.png"
                      alt="productsBannerSlider1"
                      width={500}
                      height={500}
                    />
                    <span>Phone</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-2 lg-2 md-3 lg-4">
              <Link className="categoryPageLinkData" href="/">
                <div className="categoryPageCard">
                  <div className="categoryPageCardItem">
                    <Image
                      src="/images/iphone16pro.png"
                      alt="productsBannerSlider1"
                      width={500}
                      height={500}
                    />
                    <span>Phone</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-2 lg-2 md-3 lg-4">
              <Link className="categoryPageLinkData" href="/">
                <div className="categoryPageCard">
                  <div className="categoryPageCardItem">
                    <Image
                      src="/images/iphone16pro.png"
                      alt="productsBannerSlider1"
                      width={500}
                      height={500}
                    />
                    <span>Phone</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-2 lg-2 md-3 lg-4">
              <Link className="categoryPageLinkData" href="/">
                <div className="categoryPageCard">
                  <div className="categoryPageCardItem">
                    <Image
                      src="/images/iphone16pro.png"
                      alt="productsBannerSlider1"
                      width={500}
                      height={500}
                    />
                    <span>Phone</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
