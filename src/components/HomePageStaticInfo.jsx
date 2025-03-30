import React from "react";
import DeliveryRed from "../../public/icons/deliveryRed.svg";
import DeliveryBlack from "../../public/icons/deliveryBlack.svg";
import OfficialRed from "../../public/icons/officialRed.svg";
import PartByPartRed from "../../public/icons/partBypartRed.svg";
import OperatorRed from "../../public/icons/operatorsRed.svg";

const HomePageStaticInfo = () => {
  return (
    <div>
      <section id="staticInfo">
        <div className="container">
          <div className="row">
            <div className="xl-3 lg-3 md-6 sm-6">
              <div className="staticInfoCard">
                <div className="staticInfoImage">
                  <DeliveryRed className="deliveryIcon" />
                  {/* <DeliveryBlack className="deliveryIcon" /> */}
                </div>
                <div className="staticInfoContent">
                  <span>Pulsuz Çatdırılma</span>
                </div>
              </div>
            </div>

            <div className="xl-3 lg-3 md-6 sm-6">
              <div className="staticInfoCard">
                <div className="staticInfoImage">
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
                  <PartByPartRed className="deliveryIcon" />
                  {/* <img
                    className="deliveryIcon"
                    src="/icons/partBypartRed.svg"
                    alt="dee"
                  /> */}
                </div>
                <div className="staticInfoContent">
                  <span>Hissə-hissə ödəniş</span>
                </div>
              </div>
            </div>
            <div className="xl-3 lg-3 md-6 sm-6">
              <div className="staticInfoCard">
                <div className="staticInfoImage">
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
