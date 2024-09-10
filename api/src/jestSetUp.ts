module.exports = async function (globalConfig, projectConfig) {
  // Jest 実行時に .env を読み込む
  require('dotenv').config({});
};
