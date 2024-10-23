exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    headless: true,
    capabilities: [
    // {
    //     maxInstances: 5,
    //     browserName: 'chrome',
    //     acceptInsecureCerts: true,
    //     'goog:chromeOptions': {
            // args: ['headless', 'disable-gpu']
    //     }
    // },
    {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
            // args: ['-headless'],
            binary: '/Applications/Firefox.app/Contents/MacOS/firefox'
        }
    }
],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://cnt-bb71eb2f-7c27-4251-8ba1-30c0401d7dcc.containerhub.tripleten-services.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver', 
        'geckodriver', 
        'intercept', 
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}