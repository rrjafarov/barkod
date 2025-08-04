// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin({
//   locales: ["az", "en", "ru"],
//   defaultLocale: "az",
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         // protocol: "https",
//         protocol: "https",
//         hostname: "//",
//         hostname: "dev-admin.barkodelectronics.az",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "img.youtube.com",
//       },
//     ],
//   },

//   // output: "export",

//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [
//         {
//           loader: "@svgr/webpack",
//           options: {
//             svgoConfig: {
//               plugins: [
//                 {
//                   name: "preset-default",
//                   params: {
//                     overrides: {
//                       removeViewBox: false,
//                     },
//                   },
//                 },
//               ],
//             },
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

// export default withNextIntl(nextConfig);















import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin({
  locales: ["az", "en", "ru"],
  defaultLocale: "az",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        // protocol: "https",
        protocol: "https",
        hostname: "//",
        hostname: "dev-admin.barkodelectronics.az",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  // output: "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};
export default withNextIntl(nextConfig);
