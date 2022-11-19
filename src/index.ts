import Puppeteer from "puppeteer";

const getCar = async () => {
  try {
    const browser = await Puppeteer.launch({
      headless: true,
      executablePath: "/usr/bin/chromium-browser",

      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto("https://ookcaty.nl/invite/i=17374");
    console.log("done");
    await browser.close();
  } catch (err) {
    console.log(err);
  }
};

getCar();
