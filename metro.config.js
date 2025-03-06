const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push("js", "json", "cjs", "env"); 
module.exports = defaultConfig;

