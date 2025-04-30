import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";

const CompaignDetailPage = () => {
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
          <Link href="campaign">
            <span>Kampaniyalar</span>
          </Link>
          <strong>
            <MdKeyboardArrowRight className="breadCrumpIcon" />
          </strong>
          <Link href="#">
            <span>Bahar kampaniyası</span>
          </Link>
        </div>
      </div>
      <section id="campaignDetailPage">
        <div className="container">
          <div className="campaignDetailPage">
            <div className="campaignDetailPageTitle">
              <span>Кешбек 5% при оплаті карткою monobank</span>
            </div>
            <div className="row">
              <div className="xl-9 lg-9 md-9 sm-9">
                <div className="campaignDetailPageLeft">
                  <Image
                    src="/images/campaignDPImg.png"
                    alt="campaign"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
              <div className="xl-3 lg-3 md-3 sm-3">
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
              <span>Bahar Kampaniyası</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                dolorum corrupti explicabo ex, hic excepturi expedita vel eius,
                ducimus reiciendis est reprehenderit qui maiores unde
                accusantium iste ipsam odio repellendus magni amet omnis nobis
                fugiat! Tempore officiis nesciunt assumenda perferendis id
                mollitia ratione earum nisi ab molestiae. Suscipit odio alias
                harum porro, aperiam aliquid minima dolore sapiente!
                Voluptatibus sed nemo quaerat, rerum, laboriosam hic sequi
                veritatis praesentium vel eligendi et facere iste? Molestiae
                dolores ratione minus facilis exercitationem officia deleniti
                soluta doloremque commodi. Excepturi laudantium nulla error
                deserunt minima, ullam aut fuga velit ipsam at expedita earum,
                delectus neque sint unde officiis eius ipsum non! Sed
                praesentium nesciunt cumque esse libero doloremque? Aut, quae
                numquam. Accusamus delectus porro, corrupti facere possimus
                fugit incidunt quos cum omnis, ea minima eum illo error totam
                sapiente tempora corporis adipisci? Dignissimos facere
                repudiandae numquam cum nobis, incidunt quos. Corrupti ea
                quaerat ab beatae necessitatibus aperiam. Dolore cum nam sint
                repellendus unde, ipsam, optio totam delectus obcaecati,
                voluptas quos excepturi officiis ut veritatis maiores! Eaque
                maxime nam at voluptas tenetur, optio earum. Repellendus quos
                architecto facilis unde magnam quam deleniti quasi modi quae,
                debitis totam sequi accusantium officiis reiciendis, maxime vel
                in veniam. Consequuntur, iure cupiditate maiores consequatur
                alias impedit, vel dolorum harum ut ipsum, aperiam sequi.
                Quaerat, ducimus? Et similique dolorem quos ipsa deserunt nulla
                eos velit aliquid neque quod vero necessitatibus, consectetur
                rerum facere cum praesentium obcaecati! Praesentium quis maiores
                harum esse dignissimos, voluptatem rem, sequi sapiente id labore
                laboriosam architecto saepe pariatur ipsum ducimus possimus
                dolor reprehenderit ut asperiores culpa dolorum laborum
                accusantium. Ipsa, eius eaque eum dolor maxime aspernatur ipsum
                dignissimos dolorem repellat animi aut. Placeat aliquid ducimus
                minima explicabo nam blanditiis atque, quidem alias tempora
                quod, possimus, quam dolore quas illo perferendis libero vel
                facere. Minima id possimus adipisci exercitationem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompaignDetailPage;
