import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";

const Stores = () => {
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
          <span>Mağazalarımız</span>
        </Link>
      </div>
      <div className="row">
        <div className="xl-3 lg-3 md-3 sm-12">
          <div className="stores">
            <div className="row">
              <div className="xl-12 lg-12 md-12 sm-12">
                <div className="storeSearch">
                  <input type="search" placeholder="Mağaza axtar..." />
                </div>
                <div className="storesCard">
                  <div className="storesCardItem">
                    <div className="storesCardItemTitle">
                      <h5>Baş ofis</h5>
                      <FaLocationDot className="storeLocationIcon" />
                    </div>
                    <p className="storesCardItemSubTitle">
                      208 Ahmad Rajabli, Baku 1052
                    </p>
                    <div className="storesCardItemFooterTitle">
                      <strong>
                        Əlaqə: <span>+994777773344</span>
                      </strong>
                      <span>10:00-19:00</span>
                    </div>
                  </div>
                </div>
                <div className="storesCard">
                  <div className="storesCardItem">
                    <div className="storesCardItemTitle">
                      <h5>Baş ofis</h5>
                      <FaLocationDot className="storeLocationIcon" />
                    </div>
                    <p className="storesCardItemSubTitle">
                      208 Ahmad Rajabli, Baku 1052
                    </p>
                    <div className="storesCardItemFooterTitle">
                      <strong>
                        Əlaqə: <span>+994777773344</span>
                      </strong>
                      <span>10:00-19:00</span>
                    </div>
                  </div>
                </div>
                <div className="storesCard">
                  <div className="storesCardItem">
                    <div className="storesCardItemTitle">
                      <h5>Baş ofis</h5>
                      <FaLocationDot className="storeLocationIcon" />
                    </div>
                    <p className="storesCardItemSubTitle">
                      208 Ahmad Rajabli, Baku 1052
                    </p>
                    <div className="storesCardItemFooterTitle">
                      <strong>
                        Əlaqə: <span>+994777773344</span>
                      </strong>
                      <span>10:00-19:00</span>
                    </div>
                  </div>
                </div>
                <div className="storesCard">
                  <div className="storesCardItem">
                    <div className="storesCardItemTitle">
                      <h5>Baş ofis</h5>
                      <FaLocationDot className="storeLocationIcon" />
                    </div>
                    <p className="storesCardItemSubTitle">
                      208 Ahmad Rajabli, Baku 1052
                    </p>
                    <div className="storesCardItemFooterTitle">
                      <strong>
                        Əlaqə: <span>+994777773344</span>
                      </strong>
                      <span>10:00-19:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl-9 lg-9 md-9 sm-12">
          <div className="storesMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.9893874785475!2d49.859489375840646!3d40.412040455925116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030873391b938e5%3A0x64ded33536aa5a06!2sBarkod!5e1!3m2!1str!2saz!4v1745356067117!5m2!1str!2saz"
              width="1000"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
