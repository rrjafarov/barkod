import React from "react";
import DeliveryRed from "../../public/icons/deliveryRed.svg";
import OfficialRed from "../../public/icons/officialRed.svg";
import PartByPartRed from "../../public/icons/partBypartRed.svg";
import OperatorRed from "../../public/icons/operatorsRed.svg";
import Image from "next/image";
import LastDelivery from "../../public/icons/lastDelivery.svg";
import LastOffical from "../../public/icons/lastOffical.svg";
import LastPartByPart from "../../public/icons/lastPartByPart.svg";

const HomePageStaticInfo = ({ t }) => {
  return (
    <div>
      <section id="staticInfo">
        <div className="container">
          {/* <div className="row"> */}

          <div className="rowdurbu">
            <div className="staticInfoCard staticFirstCard">
              <div className="staticInfoImage">
                <Image
                  // src="/icons/deliveryRed.svg"
                  src="/icons/tir.svg"
                  alt="delivery"
                  width={800}
                  height={800}
                  className="deliveryIcon"
                />
              </div>
              <div className="staticInfoContent">
                <span>{t?.freedelivery || "Pulsuz çatdırılma"}</span>
              </div>
            </div>

            <div className="staticInfoCard">
              <div className="staticInfoImage">
                <Image
                  src="/icons/officialRed.svg"
                  alt="delivery"
                  width={800}
                  height={800}
                  className="officialIcon"
                />
              </div>
              <div className="staticInfoContent">
                <span>{t?.officialpay || "Qapıda rəsmiləşdirmə"}</span>
              </div>
            </div>
            <div className="staticInfoCard">
              <div className="staticInfoImage">
                <Image
                  src="/icons/partBypartRed.svg"
                  alt="delivery"
                  width={800}
                  height={800}
                  className="deliveryIcon"
                />
              </div>
              <div className="staticInfoContent">
                <span>{t?.partofpartpay || "Hissə-hissə ödəniş"}</span>
              </div>
            </div>
            <div className="staticInfoCard staticLastCard">
              <div className="staticInfoImage">
                <Image
                  src="/icons/operatorsRed.svg"
                  alt="delivery"
                  width={800}
                  height={800}
                  className="supportIcon"
                />
              </div>
              <div className="staticInfoContent">
                <span>{t?.support || "24/7 Xidmətinizdəyik"}</span>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default HomePageStaticInfo;
