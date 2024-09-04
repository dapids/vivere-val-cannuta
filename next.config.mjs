/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  }
};

export default nextConfig;
