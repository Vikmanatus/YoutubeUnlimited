/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const extraNodeModules = {
  'react-native-youtube-unlimited-sdk': path.join(
    __dirname + '/../youtube-unlimited-sdk',
  ),
};
const watchFolders = [path.join(__dirname + '/../youtube-unlimited-sdk')];
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};
