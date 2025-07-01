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




















"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProductsDPFancybox = ({ productDetail }) => {
  // productDetail.images üzerinden dinamik olarak images dizisini oluşturuyoruz.
  // Önce boş dizi tanımla; effect içinde state'e set edeceğiz.
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const thumbnailRef = useRef(null);

  // productDetail.images değiştiğinde images state'ini güncelle ve selectedImage'i de ilk öğeye ayarla
  useEffect(() => {
    if (productDetail && Array.isArray(productDetail.images)) {
      const mapped = productDetail.images.slice().reverse().map((imgObj) => ({
        id: imgObj.id,
        src: imgObj.img_url,
        // alt için ürün adı veya başka bir alan kullanılabilir
        alt: productDetail.name || "",
      }));
      setImages(mapped);

      // Eğer selectedImage daha önce yoksa veya productDetail değiştiyse, ilkini seç:
      if (mapped.length > 0) {
        setSelectedImage(mapped[0]);
      } else {
        setSelectedImage(null);
      }
    } else {
      // productDetail.images yoksa boş dizi ve selectedImage'i temizle
      setImages([]);
      setSelectedImage(null);
    }
  }, [productDetail]);

  const getCurrentIndex = () => {
    if (!selectedImage) return -1;
    return images.findIndex((img) => img.id === selectedImage.id);
  };

  const scrollUp = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollBy({ top: -100, behavior: "smooth" });
    }
    const currentIndex = getCurrentIndex();
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const scrollDown = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollBy({ top: 100, behavior: "smooth" });
    }
    const currentIndex = getCurrentIndex();
    if (currentIndex < images.length - 1 && currentIndex !== -1) {
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
      <div className="thumbnail-wrapper">
        <button className="arrow up" onClick={scrollUp} disabled={getCurrentIndex() <= 0}>
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

        <button
          className="arrow down"
          onClick={scrollDown}
          disabled={getCurrentIndex() === -1 || getCurrentIndex() >= images.length - 1}
        >
          <IoIosArrowDown />
        </button>
      </div>

      <div className="main-image">
        {selectedImage && (
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
              width={1000}
              height={1000}
            />
          </Link>
        )}
      </div>

      {/* Fancybox içindeki overlay thumbnails */}
      <div className="thumbnails-container" style={{ display: "none" }}>
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



























