import React from "react";
// import { TbTruckDelivery } from "react-icons/tb";
// import { CiCreditCard1 } from "react-icons/ci";
// import { IoCalendarOutline } from "react-icons/io5";
// import { BiSupport } from "react-icons/bi";
import DeliveryRed from "../../public/icons/deliveryRed.svg";
import OfficialRed from "../../public/icons/officialRed.svg";
import PartByPartRed from  "../../public/icons/PartByPartRed.svg"
import OperatorRed from "../../public/icons/operatorsRed.svg"

const HomePageStaticInfo = () => {
  return (
    <div>
      <section id="staticInfo">
        <div className="container">
          <div className="row">
            <div className="xl-3 lg-3 md-6 sm-6">
              <div className="staticInfoCard">
                <div className="staticInfoImage">
                  {/* <TbTruckDelivery /> */}
                  <DeliveryRed  className="deliveryIcon" />
                </div>
                <div className="staticInfoContent">
                  <span>Pulsuz Çatdırılma</span>
                </div>
              </div>
            </div>
            <div className="xl-3 lg-3 md-6 sm-6">
              <div className="staticInfoCard">
                <div className="staticInfoImage">
                  {/* <CiCreditCard1 /> */}
                  <OfficialRed className="officialIcon" />
                </div>
                <div className="staticInfoContent">
                  <span>Qapıda Rəsmiləşdirmə</span>
                </div>
              </div>
            </div>
            <div className="xl-3 lg-3 md-6 sm-6">
              <div className="staticInfoCard">
                <div className="staticInfoImage">
                  {/* <IoCalendarOutline /> */}
                  <PartByPartRed  className="deliveryIcon" />
                </div>
                <div className="staticInfoContent">
                  <span>Hissə-hissə ödəniş</span>
                </div>
              </div>
            </div>
            <div className="xl-3 lg-3 md-6 sm-6">
              <div className="staticInfoCard">
                <div className="staticInfoImage">
                {/* <BiSupport /> */}
                <OperatorRed className="supportIcon" />
                </div>
                <div className="staticInfoContent">
                  <span>24/7 Dəstək</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageStaticInfo;
