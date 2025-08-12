import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";

const BlogPage = ({blogResponseData, t }) => {
  return (
    <div>
      <div className="container">
        <div className="breadCrumb breadCrumbsHideMobile">
          <Link href="/">
            <span>{t?.homebreadcrumbs || "home page"}</span>
          </Link>
          <strong>
            <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
          </strong>
          <Link href="#">
            <span className="lastChildBread">{t?.blogs || "Bloglar"}</span>
          </Link>
        </div>
      </div>
      <section id="campaignPageCard">
        <div className="container">
          <div className="row">
            {blogResponseData.map((blog) => (
              <div className="xl-3 lg-3 md-6 sm-12" key={blog.id}>
                <div className="campaignPageCard">
                  <div className="campaignPageCardItem">
                    <div className="campaignPageCardImage">
                      <Image
                        src={blog.img_url}
                        alt="campaign"
                        width={800}
                        height={800}
                      />
                    </div>
                    <div className="campaignPageCardTitle">
                      <span>{blog.title}</span>
                    </div>
                  </div>
                  <div className="circleLine">
                    <span className="leftCircle"></span>
                    <span className="rightCircle"></span>
                  </div>
                  <div className="campaignPageCardBottom">
                    <div className="campaignPageCardDetailButton">
                      <Link href={`/blogs/${blog.slug}`}>
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
    </div>
  );
};

export default BlogPage;
