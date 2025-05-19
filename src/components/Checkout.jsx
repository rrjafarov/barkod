import Image from "next/image";
import React from "react";
import CheckoutFrom from "../components/CheckoutForm"

const Checkout = () => {
  return (
    <div className="container">
      <div className="checkout">
        <span>Sifarişi rəsmiləşdir</span>
        <div className="checkoutItems">
          <div className="row">
            <div className="xl-4 lg-4 md-4 sm-12" id="leftSectionCheckout">
              <div className="checkoutLeft">
                <div className="checkoutLeftImage">
                  <Image
                    src="/images/iphone16pro.png"
                    alt="iph"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="checkoutLeftContent">
                  <h4>iPhone 16 Pro 256 GB (Platinium Blue)</h4>
                  <span>539 AZN</span>
                </div>
              </div>
              <div className="checkoutLeftPrices">
                <div className="checkoutLeftPriceItems">
                  <div className="checkoutLeftPriceItem">
                    <p>Ümumi məbləğ</p>
                    <span>599 AZN</span>
                  </div>
                  <div className="checkoutLeftPriceItem">
                    <p>Endrim</p>
                    <span>59 AZN</span>
                  </div>
                  <div className="checkoutLeftPriceItem">
                    <p>Çatdırılma </p>
                    <span>00.00 AZN</span>
                  </div>
                </div>
                <div className="totalPriceCheckout">
                  <p>Yekun məbləğ:</p>
                  <span>539 AZN</span>
                </div>
              </div>
            </div>
            <div className="xl-8 lg-8 md-8 sm-12">
              <div className="checkoutRight">
                <CheckoutFrom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
