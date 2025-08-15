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
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import { TbCurrencyManat } from 'react-icons/tb';
import NewScale from '../../public/icons/newScale.svg';
import NewWishList from '../../public/icons/newWishlist.svg';
import { useCompare } from '@/hooks/useCompare';

export default function ComparePage({ t }) {
  const [showModal, setShowModal] = useState(false);
  const [removingProducts, setRemovingProducts] = useState(new Set());

  const {
    compareData,
    isLoading,
    error,
    removeFromCompare,
    clearCompare,
    compareCount,
    refresh
  } = useCompare();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') closeModal();
  };

  const handleRemoveFromCompare = async (productId) => {
    if (removingProducts.has(productId)) return;

    setRemovingProducts(prev => new Set(prev).add(productId));
    
    try {
      const result = await removeFromCompare(productId);
      if (!result.success) {
        console.error("Remove from compare error:", result.error);
      }
    } catch (error) {
      console.error("Remove from compare error:", error);
    } finally {
      setRemovingProducts(prev => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
    }
  };

  const [isClearing, setIsClearing] = useState(false);
  const handleClearCompare = async () => {
    if (isClearing) return;
    
    setIsClearing(true);
    try {
      const result = await clearCompare();
      if (!result.success) {
        console.error("Clear compare error:", result.error);
      }
    } catch (error) {
      console.error("Clear compare error:", error);
    } finally {
      setIsClearing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container">
        <div className="compare-loading">
          <div className="spinner"></div>
          <p>Müqayisə məlumatları yüklənir...</p>
        </div>
        <style jsx>{`
          .compare-loading {
            text-align: center;
            padding: 4rem 0;
          }
          .spinner {
            margin: 0 auto 1rem;
            width: 40px;
            height: 40px;
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-top-color: #ec1f27;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="compare-error">
          <p>Müqayisə məlumatları yüklənərkən xəta baş verdi: {error}</p>
          <button onClick={refresh} className="retry-btn">
            Yenidən cəhd et
          </button>
        </div>
        <style jsx>{`
          .compare-error {
            text-align: center;
            padding: 4rem 0;
          }
          .retry-btn {
            background: #ec1f27;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 1rem;
          }
          .retry-btn:hover {
            background: #d01a22;
          }
        `}</style>
      </div>
    );
  }

  const products = compareData?.products || [];
  const categories = compareData?.categories || [];
  const primaryCategory = categories[0];

  return (
    <>
      <div className="container">
        <div className="breadCrumb breadCrumbsHideMobile">
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
                <span>{t?.oneclickpay || 'Bir kliklə al'}</span>
                <div className="numberModal">
                  <label htmlFor="phone">{t?.num || 'Nömrə'}: +994</label>
                  <input type="text" id="phone" name="phone" />
                </div>
                <button className="open-btn">{t?.oneclickpay || 'Bir kliklə al'}</button>
              </div>
            </div>
          )}

          <div className="row">
            <div className="xl-3 lg-3 md-3 sm-12">
              <div className="comparePageLeft">
                <div className="compareAllParametrs">
                  <span>
                    {primaryCategory?.name || (t.phonesLabel || 'Məhsullar')} 
                    {compareCount > 0 && ` (${compareCount})`}
                  </span>
                  <span
                    style={{ 
                      cursor: isClearing ? 'not-allowed' : 'pointer', 
                      color: isClearing ? '#aaa' : '#ec1f27',
                      opacity: compareCount === 0 ? 0.5 : 1,
                      pointerEvents: compareCount === 0 ? 'none' : 'auto'
                    }}
                    onClick={handleClearCompare}
                  >
                    {isClearing ? 'Təmizlənir...' : (t.clearAllLabel || 'Hamısını sil')}
                  </span>
                </div>
              </div>
              {/* <div className="comparePageLeftAttribute">
                <span className="attr">{t.featuresLabel || 'Xüsusiyyətlər'}</span>
                <ul>
                  {[
                    t?.brand || 'Marka',
                    t?.diagonal || 'Diaqonal', 
                    t?.hdr || 'HDR',
                    t?.screenFrequency || 'Ekran Tezliyi',
                    t?.camera || 'Kamera',
                    t?.processor || 'Prosessor'
                  ].map((feat, index) => (
                    <li key={index}><span>{feat}</span></li>
                  ))}
                </ul>
              </div> */}
            </div>

            <div className="xl-9 lg-9 md-9 sm-12">
              <div className="comparePageRight">
                <div className="row">
                  {products.length === 0 && (
                    <div className="no-products">
                      <div className="no-products-content">
                        <h3>{t.noProductsLabel || 'Müqayisə ediləcək məhsul yoxdur'}</h3>
                        <p>{t.addProductsHint || 'Məhsulları müqayisə etmək üçün məhsul səhifələrindən müqayisə düyməsini basın.'}</p>
                        <Link href="/" className="browse-products-btn">
                          {t.browseProducts || 'Məhsullara bax'}
                        </Link>
                      </div>
                    </div>
                  )}

                  {products.map((product) => (
                    <div key={product.id} className="xl-4 lg-4 md-6 sm-6">
                      <div className="secondHomePageProductsCard">
                        <div className="secondHomePageProductsCardDiv">
                          <div
                            className="compareCloseIcon"
                            onClick={() => handleRemoveFromCompare(product.id)}
                            style={{ 
                              cursor: removingProducts.has(product.id) ? 'not-allowed' : 'pointer',
                              opacity: removingProducts.has(product.id) ? 0.5 : 1
                            }}
                            title={t?.removeFromCompare || 'Müqayisədən çıxar'}
                          >
                            {removingProducts.has(product.id) ? (
                              <div className="spinner-tiny"></div>
                            ) : (
                              <IoCloseSharp />
                            )}
                          </div>
                          
                          <Link href={`/products/${product.slug || product.id}`} className="blockCardLink">
                            <div className="secondHomePageProductsCardImage">
                              <Image
                                src={product.image || product.photo || '/images/defaultImage.png'}
                                alt={product.name}
                                width={200}
                                height={200}
                              />
                            </div>
                          </Link>
                          
                          <div className="secondHomePageProductsCardContent">
                            <p title={product.name}>{product.name}</p>
                            {product.disc_percent && (
                              <div className="discount">
                                <span>{product.disc_percent}%</span>
                              </div>
                            )}
                            <div className="cardBottomContent">
                              <div className="price">
                                {product.old_price && product.old_price !== product.price && (
                                  <span className="oldPrice">
                                    {product.old_price} <TbCurrencyManat />
                                  </span>
                                )}
                                <span className="newPrice">
                                  {product.price} <TbCurrencyManat />
                                </span>
                              </div>
                              <div className="wishList" id='tofiq'>
                                <button>
                                  <NewScale />
                                </button>
                                <button>
                                  <NewWishList />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="addToCartClick">
                          <div className="addToCartClickItem">
                            <button className="cartBtn">
                              {t.addToCartLabel || 'Səbətə at'}
                            </button>
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

      <style jsx>{`
        .no-products {
          width: 100%;
          padding: 4rem 2rem;
          text-align: center;
        }
        .no-products-content {
          max-width: 400px;
          margin: 0 auto;
        }
        .no-products-icon {
          width: 64px;
          height: 64px;
          opacity: 0.3;
          margin-bottom: 1.5rem;
        }
        .no-products-content h3 {
          color: #333;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .no-products-content p {
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .browse-products-btn {
          display: inline-block;
          background: #ec1f27;
          color: white;
          padding: 0.75rem 2rem;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }
        .browse-products-btn:hover {
          background: #d01a22;
        }
        .compareCloseIcon {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.3s ease;
        }
        .compareCloseIcon:hover {
          background: #ec1f27;
          color: white;
        }
        .spinner-tiny {
          width: 12px;
          height: 12px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-top-color: #ec1f27;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .compareAllParametrs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid #eee;
        }
        .compareAllParametrs span:first-child {
          font-weight: 600;
          color: #333;
        }
        .compareAllParametrs span:last-child {
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .compareAllParametrs span:last-child:hover {
          color: #d01a22;
        }
      `}</style>
    </>
  );
}












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
//   const { data, isLoading, isError, error, refetch } = useGetCompareListQuery();
//   const [removeFromCompare, { isLoading: removing }] = useRemoveFromCompareMutation();
//   const [clearCompare, { isLoading: clearing }] = useClearCompareMutation();

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === 'modal-overlay') closeModal();
//   };

//   const handleRemoveFromCompare = async (productId) => {
//     try {
//       await removeFromCompare(productId).unwrap();
//       // Əlavə refetch (əgər cache problem varsa)
//       // refetch();
//     } catch (error) {
//       console.error("Remove from compare error:", error);
//     }
//   };

//   const handleClearCompare = async () => {
//     try {
//       await clearCompare().unwrap();
//       // Əlavə refetch (əgər cache problem varsa)
//       // refetch();
//     } catch (error) {
//       console.error("Clear compare error:", error);
//     }
//   };

//   if (isLoading) return <p>Yükleniyor…</p>;
//   if (isError) {
//     console.error("Müqayisə siyahısı gətirilərkən xəta baş verdi:", error);
//     return <p>Bir şeyler ters getti. <button onClick={refetch}>Yenidən yüklə</button></p>;
//   }

//   // Backend-dən gələn data-nın strukturuna uyğun olaraq məhsulları və kateqoriyaları çıxarırıq
//   console.log(data);
  
//   const products = data?.compare || [];
//   const categories = data?.categories || [];

//   return (
//     <>
//       <div className="container">
//         <div className="breadCrumb breadCrumbsHideMobile">
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
//                   <span>{categories.length > 0 ? categories[0].name : (t.phonesLabel || 'Telefonlar')}</span>
//                   <span
//                     style={{ cursor: 'pointer', color: clearing ? '#aaa' : '#000' }}
//                     onClick={handleClearCompare}
//                     disabled={clearing}
//                   >
//                     {clearing ? 'Temizleniyor…' : (t.clearAllLabel || 'Hamısını silin')}
//                   </span>
//                 </div>
//               </div>
//               <div className="comparePageLeftAttribute">
//                 <span className="attr">{t.featuresLabel || 'Xüsusiyyətlər'}</span>
//                 <ul>
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
//                             onClick={() => handleRemoveFromCompare(p.id)}
//                             style={{ cursor: 'pointer', opacity: removing ? 0.5 : 1 }}
//                           >
//                             <IoCloseSharp />
//                           </div>
//                           <Link href={`/products/${p.slug || p.id}`} className="blockCardLink">
//                             <div className="secondHomePageProductsCardImage">
//                               <Image
//                                 src={p.image || p.photo || '/images/defaultImage.png'}
//                                 alt={p.name}
//                                 width={200}
//                                 height={200}
//                               />
//                             </div>
//                           </Link>
//                           <div className="secondHomePageProductsCardContent">
//                             <p>{p.name}</p>
//                             {p.disc_percent && (
//                               <div className="discount">
//                                 <span>{p.disc_percent}%</span>
//                               </div>
//                             )}
//                             <div className="cardBottomContent">
//                               <div className="price">
//                                 {p.old_price && p.old_price !== p.price && (
//                                   <span className="oldPrice">
//                                     {p.old_price} <TbCurrencyManat />
//                                   </span>
//                                 )}
//                                 <span className="newPrice">
//                                   {p.price} <TbCurrencyManat />
//                                 </span>
//                               </div>
//                               <div className="wishList">
//                                 <button><NewScale /></button>
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

















