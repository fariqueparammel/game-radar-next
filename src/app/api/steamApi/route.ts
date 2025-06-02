import scraper from "@/lib/scraper";
export default async function test() {
return await scraper();
}




// // import * as cheerio from "cheerio";
// // "use server"
// // import { GetStaticProps } from "next";

// export async function GET() {
//   // try {
//   // const response = await fetch(
//   //     "https://store.steampowered.com/api/featuredcategories",
//   //     {
//   //         method: "GET",
//   //         headers: {
//   //             Accept: "application/json",
//   //         },
//   //     }
//   //  (async () => {
//   try {
//     const {
//       Scraper,
//       Root,
//       OpenLinks,
//       CollectContent,
     
//     } = require("nodejs-web-scraper");
 
//       const config = {
//         baseSiteUrl: `https://store.steampowered.com/`,
//         startUrl: `https://store.steampowered.com/`,
//         logPath: './logs/',
//         concurrency: 10,//Maximum concurrent jobs. More than 10 is not recommended.Default is 3.
//       }
//       const condition = (cheerioNode: any) => {
//         //Note that cheerioNode contains other useful methods, like html(), hasClass(), parent(), attr() and more.           
//         const text = cheerioNode.text().trim();//Get the innerText of the <a> tag.
//         if (text === 'SPECIALS' || text === 'Specials' || text === 'specials') {//Even though many links might fit the querySelector, Only those that have this innerText,
//           // will be "opened".
//           return true
//         }
//       }
//       //     const condition1 = (cheerioNode: any) => { 
//       //       if(cheerioNode('div').filter(".discount_pct") === "-100%")
//       //       {
//       // const gamesForFree =  cheerioNode.text().trim();
//       //       }


//       //     }
//       const scraper = new Scraper(config);
//       const root = new Root();

//       const special = new OpenLinks('.big_button', {
//         condition
//       });
//       const freeGames = new CollectContent('.search_result_row, .ds_collapse_flag, .app_impression_tracked', { name: 'freeGames' })
//       root.addOperation(special);
//       special.addOperation(freeGames);

//       await scraper.scrape(root);
//       const freeGamesData = freeGames.getData();

//       console.log(freeGamesData);
//       return Response.json(freeGamesData);
//     }
      
//    catch {
//     console.log("error");
//     }
// // })();
//    }
  
