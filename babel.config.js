module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app': './src/app',
          '@features': './src/features',
          '@shared': './src/shared',
          '@services': './src/services',
          '@theme': './src/theme',
          '@typeDefs': './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
