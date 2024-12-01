/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Статический экспорт
  typescript: {
    ignoreBuildErrors: true, // Игнорировать ошибки TypeScript
  },
  trailingSlash: true, // Добавляет слэш в конце URL (нужно для статики)
};

export default nextConfig;
