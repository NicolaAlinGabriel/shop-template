module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    "@babel/plugin-syntax-dynamic-import",
    [
      "module-resolver",
      {
        alias: {
          "@screens": "./src/screens",
          "@navigation": "./src/navigation",
          "@store": "./src/store",
          "@components": "./src/components",
          "@customTypes": "./src/types",
          "@api": "./src/api",
          "@resources": "./src/resources",
          "@customHooks": "./src/hooks/arrayFilter",
        },
      },
    ],
  ],
};
