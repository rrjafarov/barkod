
// "use client";

// import { useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

// NProgress.configure({
//   minimum: 0.3,
//   easing: "ease",
//   speed: 500,
//   showSpinner: false,
//   trickle: true,
//   trickleSpeed: 200,
// });

// export default function NavigationProgress() {
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     let timeout;

//     const handleStart = () => {
//       NProgress.start();
//     };

//     const handleComplete = () => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         NProgress.done();
//       }, 200); // azacıq gecikmə ilə daha təbii görünür
//     };

//     // klikləri dinləyək
//     const handleLinkClick = (e) => {
//       const link = e.target.closest("a");
//       if (
//         link &&
//         link.href.startsWith(window.location.origin) &&
//         link.target !== "_blank" &&
//         !link.href.includes("#") &&
//         link.href !== window.location.href // eyni səhifəyə klikləmə
//       ) {
//         handleStart();
//       }
//     };

//     window.addEventListener("click", handleLinkClick);
//     handleComplete(); // ilk yükləmədə done

//     return () => {
//       window.removeEventListener("click", handleLinkClick);
//       clearTimeout(timeout);
//       NProgress.done();
//     };
//   }, []);

//   // pathname dəyişəndə done et
//   useEffect(() => {
//     NProgress.done();
//   }, [pathname]);

//   return null;
// }























// daha yeni 04.08.25
"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 500,
  showSpinner: false,
  trickle: true,
  trickleSpeed: 200,
});

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    let timeout;

    const handleStart = () => {
      NProgress.start();
    };

    const handleComplete = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        NProgress.done();
      }, 300);
    };

    // klikləri dinləyək
    const handleLinkClick = (e) => {
      const link = e.target.closest("a");
      if (
        link &&
        link.href.startsWith(window.location.origin) &&
        link.target !== "_blank" &&
        !link.href.includes("#") &&
        link.href !== window.location.href
      ) {
        handleStart();
      }
    };

    // URL search params dəyişəndə də progress-i bitir
    const handlePopstate = () => {
      NProgress.done();
    };

    window.addEventListener("click", handleLinkClick);
    window.addEventListener("popstate", handlePopstate);
    handleComplete();

    return () => {
      window.removeEventListener("click", handleLinkClick);
      window.removeEventListener("popstate", handlePopstate);
      clearTimeout(timeout);
      NProgress.done();
    };
  }, []);

  // pathname və ya search params dəyişəndə done et
  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return null;
}