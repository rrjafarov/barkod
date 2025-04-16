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


















"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ProductsDPFancybox = () => {
  const images = [
    { src: "/images/airfryImg.png", alt: "airfry", id: 1 },
    { src: "/images/iphone16pro.png", alt: "iphone 16 pro", id: 2 },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    // Fancybox-u başlatmaq
    Fancybox.bind("[data-fancybox]", {
      dragToClose: false,
      Image: { zoom: true },
      afterShow: (instance) => {
        // Fancybox açılanda öz thumbnails konteynerimizi overlay‑ə əlavə edirik və mövqeyi sol tərəf olur.
        let fancyboxContainer = document.querySelector(".fancybox__container");
        if (fancyboxContainer) {
          let thumbnails = document.querySelector(".thumbnails-container");
          if (thumbnails) {
            // Overlay daxilində göstərmək üçün position və margin düzəlişi
            thumbnails.style.display = "flex";
            thumbnails.style.position = "absolute";
            thumbnails.style.top = "50%";
            thumbnails.style.left = "20px"; // Sol tərəfdə, lazım olarsa bu dəyəri tənzimləyin
            thumbnails.style.transform = "translateY(-50%)";
            thumbnails.style.flexDirection = "column";
            thumbnails.style.zIndex = 9999;
          }
        }
      },
      afterClose: () => {
        // Fancybox bağlananda thumbnails-i gizlət
        let thumbnails = document.querySelector(".thumbnails-container");
        if (thumbnails) {
          thumbnails.style.display = "none";
        }
      },
    });
  }, []);

  return (
    <div className="productsDPFancybox" style={{ position: "relative" }}>
      {/* Əsas şəkil */}
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
          width={800}
          height={800}
        />
      </Link>

      {/* Fancybox açıldıqda overlay üzərində sol tərəfdə göstəriləcək thumbnails */}
      <div
        className="thumbnails-container"
        style={{
          display: "none", // Başlanğıcda gizlidir
          // Aşağıdakı inline stil Fancybox açılarkən afterShow callback‑ində dəyişdiriləcək
        }}
      >
        {images.map((image) => (
          <Link
            key={image.id}
            href={image.src}
            data-fancybox="gallery"
            data-src={image.src}
            className="thumbnail"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              style={{
                cursor: "pointer",
                borderRadius: "8px",
                marginBottom: "10px",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsDPFancybox;
