var reporter = require ('cucumber-html-reporter');

var options = {
  // theme: 'bootstrap',hierarchy
  theme: 'bootstrap',
  jsonFile: 'report/cucumber_report.json',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  columnLayout: 1,
  scenarioTimestamp: true,
  displayDuration: true,
  durationInMS: true,
  metadata: {
    'SB2109 Automation API Testing': '1.1.1',
    'Test Environment': 'Dev',
    // Browser: 'Chrome  54.0.2840.98',
    // Platform: 'Windows 10',
    // Parallel: 'Scenarios',
    Executed: 'Remote',
  },
};

reporter.generate (options);
