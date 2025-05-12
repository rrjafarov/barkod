import Link from "next/link";
import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";

const AboutPage = () => {
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
          <Link href="#">
            <span>Haqqımızda</span>
          </Link>
        </div>
        <div className="aboutPage">
          <span>Haqqımızda:</span>
          <div className="aboutPageContent">
            <p>
              Azərbaycanda fəaliyyət göstərən Barkod Electronics müxtəlif
              markalı rəqəmsal, məişət texnikası, mebel və elektronika
              məhsullarının topdan, korporativ və pərakəndə satışını həyata
              keçirir. Barkod Electronics 2019-cu ildə fəaliyyətə başlayıb,
              lakin erkən tarixə baxmayaraq, Azərbaycanda 10 mağaza fəaliyyət
              göstərir.
            </p>
            <p>
              İlk mağazamız Siyəzəndə fəaliyyətə başlayaraq, Azərbaycanın bir
              çox bölgələrində böyüməyə başlamışıq. Hal-hazırda filiallarımız
              paytaxt və bir çox bölgələrdə fəaliyyət göstərir: Bakı, Siyəzən,
              Tovuz, Qazax, Zaqatala, Beyləqan, Xaçmaz Mebel Evi, Xudat, Xaçmaz,
              Şabran mağazalarımız mövcuddur.
            </p>


            <p>
              Azərbaycanda fəaliyyət göstərən Barkod Electronics müxtəlif
              markalı rəqəmsal, məişət texnikası, mebel və elektronika
              məhsullarının topdan, korporativ və pərakəndə satışını həyata
              keçirir. Barkod Electronics 2019-cu ildə fəaliyyətə başlayıb,
              lakin erkən tarixə baxmayaraq, Azərbaycanda 10 mağaza fəaliyyət
              göstərir.
            </p>
            <p>
              İlk mağazamız Siyəzəndə fəaliyyətə başlayaraq, Azərbaycanın bir
              çox bölgələrində böyüməyə başlamışıq. Hal-hazırda filiallarımız
              paytaxt və bir çox bölgələrdə fəaliyyət göstərir: Bakı, Siyəzən,
              Tovuz, Qazax, Zaqatala, Beyləqan, Xaçmaz Mebel Evi, Xudat, Xaçmaz,
              Şabran mağazalarımız mövcuddur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
