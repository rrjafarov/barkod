
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";

const CampaignPage = ({ campaignPageDataSlider, t }) => {
  // end_date ilə indiki tarix arasındakı gün sayını hesablayan funksiya
  const calculateDaysRemaining = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} gün` : "bitdi";
  };

  return (
    <>
      <div className="container">
        <div className="breadCrumb breadCrumbsHideMobile">
          <Link href="/">
            <span>{t?.homebreadcrumbs || "home page"}</span>
          </Link>
          <strong>
            <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
          </strong>
          <Link href="#">
            <span className="lastChildBread">{t?.campaigns || "Kampaniyalar"}</span>
          </Link>
        </div>
      </div>
      <section id="campaignPageCard">
        <div className="container">
          <div className="row">
            {campaignPageDataSlider.map((campaign) => (
              <div className="xl-3 lg-3 md-6 sm-12" key={campaign.id}>
                <div className="campaignPageCard">
                  <div className="campaignPageCardItem">
                    <div className="campaignPageCardImage">
                      <Image
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
                    {/* <div className="campaignPageCardBottomText">
                      <span>{t?.lastday || "Son"}</span>
                      <span>{calculateDaysRemaining(campaign.end_date)}</span>
                    </div> */}
                    <div className="campaignPageCardDetailButton">
                      <Link href={`/campaign/${campaign.slug}`}>
                        <button>{t?.learnmore || "Learn More"}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CampaignPage;
