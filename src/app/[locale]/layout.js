
// ! last version
// import "./globals.scss";
// import StoreProvider from "@/redux/StoreProvider";
// import GuestUUIDProvider from "@/utils/GuestUUIDProvider";
// import NavigationProgress from "../../components/NavigationProgress";
// export const metadata = {
//   title: "Barkod Electronics",
//   description: "Barkod Electronics",
//   icons: "/favicon.png",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body suppressHydrationWarning>
//         <StoreProvider>
//           {/* guest_uuid cookie-nin yazılması */}
//           <GuestUUIDProvider />  
//           <NavigationProgress />
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
import NavigationProgress from "../../components/NavigationProgress";
import FormValidationProvider from "@/utils/FormValidationProvider"; // client component
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

export const metadata = {
  title: "Barkod Electronics",
  description: "Barkod Electronics",
  icons: "/favicon.png",
};

async function getTranslations() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const response = await axiosInstance.get("/translation-list", {
      headers: { Lang: lang?.value || "az" },
    });
    const data = response.data;

    return data.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
  } catch (err) {
    console.log(err);
    return {};
  }
}

export default async function RootLayout({ children }) {
  const t = await getTranslations();

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StoreProvider>
          <GuestUUIDProvider />
          <NavigationProgress />
          {/* burda global olaraq input error mesajını dəyişən client component çağırırıq */}
          <FormValidationProvider t={t} />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
