// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";

// const CategoryPage = ({ category, subCategories }) => {
//   return (
//     <>
//       <div className="container">
//         <div className="breadCrumb">
//           <Link href="/">
//             <span>Ana Səhifə</span>
//           </Link>
//           <strong>
//             <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//           </strong>
//           {/* <Link href="#"> */}
//           <span className="lastChildBread">{category.name}</span>
//           {/* </Link> */}
//         </div>
//       </div>

//       <section id="categoryPage">
//         <div className="container">
//           <div className="row">
//             {subCategories.map((subCategory) => (
//               <div className="xl-2 lg-2 md-3 sm-4" key={subCategory.id}>
//                 <Link className="categoryPageLinkData" href="/">
//                   <div className="categoryPageCard">
//                     <div className="categoryPageCardItem">
//                       <Image
//                         // src="/images/iphone16pro.png"
//                         src={subCategory.img_url}
//                         alt="productsBannerSlider1"
//                         width={500}
//                         height={500}
//                       />
//                       <span>{subCategory.name}</span>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CategoryPage;















// CategoryPage.js
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CategoryPage = ({ t, category, subCategories }) => {
  if (!category) return null;
  const parentSlug = category.slug;

  // Helper: parent ve child slug'ı slash ile birleştir
  const makeSlugParam = (...parts) => parts.filter(Boolean).join("/");

  return (
    <>
      <div className="container">
        <div className="breadCrumb">
          <Link href="/">
            <span>{t?.homebreadcrumbs || "Home page"}</span>
          </Link>
          <strong>
            <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
          </strong>
          <span className="lastChildBread">{category.name}</span>
        </div>
      </div>

      <section id="categoryPage">
        <div className="container">
          <div className="row">
            {Array.isArray(subCategories) &&
              subCategories.map((subCategory) => {
                // İkinci səviyyə üçün: yalnız subCategory.slug
                const href = `/products?cat_slug=${encodeURIComponent(subCategory.slug)}`;
                return (
                  <div className="xl-2 lg-2 md-3 sm-4" key={subCategory.id}>
                    <Link className="categoryPageLinkData" href={href}>
                      <div className="categoryPageCard">
                        <div className="categoryPageCardItem">
                          <Image
                            src={subCategory.img_url || subCategory.icon}
                            alt={subCategory.name}
                            width={500}
                            height={500}
                            unoptimized
                            style={{ objectFit: "contain" }}
                          />
                          <span>{subCategory.name}</span>
                        </div>
                      </div>
                    </Link>
                    {/*
                    Üçüncü səviyyə üçün (əgər istifadə etmək istəsən):
                    const deepHref = `/products?cat_slug=${encodeURIComponent(deep.slug)}`;
                    <Link href={deepHref}><span>{deep.name}</span></Link>
                    */}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;











// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// const CategoryPage = ({t, category, subCategories }) => {
//   if (!category) return null;
//   const parentSlug = category.slug;

//   // Helper: parent ve child slug'ı slash ile birleştir
//   const makeSlugParam = (...parts) => parts.filter(Boolean).join("/");

//   return (
//     <>
//       <div className="container">
//         <div className="breadCrumb">
//           <Link href="/">
//             <span>{t?.homebreadcrumbs || "Home page"}</span>
//           </Link>
//           <strong>
//             <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//           </strong>
//           <span className="lastChildBread">{category.name}</span>
//         </div>
//       </div>

//       <section id="categoryPage">
//         <div className="container">
//           <div className="row">
//             {Array.isArray(subCategories) &&
//               subCategories.map((subCategory) => {
//                 const combinedSlug = makeSlugParam(parentSlug, subCategory.slug);
//                 const href = `/products?cat_slug=${encodeURIComponent(combinedSlug)}`;
//                 return (
//                   <div className="xl-2 lg-2 md-3 sm-4" key={subCategory.id}>
//                     <Link className="categoryPageLinkData" href={href}>
//                       <div className="categoryPageCard">
//                         <div className="categoryPageCardItem">
//                           <Image
//                             src={subCategory.img_url || subCategory.icon}
//                             alt={subCategory.name}
//                             width={500}
//                             height={500}
//                             unoptimized
//                             style={{ objectFit: "contain" }}
//                           />
//                           <span>{subCategory.name}</span>
//                         </div>
//                       </div>
//                     </Link>
//                     {/* {Array.isArray(subCategory.sub_categories) &&
//                       subCategory.sub_categories.map((deep) => {
//                         const deepSlug = makeSlugParam(
//                           parentSlug,
//                           subCategory.slug,
//                           deep.slug
//                         );
//                         const deepHref = `/products?cat_slug=${encodeURIComponent(
//                           deepSlug
//                         )}`;
//                         return (
//                           <div
//                             key={deep.id}
//                             className="thirdLevelItem"
//                             style={{ marginLeft: "1rem", marginTop: "0.5rem" }}
//                           >
//                             <Link href={deepHref}>
//                               <span>{deep.name}</span>
//                             </Link>
//                           </div>
//                         );
//                       })} */}
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CategoryPage;
