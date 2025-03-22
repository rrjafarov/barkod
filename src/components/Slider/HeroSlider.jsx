"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/react-splide/css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <section id="homePageBanner">
        <div className="row">
          <div className="xl-8 lg-8 md-8 sm-12">
            <div className="heroSlider">
              <Splide
                options={{
                  type: "loop",
                  perPage: 1,
                  autoplay: true,
                  pauseOnHover: false,
                  pauseOnFocus: false,
                  gap: "20px",
                  interval: 3000,
                  arrows: false,
                  pagination: true,
                }}
              >
                <SplideSlide>
                  <div className="heroSliderItem">
                    <Image
                      src="/images/homePageBanner.png"
                      alt="banner"
                      width={800}
                      height={500}
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="heroSliderItem">
                    <Image
                      src="/images/homePageBanner.png"
                      alt="banner"
                      width={800}
                      height={500}
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="heroSliderItem">
                    <Image
                      src="/images/homePageBanner.png"
                      alt="banner"
                      width={800}
                      height={500}
                    />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <div className="xl-4 lg-4 md-4 sm-12">
            <div className="bannerStaticCards">
              <div className="bannerStaticCard">
                <Image
                  src="/images/homePageBanner.png"
                  alt="banner"
                  width={200}
                  height={200}
                />
              </div>
              <div className="bannerStaticCard">
                <Image
                  src="/images/homePageBanner.png"
                  alt="banner"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
