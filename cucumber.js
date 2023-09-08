module.exports = {
    'default': 'test/features/ --require test/',
    dry: '--dry-run',
    tags: ['@Common'], // Add your desired tags here
    summary: '--format summary',
    progress: '--format progress',
    html_report: '--format html:reports/cucumber_report.html',
    parallel: '--parallel 1'
};