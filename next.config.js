const nextConfig = {
    reactStrictMode: true,
    webpack(config, { isServer }) {
      const prefix = config.assetPrefix ?? config.basePath ?? "";
      config.module.rules.push({
        test: /\.(mp4|mov|m4v|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: `${prefix}/_next/static/media/`,
              outputPath: `${isServer ? "../" : ""}static/media/`,
              name: "[name].[hash].[ext]",
            },
          },
        ],
      });
  
   
  
      return config;
    },
    images: {
      unoptimized: true,
    },
  };
  
   
  
  module.exports = nextConfig