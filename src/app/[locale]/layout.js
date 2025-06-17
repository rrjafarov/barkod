// import "./globals.scss";

// export const metadata = {
//   title: "Barkod Electronics",
//   description: "Barkod Electronics",
//   icons: "/favicon.png",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body suppressHydrationWarning>{children}</body>
//     </html>
//   );
// }



// import "./globals.scss";
// // import StoreProvider from "@/src/providers/StoreProvider";
// import StoreProvider from "@/redux/StoreProvider";

// export const metadata = {
//   title: "Barkod Electronics",
//   description: "Barkod Electronics",
//   icons: "/favicon.png",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body suppressHydrationWarning>
//         {/* Redux store’u sağlayan client component */}
//         <StoreProvider>
//           {children}
//         </StoreProvider>
//       </body>
//     </html>
//   );
// }






// ! last version
import "./globals.scss";
import StoreProvider from "@/redux/StoreProvider";
import GuestUUIDProvider from "@/utils/GuestUUIDProvider";

export const metadata = {
  title: "Barkod Electronics",
  description: "Barkod Electronics",
  icons: "/favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StoreProvider>
          {/* guest_uuid cookie-nin yazılması */}
          <GuestUUIDProvider />  
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

// ! last version