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

const Footer = ({ t, settingData, supportData }) => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="xl-2 lg-2 md-3 sm-4">
              <div className="footerLinks">
                <span className="footerHeadLink">
                  {t?.contact || "Contact"}
                </span>
                <ul>
                  <li>
                    <Link
                      className="contactNumber"
                      href={`tel:${settingData.tel_short}`}
                    >
                      {settingData.tel_short}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl-2 lg-2 md-4 sm-4">
              <div className="footerLinks">
                <span className="footerHeadLink">{t?.about || "About"}</span>
                <ul>
                  <li>
                    <Link href="/about">
                      {t?.aboutcompany || "About Company"}
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#">Karyera</Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="xl-2 lg-2 md-4 sm-4">
              <div className="footerLinks">
                <span className="footerHeadLink">
                  {t?.information || "Melumat"}
                </span>
                <ul>
                  <li>
                    <Link href="/campaign">{t?.campaigns || "Campaigns"}</Link>
                  </li>
                  <li>
                    <Link href="/stores">{t?.stores || "Stores"}</Link>
                  </li>
                  {/* <li>
                    <Link href="#">Brendlər</Link>
                  </li> */}
                  <li>
                    <Link href="/blogs">{t?.blognews || "Blog"}</Link>
                  </li>
                  <li>
                    <Link href="/corporate-sales">
                      {t?.corporatesale || "Sales"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="xl-3 lg-3 md-4 sm-6">
              <div className="footerLinks">
                <span className="footerHeadLink">
                  {t?.forcustomers || "for customers"}
                </span>
                <ul>
                  {/* {supportData
                    ?.filter((item) => item.show_in_header === 0)
                    .map((supportItem) => (
                      <li key={supportItem.id}>
                        <Link href={`/support/${supportItem.slug}`}>
                          {supportItem.title}
                        </Link>
                      </li>
                    ))} */}

                  {supportData
                    ?.filter(
                      (item) => item.show_in_header === 0 && item.id !== 34 // id 34 olan gəlməsin
                    )
                    .map((supportItem) => (
                      <li key={supportItem.id}>
                        <Link href={`/support/${supportItem.slug}`}>
                          {supportItem.title}
                        </Link>
                      </li>
                    ))}

                  {/* <li>
                    <Link href="/security">
                      {t?.warranty || "Zəmanət"}
                    </Link>
                  </li> */}
                  
                </ul>
              </div>
            </div>

            <div className="xl-3 lg-3 md-4 sm-6">
              <div className="footerContact">
                <div className="footerLinks footerSocialLinks">
                  <span className="footerHeadLink">
                    {t?.staywithus || "Stay  with us"}
                  </span>
                  <ul>
                    <li>
                      <Link href={settingData?.facebook || "#"} target="_blank">
                        <button>
                          <Facebook className="footSocialIcon" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={settingData.instagram || "#"} target="_blank">
                        <button>
                          <Instagram className="footSocialIcon" />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={settingData.youtube || "#"} target="_blank">
                        <button>
                          <Youtube className="footSocialIcon" />
                        </button>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="#">
                        <button>
                          <Telegram className="footSocialIcon" />
                        </button>
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href={`https://wa.me/${settingData.tel_whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
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
                      <Link href={settingData.tiktok || "#"} target="_blank">
                        <button>
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
          <strong>Barkod 2025</strong>
        </div>
      </div>
    </>
  );
};

export default Footer;
