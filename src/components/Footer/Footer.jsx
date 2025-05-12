import Link from "next/link";
import React from "react";
import "@/components/Footer/footer.scss";
import { AiOutlineCopyright } from "react-icons/ai";
import Whatsapp from "../../../public/icons/wp.svg";
import Instagram from "../../../public/icons/instagram.svg";
import Tiktok from "../../../public/icons/tiktok.svg";
import Youtube from "../../../public/icons/youtube.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Telegram from "../../../public/icons/telegram.svg";
import Masterkart from "../../../public/icons/masterkart.svg";
import Visa from "../../../public/icons/visa.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="xl-2 lg-2 md-3 sm-4">
              <div className="footerLinks">
                <span className="footerHeadLink">Əlaqə</span>
                <ul>
                  <li>
                    <Link className="contactNumber" href="#">
                      *0092
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl-2 lg-2 md-4 sm-4">
              <div className="footerLinks">
                <span className="footerHeadLink">Haqqımızda</span>
                <ul>
                  <li>
                    <Link href="/about">Şirkət Haqqında</Link>
                  </li>
                  <li>
                    <Link href="#">Karyera</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl-2 lg-2 md-4 sm-4">
              <div className="footerLinks">
                <span className="footerHeadLink">Məlumat</span>
                <ul>
                  <li>
                    <Link href="/campaign">Kampaniyalar</Link>
                  </li>
                  <li>
                    <Link href="#">Müstəri Kartı</Link>
                  </li>
                  <li>
                    <Link href="#">Brendlər</Link>
                  </li>
                  <li>
                    <Link href="#">Bloq və xəbərlər</Link>
                  </li>
                  <li>
                    <Link href="#">Zəmanət</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl-3 lg-3 md-4 sm-6">
              <div className="footerLinks">
                <span className="footerHeadLink">Müştərilər üçün</span>
                <ul>
                  <li>
                    <Link href="#">Çatdırılma ödəmə</Link>
                  </li>
                  <li>
                    <Link href="#">Hissə-hissə ödəniş şərtləri</Link>
                  </li>
                  <li>
                    <Link href="#">Aylıq ödənişin həyata keçirilməsi</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl-3 lg-3 md-4 sm-6">
              <div className="footerContact">
                <div className="footerLinks footerSocialLinks">
                  <span className="footerHeadLink">Bizimlə qal:</span>
                  <ul>
                    <li>
                      <Link href="#">
                        <button>
                          <Facebook className="footSocialIcon" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <button>
                          <Instagram className="footSocialIcon" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <button>
                          <Youtube className="footSocialIcon" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <button>
                          <Telegram className="footSocialIcon" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <button>
                          {/* <Whatsapp className="footSocialIcon" /> */}
                          <Image
                            src="/icons/wp.svg"
                            alt="wp"
                            width={800}
                            height={800}
                            className="footSocialIcon"
                          />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <button>
                          {/* <Tiktok className="footSocialIcon" /> */}
                          <Image
                            src="/icons/tiktok.svg"
                            alt="wp"
                            width={800}
                            height={800}
                            className="footSocialIcon"
                          />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footerPaymentIcons">
            <div className="footerPaymentIcon">
              <button>
                {/* <Visa className="visaIcon" /> */}
                <Image
                  src="/icons/visa.svg"
                  alt="wp"
                  width={800}
                  height={800}
                  className="visaIcon"
                />
              </button>
            </div>
            <div className="footerPaymentIcon">
              <button>
                <Masterkart className="masterkartIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerBottomItem">
          <span>
            <AiOutlineCopyright className="copyright" />
          </span>
          <Link href="#">Barkod 2025</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
