const ppteer = require('fast-install-puppeteer');

const { log, getAgrType } = require('./utils');

const devices = {
  mobile: [360, 640, 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Mobile Safari/537.36'],
  ipad: [1024, 1366, 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1'],
  pc: [1200, 1000, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36']
};

async function pp({device = 'mobile', headless = true}) {
  const browser = await ppteer.launch({headless});
  
  async function openPage(url, extraHTTPHeaders) {
    const page = await browser.newPage();
    try{
      let deviceSet = devices[device];
      page.setUserAgent(deviceSet[2]);
      page.setViewport({width: deviceSet[0], height: deviceSet[1]});

      if(extraHTTPHeaders && getAgrType(extraHTTPHeaders) === 'object') {
        await page.setExtraHTTPHeaders(new Map(Object.entries(extraHTTPHeaders)));
      }
      await page.goto(url, {
        timeout: 2 * 60 * 1000,
        waitUntil: 'networkidle0'
      });
    }catch(e){
      console.log('\n');
      log.error(e.message);
    }
    return page;
  }
  return {
    browser,
    openPage
  }
};

module.exports = pp;