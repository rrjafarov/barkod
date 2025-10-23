// import Link from "next/link";
// import React from "react";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";

// const SecurePage = ({ t, supportData }) => {
//   return (
//     <div>
//       <div className="container">
//         <div className="breadCrumb breadCrumbsHideMobile">
//           <Link href="/">
//             <span>{t?.homebreadcrumbs || ""}</span>
//           </Link>
//           <strong>
//             <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//           </strong>
//           <Link href="#">
//             <span>{t?.warranty || "Zəmanət"}</span>
//           </Link>
//         </div>

//         <div className="securePage">
//           <h2 className="securePageTitle">
//             {t?.warranty || "Zəmanət"}
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecurePage;





























// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";

// const SecurePage = ({ t, supportData }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const items = [
//     {
//       id: 1,
//       title: t?.dualWarranty || "Dual Zəmanət",
//       content:
//         t?.dualWarrantyContent ||
//         "Dual Zəmanət məhsulun standart zəmanətinə əlavə dəstək təmin edir. Şərtlər və istisnalar məhsulun növünə görə dəyişə bilər.",
//     },


//     {
//       id: 2,
//       title: t?.goldWarranty || "Gold Zəmanət",
//       content:
//         t?.goldWarrantyContent ||
//         "Gold Zəmanət daha geniş əhatə, daha uzun müddət və üstün servis imkanı verir. Detallar üçün şərtlərlə tanış olun.",
//     },
//   ];

//   const toggle = (index) => {
//     setActiveIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="breadCrumb breadCrumbsHideMobile">
//           <Link href="/">
//             <span>{t?.homebreadcrumbs || ""}</span>
//           </Link>
//           <strong>
//             <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//           </strong>
//           <Link href="#">
//             <span>{t?.warranty || "Zəmanət"}</span>
//           </Link>
//         </div>

//         <div className="securePage">
//           <h2 className="securePageTitle">{t?.warranty || "Zəmanət"}</h2>

//           {/* ACCORDION */}
//           <div className="accordion">
//             {items.map((item, idx) => {
//               const open = activeIndex === idx;
//               return (
//                 <div
//                   key={item.id}
//                   className={`accordionItem ${open ? "isOpen" : ""}`}
//                 >
//                   <button
//                     type="button"
//                     className="accordionHeader"
//                     aria-expanded={open}
//                     aria-controls={`panel-${item.id}`}
//                     onClick={() => toggle(idx)}
//                   >
//                     <span className="accordionTitle">{item.title}</span>
//                     <span
//                       className={`accordionToggle ${open ? "minus" : "plus"}`}
//                       aria-hidden="true"
//                     >
//                       {open ? "−" : "+"}
//                     </span>
//                   </button>

//                   <div
//                     id={`panel-${item.id}`}
//                     role="region"
//                     aria-hidden={!open}
//                     className={`accordionPanel ${open ? "open" : ""}`}
//                   >
//                     <div className="accordionPanelInner">
//                       <p>{item.content}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           {/* /ACCORDION */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecurePage;


















"use client";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";

const SecurePage = ({ t, supportData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = useMemo(() => {
    if (!supportData || !Array.isArray(supportData)) return [];

    const targetItem = supportData.find(item => item.id === 34);
    if (!targetItem?.content) return [];

    const content = targetItem.content;
    
    // data-start və data-end atributları olan strong tag-ları tap
    const strongPattern = /<strong[^>]*data-start="(\d+)"[^>]*data-end="(\d+)"[^>]*>(.*?)<\/strong>/gi;
    const headers = [];
    let match;
    
    while ((match = strongPattern.exec(content)) !== null) {
      const dataStart = parseInt(match[1]);
      const dataEnd = parseInt(match[2]);
      const title = match[3].trim();
      
      // Bu strong tag-ın parent h2-sini tap
      const beforeStrong = content.substring(0, match.index);
      const lastH2Index = beforeStrong.lastIndexOf('<h2');
      
      if (lastH2Index !== -1) {
        const h2EndIndex = content.indexOf('</h2>', lastH2Index);
        if (h2EndIndex > match.index) {
          headers.push({
            index: lastH2Index,
            dataStart,
            dataEnd,
            title
          });
        }
      }
    }

    // data-start dəyərinə görə sırala
    headers.sort((a, b) => a.dataStart - b.dataStart);

    // Əgər 2 başlıq yoxdursa
    if (headers.length < 2) {
      return [{
        id: 34,
        title: t?.warranty || 'Zəmanət',
        content: content,
        isHtml: true,
      }];
    }

    // İlk 2 başlığı götür
    const firstHeader = headers[0];
    const secondHeader = headers[1];

    // Birinci accordion: birinci başlıqdan ikinciyə qədər
    const firstContent = content.substring(firstHeader.index, secondHeader.index);
    
    // İkinci accordion: ikinci başlıqdan sona qədər
    const secondContent = content.substring(secondHeader.index);

    return [
      {
        id: '34-first',
        title: firstHeader.title,
        content: firstContent,
        isHtml: true,
      },
      {
        id: '34-second',
        title: secondHeader.title,
        content: secondContent,
        isHtml: true,
      }
    ];
  }, [supportData, t]);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <div className="container">
        <div className="breadCrumb breadCrumbsHideMobile">
          <Link href="/">
            <span>{t?.homebreadcrumbs || ""}</span>
          </Link>
          <strong>
            <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
          </strong>
          <Link href="#">
            <span>{t?.warranty || "Zəmanət"}</span>
          </Link>
        </div>

        <div className="securePage">
          <h2 className="securePageTitle">{t?.warranty || "Zəmanət"}</h2>

          <div className="accordion">
            {items.map((item, idx) => {
              const open = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`accordionItem ${open ? "isOpen" : ""}`}
                >
                  <button
                    type="button"
                    className="accordionHeader"
                    aria-expanded={open}
                    aria-controls={`panel-${item.id}`}
                    onClick={() => toggle(idx)}
                  >
                    <span className="accordionTitle">{item.title}</span>
                    <span
                      className="accordionToggle"
                      aria-hidden="true"
                    >
                      <MdKeyboardArrowRight className="accordionArrow" />
                    </span>
                  </button>

                  <div
                    id={`panel-${item.id}`}
                    role="region"
                    aria-hidden={!open}
                    className={`accordionPanel ${open ? "open" : ""}`}
                  >
                    <div className="accordionPanelInner">
                      <div 
                        dangerouslySetInnerHTML={{ __html: item.content }}
                        style={{
                          width: '100%',
                          maxWidth: '100%',
                          overflowX: 'auto',
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .accordionPanelInner {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .accordionPanelInner :global(table) {
          width: 100% !important;
          max-width: 100%;
          overflow-x: auto;
          display: block;
        }

        .accordionPanelInner :global(img) {
          max-width: 100%;
          height: auto;
        }

        .accordionPanelInner :global(p),
        .accordionPanelInner :global(div),
        .accordionPanelInner :global(ul),
        .accordionPanelInner :global(ol),
        .accordionPanelInner :global(li),
        .accordionPanelInner :global(h2),
        .accordionPanelInner :global(h3) {
          max-width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .accordionPanelInner :global(._tableContainer_1rjym_1),
        .accordionPanelInner :global(._tableWrapper_1rjym_13) {
          width: 100%;
          overflow-x: auto;
        }

        .accordionPanelInner :global(.group) {
          width: 100%;
        }

        /* Ox ikonunun fırlanma animasiyası */
        .accordionToggle :global(svg) {
          transition: transform 0.2s ease;
          display: block;
        }
        .accordionItem.isOpen .accordionToggle :global(svg) {
          transform: rotate(-90deg);
        }
      `}</style>
    </div>
  );
};

export default SecurePage;




























// "use client";
// import Link from "next/link";
// import React, { useState, useMemo } from "react";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";

// const SecurePage = ({ t, supportData }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const items = useMemo(() => {
//     if (!supportData || !Array.isArray(supportData)) return [];

//     const targetItem = supportData.find(item => item.id === 34);
//     if (!targetItem?.content) return [];

//     const content = targetItem.content;
    
//     // data-start və data-end atributları olan strong tag-ları tap
//     const strongPattern = /<strong[^>]*data-start="(\d+)"[^>]*data-end="(\d+)"[^>]*>(.*?)<\/strong>/gi;
//     const headers = [];
//     let match;
    
//     while ((match = strongPattern.exec(content)) !== null) {
//       const dataStart = parseInt(match[1]);
//       const dataEnd = parseInt(match[2]);
//       const title = match[3].trim();
      
//       // Bu strong tag-ın parent h2-sini tap
//       const beforeStrong = content.substring(0, match.index);
//       const lastH2Index = beforeStrong.lastIndexOf('<h2');
      
//       if (lastH2Index !== -1) {
//         const h2EndIndex = content.indexOf('</h2>', lastH2Index);
//         if (h2EndIndex > match.index) {
//           headers.push({
//             index: lastH2Index,
//             dataStart,
//             dataEnd,
//             title
//           });
//         }
//       }
//     }

//     // data-start dəyərinə görə sırala
//     headers.sort((a, b) => a.dataStart - b.dataStart);

//     // Əgər 2 başlıq yoxdursa
//     if (headers.length < 2) {
//       return [{
//         id: 34,
//         title: t?.warranty || 'Zəmanət',
//         content: content,
//         isHtml: true,
//       }];
//     }

//     // İlk 2 başlığı götür
//     const firstHeader = headers[0];
//     const secondHeader = headers[1];

//     // Birinci accordion: birinci başlıqdan ikinciyə qədər
//     const firstContent = content.substring(firstHeader.index, secondHeader.index);
    
//     // İkinci accordion: ikinci başlıqdan sona qədər
//     const secondContent = content.substring(secondHeader.index);

//     return [
//       {
//         id: '34-first',
//         title: firstHeader.title,
//         content: firstContent,
//         isHtml: true,
//       },
//       {
//         id: '34-second',
//         title: secondHeader.title,
//         content: secondContent,
//         isHtml: true,
//       }
//     ];
//   }, [supportData, t]);

//   const toggle = (index) => {
//     setActiveIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="breadCrumb breadCrumbsHideMobile">
//           <Link href="/">
//             <span>{t?.homebreadcrumbs || ""}</span>
//           </Link>
//           <strong>
//             <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//           </strong>
//           <Link href="#">
//             <span>{t?.warranty || "Zəmanət"}</span>
//           </Link>
//         </div>

//         <div className="securePage">
//           <h2 className="securePageTitle">{t?.warranty || "Zəmanət"}</h2>

//           <div className="accordion">
//             {items.map((item, idx) => {
//               const open = activeIndex === idx;
//               return (
//                 <div
//                   key={item.id}
//                   className={`accordionItem ${open ? "isOpen" : ""}`}
//                 >
//                   <button
//                     type="button"
//                     className="accordionHeader"
//                     aria-expanded={open}
//                     aria-controls={`panel-${item.id}`}
//                     onClick={() => toggle(idx)}
//                   >
//                     <span className="accordionTitle">{item.title}</span>
//                     <span
//                       className={`accordionToggle ${open ? "minus" : "plus"}`}
//                       aria-hidden="true"
//                     >
//                       {open ? "−" : "+"}
//                     </span>
//                   </button>

//                   <div
//                     id={`panel-${item.id}`}
//                     role="region"
//                     aria-hidden={!open}
//                     className={`accordionPanel ${open ? "open" : ""}`}
//                   >
//                     <div className="accordionPanelInner">
//                       <div 
//                         dangerouslySetInnerHTML={{ __html: item.content }}
//                         style={{
//                           width: '100%',
//                           maxWidth: '100%',
//                           overflowX: 'auto',
//                           wordWrap: 'break-word',
//                           overflowWrap: 'break-word'
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .accordionPanelInner {
//           width: 100%;
//           max-width: 100%;
//           overflow: hidden;
//         }

//         .accordionPanelInner :global(table) {
//           width: 100% !important;
//           max-width: 100%;
//           overflow-x: auto;
//           display: block;
//         }

//         .accordionPanelInner :global(img) {
//           max-width: 100%;
//           height: auto;
//         }

//         .accordionPanelInner :global(p),
//         .accordionPanelInner :global(div),
//         .accordionPanelInner :global(ul),
//         .accordionPanelInner :global(ol),
//         .accordionPanelInner :global(li),
//         .accordionPanelInner :global(h2),
//         .accordionPanelInner :global(h3) {
//           max-width: 100%;
//           word-wrap: break-word;
//           overflow-wrap: break-word;
//         }

//         .accordionPanelInner :global(._tableContainer_1rjym_1),
//         .accordionPanelInner :global(._tableWrapper_1rjym_13) {
//           width: 100%;
//           overflow-x: auto;
//         }

//         .accordionPanelInner :global(.group) {
//           width: 100%;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SecurePage;
































