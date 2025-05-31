import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";

const CampaignPage = ({ campaignPageDataSlider }) => {
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
          <Link href="#">
            <span className="lastChildBread">Kampaniyalar</span>
          </Link>
        </div>
      </div>
      <section id="campaignPageCard">
        <div className="container">
          <div className="row">
            {campaignPageDataSlider.map((campaign) => (
              <div className="xl-3 lg-3 md-6 sm-12" key={campaign.id}>
                <Link className="blockCardLink" href="#">
                  <div className="campaignPageCard">
                    <div className="campaignPageCardItem">
                      <div className="campaignPageCardImage">
                        <Image
                          // src="/images/campaignImage.png"
                          src={campaign.img_url}
                          alt="campaign"
                          width={800}
                          height={800}
                        />
                      </div>
                      <div className="campaignPageCardTitle">
                        <span>{campaign.title}</span>
                      </div>
                    </div>
                    <div className="circleLine">
                      <span className="leftCircle"></span>
                      <span className="rightCircle"></span>
                    </div>
                    <div className="campaignPageCardBottom">
                      <div className="campaignPageCardBottomText">
                        <span>Son</span>
                        <span>99 gün</span>
                      </div>
                      <div className="campaignPageCardDetailButton">
                        <Link href={`/campaign/${campaign.slug}`}>
                          <button>Ətraflı</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CampaignPage;
