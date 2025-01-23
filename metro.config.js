const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: [
    // Adicione pastas externas ao projeto, se necessário.
  ],
  resolver: {
    // Configurações do resolver, como exclusão de arquivos ou diretórios.
    blacklistRE: /node_modules\/.*\/node_modules/,
  },
  server: {
    // Limite o número de arquivos que o Metro observa.
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        // Ajuste aqui, se necessário.
        middleware(req, res, next);
      };
    },
  },
  transformer: {
    // Habilite o cache ou minificação, se necessário.
    minifierPath: 'metro-minify-terser',
  },
  maxWorkers: 2, // Reduza o número de threads para reduzir a carga do sistema.
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
