import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

export async function scraper() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://steamdb.info/upcoming/free/");

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  const html = await page.content();
  const $ = cheerio.load(html);
  console.log($);
  await browser.close();
  return html;
}

// puppeteer scraping for steam

// import puppeteer from "puppeteer";

// interface Game {
//   title: string;
//   description: string;
//   image: string;
//   updatedTime: string;
//   keyImages: {
//     type: string;
//     url: string;
//   };
//   effectiveDate: string;
//   gameUrl: string;
// }

// export async function scraper() {
//   const browser = await puppeteer.launch({ headless: false, devtools: true });
//   const page = await browser.newPage();

//   // page.setDefaultTimeout(0);
//   await page.goto("https://store.steampowered.com/");
//   let willClick = false;

//   const elementData = await page.$$eval("a.big_button", (el) =>
//     el.map((e) => e.textContent)
//   );

//   debugger;
//   const data: string[] = elementData.map((el: any) => el.trim());
//   async function clickOnSpecials() {
//     if (
//       data.includes("SPECIALS") ||
//       data.includes("Specials") ||
//       data.includes("specials")
//     ) {
//       willClick = true;
//       const variations = ["SPECIALS", "Specials", "specials"];
//       let indexOfSpecial: number = -1;

//       for (const variant of variations) {
//         indexOfSpecial = data.indexOf(variant);
//         if (indexOfSpecial !== -1) break;
//       }
//       const clickAnchor = await page.$$("a.big_button");
//       console.log(indexOfSpecial);
//       await clickAnchor[indexOfSpecial].click();
//       console.log(elementData);
//     }
//   }
//   await clickOnSpecials();

//   await browser.close();
//   return willClick;
// }
// scraper();
