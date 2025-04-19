// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// const ProductsDPFancybox = () => {
//   const images = [
//     { src: "/images/airfryImg.png", alt: "airfry", id: 1 },
//     { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 2 },
//   ];

//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   useEffect(() => {
//     // Fancybox'ı başlatıyoruz
//     Fancybox.bind("[data-fancybox]", {
//       dragToClose: false,
//       Image: {
//         zoom: true,
//       },
//       // Fancybox açıldığında küçük resimlerin gösterilmesi için
//       afterShow: (instance) => {
//         const thumbnails = document.querySelector(".thumbnails-container");
//         if (thumbnails) {
//           thumbnails.style.display = "flex"; // Fancybox açıldığında küçük resimleri göster
//         }
//       },
//       // Fancybox kapandığında küçük resimleri gizleme
//       afterClose: () => {
//         const thumbnails = document.querySelector(".thumbnails-container");
//         if (thumbnails) {
//           thumbnails.style.display = "none"; // Fancybox kapandığında küçük resimleri gizle
//         }
//       },
//     });
//   }, []);

//   return (
//     <>
//       <div className="productsDPFancybox">
//         {/* Ana resim */}
//         <Link
//           href={selectedImage.src}
//           className="fancybox"
//           data-fancybox="gallery" // Aynı grup adı
//           data-src={selectedImage.src}
//           target="_blank"
//         >
//           <Image
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             width={800}
//             height={800}
//             className="fancyboxImage"
//           />
//         </Link>

//         {/* Küçük resimler (thumbnails) */}
//         <div
//           className="thumbnails-container"
//           style={{
//             display: "none", // Başlangıçta küçük resimler gizli
//             position: "absolute",
//             top: "50%",
//             left: "10px", // Sol tarafta olacak şekilde hizalandı
//             transform: "translateY(-50%)",
//             flexDirection: "column", // Dikey sıralama
//             gap: "10px",
//             zIndex: 10,
//           }}
//         >
//           {images.map((image) => (
//             <Link
//               key={image.id}
//               href={image.src}
//               className="thumbnail"
//               data-fancybox="gallery"
//               data-src={image.src}
//               onClick={() => setSelectedImage(image)} // Tıklanan resmi büyük yapmak için
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={150}
//                 height={150}
//                 className="thumbnail-image"
//                 style={{
//                   borderRadius: "8px",
//                   cursor: "pointer",
//                   transition: "transform 0.3s ease-in-out",
//                 }}
//               />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsDPFancybox;

// !

// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";
// // import "./ProductsDPFancybox.css";

// const ProductsDPFancybox = () => {
//   const images = [
//     { src: "/images/airfryImg.png", alt: "airfry", id: 1 },
//     { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 2 },
//   ];

//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   useEffect(() => {
//     Fancybox.bind("[data-fancybox]", {
//       dragToClose: false,
//       Image: { zoom: true },
//       afterShow: () => {
//         let fancyboxContainer = document.querySelector(".fancybox__container");
//         if (fancyboxContainer) {
//           let thumbnails = document.querySelector(".thumbnails-container");
//           if (thumbnails) {
//             thumbnails.style.display = "flex";
//           }
//         }
//       },
//       afterClose: () => {
//         let thumbnails = document.querySelector(".thumbnails-container");
//         if (thumbnails) {
//           thumbnails.style.display = "none";
//         }
//       },
//     });
//   }, []);

//   return (
//     <div className="productsDPFancybox">
//       {/* Solda thumbnail-lər */}
//       <div className="thumbnail-column">
//         {images.map((image) => (
//           <div
//             key={image.id}
//             className="thumbnail"
//             onClick={() => setSelectedImage(image)}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={80}
//               height={80}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Sağda əsas şəkil */}
//       <div className="main-image">
//         <Link
//           href={selectedImage.src}
//           data-fancybox="gallery"
//           data-src={selectedImage.src}
//           className="fancybox"
//           target="_blank"
//         >
//           <Image
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             width={600}
//             height={600}
//           />
//         </Link>
//       </div>

//       {/* Fancybox içində görünən overlay thumbnails */}
//       <div className="thumbnails-container">
//         {images.map((image) => (
//           <Link
//             key={image.id}
//             href={image.src}
//             data-fancybox="gallery"
//             data-src={image.src}
//             className="thumbnail"
//             onClick={() => setSelectedImage(image)}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={80}
//               height={80}
//             />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsDPFancybox;

// !

// "use client";
// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// const ProductsDPFancybox = () => {
//   const images = [
//     { src: "/images/airfryImg.png", alt: "airfry", id: 1 },
//     { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 2 },
//     { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 3 },
//     { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 4 },
//     { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 5 },
//     { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 6 },
//   ];

//   const [selectedImage, setSelectedImage] = useState(images[0]);
//   const thumbnailRef = useRef(null);

//   const scrollUp = () => {
//     if (thumbnailRef.current) {
//       thumbnailRef.current.scrollBy({ top: -100, behavior: "smooth" });
//     }
//   };

//   const scrollDown = () => {
//     if (thumbnailRef.current) {
//       thumbnailRef.current.scrollBy({ top: 100, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     Fancybox.bind("[data-fancybox]", {
//       dragToClose: false,
//       Image: { zoom: true },
//       afterShow: () => {
//         let thumbnails = document.querySelector(".thumbnails-container");
//         if (thumbnails) {
//           thumbnails.style.display = "flex";
//         }
//       },
//       afterClose: () => {
//         let thumbnails = document.querySelector(".thumbnails-container");
//         if (thumbnails) {
//           thumbnails.style.display = "none";
//         }
//       },
//     });
//   }, []);

//   return (
//     <div className="productsDPFancybox">
//       {/* Solda thumbnail-lər üçün oxlu slider */}
//       <div className="thumbnail-wrapper">
//         <button className="arrow up" onClick={scrollUp}>
//           ↑
//         </button>

//         <div className="thumbnail-column" ref={thumbnailRef}>
//           {images.map((image) => (
//             <div
//               key={image.id}
//               className="thumbnail"
//               onClick={() => setSelectedImage(image)}
//             >
//               <Image src={image.src} alt={image.alt} width={80} height={80} />
//             </div>
//           ))}
//         </div>

//         <button className="arrow down" onClick={scrollDown}>
//           ↓
//         </button>
//       </div>

//       {/* Sağda əsas şəkil */}
//       <div className="main-image">
//         <Link
//           href={selectedImage.src}
//           data-fancybox="gallery"
//           data-src={selectedImage.src}
//           className="fancybox"
//           target="_blank"
//         >
//           <Image
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             width={600}
//             height={600}
//           />
//         </Link>
//       </div>

//       {/* Fancybox içində görünən overlay thumbnails */}
//       <div className="thumbnails-container">
//         {images.map((image) => (
//           <Link
//             key={image.id}
//             href={image.src}
//             data-fancybox="gallery"
//             data-src={image.src}
//             className="thumbnail"
//             onClick={() => setSelectedImage(image)}
//           >
//             <Image src={image.src} alt={image.alt} width={80} height={80} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsDPFancybox;

// !  hihihii

"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ProductsDPFancybox = () => {
  const images = [
    { src: "/images/airfryImg.png", alt: "airfry", id: 1 },
    { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 2 },
    { src: "/images/airfryImg.png", alt: "airfry", id: 1 },
    { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 3 },
    { src: "/images/airfryImg.png", alt: "airfry", id: 1 },
    { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 4 },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const thumbnailRef = useRef(null);

  // ✅ ELAVE OLUNAN HISSE: cari aktiv index-i tapmaq üçün funksiya
  const getCurrentIndex = () => {
    return images.findIndex((img) => img.id === selectedImage.id);
  };

  const scrollUp = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollBy({ top: -100, behavior: "smooth" });
    }

    // ✅ ELAVE OLUNAN HISSE: əvvəlki şəkli seç
    const currentIndex = getCurrentIndex();
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const scrollDown = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollBy({ top: 100, behavior: "smooth" });
    }

    // ✅ ELAVE OLUNAN HISSE: növbəti şəkli seç
    const currentIndex = getCurrentIndex();
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      dragToClose: false,
      Image: { zoom: true },
      afterShow: () => {
        let thumbnails = document.querySelector(".thumbnails-container");
        if (thumbnails) {
          thumbnails.style.display = "flex";
        }
      },
      afterClose: () => {
        let thumbnails = document.querySelector(".thumbnails-container");
        if (thumbnails) {
          thumbnails.style.display = "none";
        }
      },
    });
  }, []);

  return (
    <div className="productsDPFancybox">
      {/* Solda thumbnail-lər üçün oxlu slider */}
      <div className="thumbnail-wrapper">
        <button className="arrow up" onClick={scrollUp}>
          <IoIosArrowUp />
        </button>

        <div className="thumbnail-column" ref={thumbnailRef}>
          {images.map((image) => (
            <div
              key={image.id}
              className="thumbnail"
              onClick={() => setSelectedImage(image)}
            >
              <Image src={image.src} alt={image.alt} width={80} height={80} />
            </div>
          ))}
        </div>

        <button className="arrow down" onClick={scrollDown}>
          <IoIosArrowDown />
        </button>
      </div>

      {/* Sağda əsas şəkil */}
      <div className="main-image">
        <Link
          href={selectedImage.src}
          data-fancybox="gallery"
          data-src={selectedImage.src}
          className="fancybox"
          target="_blank"
        >
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={600}
            height={600}
          />
        </Link>
      </div>

      {/* Fancybox içində görünən overlay thumbnails */}
      <div className="thumbnails-container">
        {images.map((image) => (
          <Link
            key={image.id}
            href={image.src}
            data-fancybox="gallery"
            data-src={image.src}
            className="thumbnail"
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image.src} alt={image.alt} width={80} height={80} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsDPFancybox;
