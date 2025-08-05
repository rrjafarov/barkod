// import Link from "next/link";
// import React from "react";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";

// const CorporateSales = ({aboutPageDataSlider ,t}) => {
//   return (
//     <div>
//       <div className="container">
//         <div className="breadCrumb">
//           <Link href="/">
//             <span>{t?.homebreadcrumbs || ""}</span>
//           </Link>
//           <strong>
//             <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//           </strong>
//           <Link href="#">
//             <span>{t?.about || "Haqqımızda"}</span>
//           </Link>
//         </div>
//         <div className="aboutPage">
//           <span>{aboutPageDataSlider.title}:</span>
//           <div className="aboutPageContent">
//             <div dangerouslySetInnerHTML={{ __html: aboutPageDataSlider.content }}></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CorporateSales;

// components/CorporateSales.jsx
import Link from "next/link";
import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";

const CorporateSales = ({ settingData, t, aboutPageDataSlider }) => {
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
            <span>{t?.corporatesale || "Sales"}</span>
          </Link>
        </div>
        <div className="aboutPage">
          <span>{aboutPageDataSlider.title}:</span>
          <div className="aboutPageContent">
            <div
              dangerouslySetInnerHTML={{
                __html: aboutPageDataSlider.content,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateSales;
