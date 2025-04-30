import React from "react";
import DeliveryRed from "../../public/icons/deliveryRed.svg";
import OfficialRed from "../../public/icons/officialRed.svg";
import PartByPartRed from "../../public/icons/partBypartRed.svg";
import OperatorRed from "../../public/icons/operatorsRed.svg";
import Image from "next/image";

const HomePageStaticInfo = () => {
  return (
    <div>
      <section id="staticInfo">
        <div className="container">
          {/* <div className="row"> */}
          <div className="rowdurbu">
            <div className="staticInfoCard staticFirstCard">
              <div className="staticInfoImage">
                {/* <DeliveryRed className="deliveryIcon" /> */}
                <Image
                  src="/icons/deliveryRed.svg"
                  alt="delivery"
                  width={800}
                  height={800}
                  className="deliveryIcon"
                />
              </div>
              <div className="staticInfoContent">
                <span>Pulsuz Çatdırılma</span>
              </div>
            </div>
            <div className="staticInfoCard">
              <div className="staticInfoImage">
                {/* <OfficialRed className="officialIcon" /> */}
                <Image
                  src="/icons/officialRed.svg"
                  alt="delivery"
                  width={800}
                  height={800}
                  className="officialIcon"
                />
              </div>
              <div className="staticInfoContent">
                <span>Qapıda Rəsmiləşdirmə</span>
              </div>
            </div>
            <div className="staticInfoCard">
              <div className="staticInfoImage">
                {/* <PartByPartRed className="deliveryIcon" /> */}
                <Image
                  src="/icons/partBypartRed.svg"
                  alt="delivery"
                  width={800}
                  height={800}
                  className="deliveryIcon"
                />
              </div>
              <div className="staticInfoContent">
                <span>Hissə-hissə ödəniş</span>
              </div>
            </div>
            <div className="staticInfoCard staticLastCard">
              <div className="staticInfoImage">
                {/* <OperatorRed className="supportIcon" /> */}
                <Image
                  src="/icons/operatorsRed.svg"
                  alt="delivery"
                  width={800}
                  height={800}
                  className="supportIcon"
                />
              </div>
              <div className="staticInfoContent">
                <span>24/7 Xidmətinizdəyik</span>
              </div>
            </div>

            {/* <div className="xl-3 lg-3 md-6 sm-6">
                <div className="staticInfoCard">
                  <div className="staticInfoImage">
                    <DeliveryRed className="deliveryIcon" />
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
              </div> */}
          </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default HomePageStaticInfo;
