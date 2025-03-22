// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        unoptimized: true,
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

export default nextConfig;
