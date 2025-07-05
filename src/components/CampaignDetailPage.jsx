import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";

const CompaignDetailPage = ({campaign}) => {
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
          <Link href="/campaign">
            <span>Kampaniyalar</span>
          </Link>
          <strong>
            <MdKeyboardArrowRight className="breadCrumpIcon" />
          </strong>
          <Link href="#">
            <span className="lastChildBread" >Bahar kampaniyası</span>
          </Link>
        </div>
      </div>

      <section id="campaignDetailPage">
        <div className="container">
          <div className="campaignDetailPage">
            <div className="campaignDetailPageTitle">
              <span>{campaign.title}</span>
            </div>
            <div className="row">
              <div className="xl-9 lg-9 md-6 sm-12">
                <div className="campaignDetailPageLeft">
                  <Image
                    // src="/images/campaignDPImg.png"
                    src={campaign.img_url}
                    alt="campaign"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
              <div className="xl-3 lg-3 md-6 sm-12">
                <div className="campaignDetailPageRight">
                  <Link className="blockDPCardLink" href="#">
                    <div className="campaignDetailPageCard">
                      <div className="campaignDetailPageCardItem">
                        <div className="campaignDetailPageCardTopText">
                          <span>
                            Tarixinə qədər etibarlıdır{" "}
                            <strong>30.04.2025</strong>
                          </span>
                        </div>
                        <h6>Promosyonun sonuna qədər</h6>
                        <div className="campaignDetailPageCardTimeout">
                          <span>3 GÜN</span>
                        </div>
                      </div>
                      <div className="circleLine1">
                        <span className="leftCircle1"></span>
                        <span className="rightCircle1"></span>
                      </div>
                      <div className="campaignDetailPageCardBottom">
                        <span>Fəaliyyəti Paylaşın</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="campaignDetailPageContent">
              <span>{campaign.title}</span>
            <div dangerouslySetInnerHTML={{ __html: campaign.content }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompaignDetailPage;
