// "use client";
// import React from "react";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import NewWishList from "../../public/icons/newWishlist.svg";
// import { IoCloseSharp } from "react-icons/io5";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { Switch } from "antd";

// const ComparePage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

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
//             <span className="lastChildBread" >Müqaisə</span>
//         </div>
//       </div>
//       <section id="comparePageSection">
//         <div className="container">
//           {showModal && (
//             <div className="modal-overlay" onClick={handleOverlayClick}>
//               <div className="modal">
//                 <button className="close-btns" onClick={closeModal}>
//                   X
//                 </button>
//                 <span>Bir kliklə al</span>
//                 <div></div>
//                 <div className="numberModal">
//                   <label htmlFor="phone">Nömrə: +994</label>
//                   <input type="text" id="phone" name="phone" />
//                 </div>
//                 <button className="open-btn">Bir kliklə al</button>
//               </div>
//             </div>
//           )}
//           <div className="row">
//             <div className="xl-3 lg-3 md-3 sm-12">
//               <div className="comparePageLeft">
//                 {/* <span className="seeCompare">Göstər</span> */}
//                 <div className="compareAllParametrs">
//                   <span>Telefonlar</span>
//                   <span>Hamısını silin</span>
//                 </div>
//               </div>
//               <div className="comparePageLeftAttribute">
//                 <span className="attr">Xüsusiyyətlər</span>
//                 <ul>
//                   <li>
//                     <span>Marka</span>
//                   </li>
//                   <li>
//                     <span>Dioqonal</span>
//                   </li>
//                   <li>
//                     <span>HDR</span>
//                   </li>
//                   <li>
//                     <span>Ekran Tezliyi</span>
//                   </li>
//                   <li>
//                     <span>Kamera</span>
//                   </li>
//                   <li>
//                     <span>Prosessor</span>
//                   </li>
//                   <li>
//                     <span>Ekran Tezliyi</span>
//                   </li>
//                   <li>
//                     <span>Kamera</span>
//                   </li>
//                   <li>
//                     <span>Prosessor</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="xl-9 lg-9 md-9 sm-12">
//               <div className="comparePageRight">
//                 <div className="row">
//                   <div className="xl-4 lg-4 md-6 sm-6">
//                     <div className="secondHomePageProductsCard">
//                       <div className="secondHomePageProductsCardDiv AAA">
//                         <div className="compareCloseIcon">
//                           <IoCloseSharp id="compareCloseIcon" />
//                         </div>
//                         <Link href="/products/id" className="blockCardLink">
//                           <div className="secondHomePageProductsCardImage">
//                             <Image
//                               src="/images/iphone16pro.png"
//                               alt="sony"
//                               width={200}
//                               height={200}
//                             />
//                           </div>
//                         </Link>
//                         <div className="secondHomePageProductsCardContent">
//                           <p>iPhone 16 Pro Max 256 GB Black Titanium</p>
//                           <div className="discount">
//                             <span>
//                               -350 <TbCurrencyManat />
//                             </span>
//                           </div>
//                           <div className="cardBottomContent">
//                             <div className="price">
//                               <span className="oldPrice">
//                                 3000,00
//                                 <TbCurrencyManat />
//                               </span>
//                               <span className="newPrice">
//                                 2400,00
//                                 <TbCurrencyManat />
//                               </span>
//                             </div>

//                             <div className="wishList">
//                               <button>
//                                 <NewScale className="newScalePR" />
//                               </button>
//                               <button>
//                                 <NewWishList className="newWishlistPR" />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="addToCartClick">
//                         <div className="addToCartClickItem">
//                           <button className="cartBtn">Səbətə at</button>
//                           <button onClick={openModal} className="clickBtn">
//                             Bir Klikle Al
//                           </button>
//                         </div>
//                       </div>
//                     </div>


//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ComparePage;












// components/ComparePage.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import { TbCurrencyManat } from 'react-icons/tb';
import NewScale from '../../public/icons/newScale.svg';
import NewWishList from '../../public/icons/newWishlist.svg';
import {
  useGetCompareListQuery,
  useRemoveFromCompareMutation,
  useClearCompareMutation,
} from '@/redux/compareService';

export default function ComparePage({ t }) {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, isError, error, refetch } = useGetCompareListQuery();
  const [removeFromCompare, { isLoading: removing }] = useRemoveFromCompareMutation();
  const [clearCompare, { isLoading: clearing }] = useClearCompareMutation();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') closeModal();
  };

  const handleRemoveFromCompare = async (productId) => {
    try {
      await removeFromCompare(productId).unwrap();
      // Əlavə refetch (əgər cache problem varsa)
      // refetch();
    } catch (error) {
      console.error("Remove from compare error:", error);
    }
  };

  const handleClearCompare = async () => {
    try {
      await clearCompare().unwrap();
      // Əlavə refetch (əgər cache problem varsa)
      // refetch();
    } catch (error) {
      console.error("Clear compare error:", error);
    }
  };

  if (isLoading) return <p>Yükleniyor…</p>;
  if (isError) {
    console.error("Müqayisə siyahısı gətirilərkən xəta baş verdi:", error);
    return <p>Bir şeyler ters getti. <button onClick={refetch}>Yenidən yüklə</button></p>;
  }

  // Backend-dən gələn data-nın strukturuna uyğun olaraq məhsulları və kateqoriyaları çıxarırıq
  const products = data?.compare || [];
  const categories = data?.categories || [];

  return (
    <>
      <div className="container">
        <div className="breadCrumb">
          <Link href="/"><span>{t.homePageLabel || 'Ana Sayfa'}</span></Link>
          <strong><MdKeyboardDoubleArrowRight className="breadCrumpIcon" /></strong>
          <span className="lastChildBread">{t.compareLabel || 'Müqayisə'}</span>
        </div>
      </div>

      <section id="comparePageSection">
        <div className="container">

          {showModal && (
            <div className="modal-overlay" onClick={handleOverlayClick}>
              <div className="modal">
                <button className="close-btns" onClick={closeModal}>X</button>
                <span>Bir kliklə al</span>
                <div className="numberModal">
                  <label htmlFor="phone">Nömrə: +994</label>
                  <input type="text" id="phone" name="phone" />
                </div>
                <button className="open-btn">Bir kliklə al</button>
              </div>
            </div>
          )}

          <div className="row">
            <div className="xl-3 lg-3 md-3 sm-12">
              <div className="comparePageLeft">
                <div className="compareAllParametrs">
                  <span>{categories.length > 0 ? categories[0].name : (t.phonesLabel || 'Telefonlar')}</span>
                  <span
                    style={{ cursor: 'pointer', color: clearing ? '#aaa' : '#000' }}
                    onClick={handleClearCompare}
                    disabled={clearing}
                  >
                    {clearing ? 'Temizleniyor…' : (t.clearAllLabel || 'Hamısını silin')}
                  </span>
                </div>
              </div>
              <div className="comparePageLeftAttribute">
                <span className="attr">{t.featuresLabel || 'Xüsusiyyətlər'}</span>
                <ul>
                  {['Marka','Diaqonal','HDR','Ekran Tezliyi','Kamera','Prosessor']
                    .map((feat) => <li key={feat}><span>{feat}</span></li>)
                  }
                </ul>
              </div>
            </div>

            <div className="xl-9 lg-9 md-9 sm-12">
              <div className="comparePageRight">
                <div className="row">
                  {products.length === 0 && (
                    <p>{t.noProductsLabel || 'Karşılaştırılacak ürün yok.'}</p>
                  )}

                  {products.map((p) => (
                    <div key={p.id} className="xl-4 lg-4 md-6 sm-6">
                      <div className="secondHomePageProductsCard">
                        <div className="secondHomePageProductsCardDiv">
                          <div
                            className="compareCloseIcon"
                            onClick={() => handleRemoveFromCompare(p.id)}
                            style={{ cursor: 'pointer', opacity: removing ? 0.5 : 1 }}
                          >
                            <IoCloseSharp />
                          </div>
                          <Link href={`/products/${p.slug || p.id}`} className="blockCardLink">
                            <div className="secondHomePageProductsCardImage">
                              <Image
                                src={p.image || p.photo || '/images/defaultImage.png'}
                                alt={p.name}
                                width={200}
                                height={200}
                              />
                            </div>
                          </Link>
                          <div className="secondHomePageProductsCardContent">
                            <p>{p.name}</p>
                            {p.disc_percent && (
                              <div className="discount">
                                <span>{p.disc_percent}%</span>
                              </div>
                            )}
                            <div className="cardBottomContent">
                              <div className="price">
                                {p.old_price && p.old_price !== p.price && (
                                  <span className="oldPrice">
                                    {p.old_price} <TbCurrencyManat />
                                  </span>
                                )}
                                <span className="newPrice">
                                  {p.price} <TbCurrencyManat />
                                </span>
                              </div>
                              <div className="wishList">
                                <button><NewScale /></button>
                                <button><NewWishList /></button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="addToCartClick">
                          <div className="addToCartClickItem">
                            <button className="cartBtn">{t.addToCartLabel || 'Səbətə at'}</button>
                            <button onClick={openModal} className="clickBtn">
                              {t.oneClickBuyLabel || 'Bir Klikle Al'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}













// ! post isleyir get islemir
// // components/ComparePage.jsx
// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import {
//   MdKeyboardDoubleArrowRight,
// } from 'react-icons/md';
// import { IoCloseSharp } from 'react-icons/io5';
// import { TbCurrencyManat } from 'react-icons/tb';
// import NewScale from '../../public/icons/newScale.svg';
// import NewWishList from '../../public/icons/newWishlist.svg';
// import {
//   useGetCompareListQuery,
//   useRemoveFromCompareMutation,
//   useClearCompareMutation,
// } from '@/redux/compareService';

// export default function ComparePage({ t }) {
//   const [showModal, setShowModal] = useState(false);
//   const { data, isLoading, isError } = useGetCompareListQuery();
//   const [removeFromCompare, { isLoading: removing }] = useRemoveFromCompareMutation();
//   const [clearCompare, { isLoading: clearing }] = useClearCompareMutation();

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === 'modal-overlay') closeModal();
//   };

//   if (isLoading) return <p>Yükleniyor…</p>;
//   if (isError) {
//     // Xəta detallarını konsola yazdır, daha yaxşı debug üçün
//     console.error("Müqayisə siyahısı gətirilərkən xəta baş verdi:", isError);
//     return <p>Bir şeyler ters gitti.</p>;
//   }

//   // Backend-dən gələn data-nın strukturuna uyğun olaraq məhsulları və kateqoriyaları çıxarırıq
//   // data obyektinin mövcudluğunu yoxlayırıq.
//   const products = data?.compare || [];
//   const categories = data?.categories || []; // Yeni: Kateqoriyaları da çıxarırıq

//   return (
//     <>
//       <div className="container">
//         <div className="breadCrumb">
//           <Link href="/"><span>{t.homePageLabel || 'Ana Sayfa'}</span></Link>
//           <strong><MdKeyboardDoubleArrowRight className="breadCrumpIcon" /></strong>
//           <span className="lastChildBread">{t.compareLabel || 'Müqayisə'}</span>
//         </div>
//       </div>

//       <section id="comparePageSection">
//         <div className="container">

//           {showModal && (
//             <div className="modal-overlay" onClick={handleOverlayClick}>
//               <div className="modal">
//                 <button className="close-btns" onClick={closeModal}>X</button>
//                 <span>Bir kliklə al</span>
//                 <div className="numberModal">
//                   <label htmlFor="phone">Nömrə: +994</label>
//                   <input type="text" id="phone" name="phone" />
//                 </div>
//                 <button className="open-btn">Bir kliklə al</button>
//               </div>
//             </div>
//           )}

//           <div className="row">
//             <div className="xl-3 lg-3 md-3 sm-12">
//               <div className="comparePageLeft">
//                 <div className="compareAllParametrs">
//                   {/* Kateqoriyalar massivindən ilk kateqoriyanın adını göstərə bilərik,
//                       yaxud API-nin göndərdiyi bütün kateqoriyaları siyahılaya bilərik */}
//                   <span>{categories.length > 0 ? categories[0].name : (t.phonesLabel || 'Telefonlar')}</span>
//                   <span
//                     style={{ cursor: 'pointer', color: clearing ? '#aaa' : '#000' }}
//                     onClick={() => clearCompare()}
//                     disabled={clearing}
//                   >
//                     {clearing ? 'Temizleniyor…' : (t.clearAllLabel || 'Hamısını silin')}
//                   </span>
//                 </div>
//               </div>
//               <div className="comparePageLeftAttribute">
//                 <span className="attr">{t.featuresLabel || 'Xüsusiyyətlər'}</span>
//                 <ul>
//                   {/* Dinamik özellik listesi: Məhsulların xüsusiyyətlərini göstərmək üçün.
//                       Bu hissənin dəqiqliyi üçün `products` içindəki məhsulların hansı atributlara sahib olduğunu bilmək lazımdır.
//                       Hələ ki sabit qalır, lakin məhsul xüsusiyyətləri ilə müqayisə üçün dinamik edilə bilər. */}
//                   {['Marka','Diaqonal','HDR','Ekran Tezliyi','Kamera','Prosessor']
//                     .map((feat) => <li key={feat}><span>{feat}</span></li>)
//                   }
//                 </ul>
//               </div>
//             </div>

//             <div className="xl-9 lg-9 md-9 sm-12">
//               <div className="comparePageRight">
//                 <div className="row">
//                   {products.length === 0 && (
//                     <p>{t.noProductsLabel || 'Karşılaştırılacak ürün yok.'}</p>
//                   )}

//                   {products.map((p) => (
//                     <div key={p.id} className="xl-4 lg-4 md-6 sm-6">
//                       <div className="secondHomePageProductsCard">
//                         <div className="secondHomePageProductsCardDiv">
//                           <div
//                             className="compareCloseIcon"
//                             onClick={() => removeFromCompare(p.id)}
//                             style={{ cursor: 'pointer', opacity: removing ? 0.5 : 1 }}
//                           >
//                             <IoCloseSharp />
//                           </div>
//                           <Link href={`/products/${p.id}`} className="blockCardLink">
//                             <div className="secondHomePageProductsCardImage">
//                               <Image
//                                 src={p.photo} // Məhsul obyektində photo xassəsinin olduğuna əmin olun
//                                 alt={p.name}
//                                 width={200}
//                                 height={200}
//                               />
//                             </div>
//                           </Link>
//                           <div className="secondHomePageProductsCardContent">
//                             <p>{p.name}</p>
//                             {p.discount && ( // discount xassəsi varsa
//                               <div className="discount">
//                                 <span>
//                                   -{p.discount} <TbCurrencyManat />
//                                 </span>
//                               </div>
//                             )}
//                             <div className="cardBottomContent">
//                               <div className="price">
//                                 {p.oldPrice && ( // oldPrice xassəsi varsa
//                                   <span className="oldPrice">
//                                     {p.oldPrice} <TbCurrencyManat />
//                                   </span>
//                                 )}
//                                 <span className="newPrice">
//                                   {p.newPrice} <TbCurrencyManat /> // newPrice xassəsi
//                                 </span>
//                               </div>
//                               <div className="wishList">
//                                 <button><NewScale /></button> {/* Buradakı scale ikonu sadəcə vizualdır */}
//                                 <button><NewWishList /></button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="addToCartClick">
//                           <div className="addToCartClickItem">
//                             <button className="cartBtn">{t.addToCartLabel || 'Səbətə at'}</button>
//                             <button onClick={openModal} className="clickBtn">
//                               {t.oneClickBuyLabel || 'Bir Klikle Al'}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// ! post isleyir get islemir
