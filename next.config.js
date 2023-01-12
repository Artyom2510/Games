/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	experimental: { appDir: true },
	images: {
		domains: [process.env.NEXT_PUBLIC_SUPABASE_URL_IMAGES]
	},
	eslint: {
		dist: ['src']
	},
	compiler: {
		styledComponents: {
			ssr: true
		}
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: { and: [/\.(js|ts|md)x?$/] },
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						prettier: false,
						svgo: true,
						svgoConfig: {
							plugins: [
								{
									name: 'removeViewBox',
									params: {
										removeViewBox: false
									}
								}
							]
						},
						titleProp: true
					}
				}
			]
		});
		return config;
	}
};

module.exports = nextConfig;
