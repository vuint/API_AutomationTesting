let common = [
  'features/*.feature',
  '--require-module ts-node/register',
  '--require steps/*.ts',
  '--format progress-bar',
  '--format node_modules/cucumber-pretty',
  '--format json:report/cucumber_report.json',
].join (' ');

module.exports = {
  default: common,
  // More profiles can be added if desired
};
