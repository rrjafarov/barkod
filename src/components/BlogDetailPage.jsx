
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";
import WP from "@/../public/icons/wpBarkod.svg";

const CompaignDetailPage = ({ campaign, t }) => {
  const calculateDaysRemaining = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} GÜN` : "Bitdi";
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${campaign.slug}`;

  return (
    <>
      <div className="container">
        <div className="breadCrumb breadCrumbsHideMobile">
          <Link href="/"><span>{t?.homebreadcrumbs || "Ana səhifə" }</span></Link>
          <strong><MdKeyboardDoubleArrowRight className="breadCrumpIcon" /></strong>
          <Link href="/campaign"><span>{t?.blog || "blog"}</span></Link>
          <strong><MdKeyboardArrowRight className="breadCrumpIcon" /></strong>
          <Link href="#"><span className="lastChildBread">{campaign.title}</span></Link>
        </div>
      </div>

      <section id="campaignDetailPage">
        <div className="container">
          <div className="campaignDetailPage">
            <div className="campaignDetailPageTitle">
              <span>{campaign.title}</span>
            </div>
            <div className="row">
              <div className="xl-12 lg-12 md-12 sm-12">
                <div className="campaignDetailPageLeft">
                  <Image
                    src={campaign.banner}
                    alt="campaign"
                    width={1500}
                    height={1500}
                  />
                </div>
              </div>
            </div>
            <div className="campaignDetailPageContent">
              <span>{campaign.title}</span>
              <div dangerouslySetInnerHTML={{ __html: campaign.content }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompaignDetailPage;
