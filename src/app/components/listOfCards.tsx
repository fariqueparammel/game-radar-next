"use client";
import { useEffect, useState } from "react";

import CardDisplay from "./cardDisplay";

interface CardItemProps {
  title: string;
  description: string;
  image: string;
  updatedTime: string;
  keyImages: {
    type: string;
    url: string;
  }[];
  effectiveDate: string;
  gameUrl: string;
}

export default function ListOfCards({
  cardItems,
}: {
  cardItems: CardItemProps[];
}) {
  let data: any;
  const [gameDetails, setGameDetails] = useState<CardItemProps[]>(cardItems);

  //  let title:any;

  useEffect(() => {
    async function fetchData() {
      const gameData = await fetch("/api/epicStoreApi");
      // console.log(gameData.json);
      data = await gameData.json();
      // data = gameData;

      const freeGames = data.data.Catalog.searchStore.elements
        .filter((item: any) => item.price?.totalPrice?.discountPrice === 0)
        .map((item: any) => {
          const baseUrl = "https://store.epicgames.com/en-US/p/";
          let gameUrl = "https://store.epicgames.com"; // default fallback

          if (item.catalogNs?.mappings?.[0]?.pageSlug) {
            gameUrl = baseUrl + item.catalogNs.mappings[0].pageSlug;
          } else if (item.productSlug) {
            gameUrl = baseUrl + item.productSlug;
          } else if (item.customAttributes?.[4]?.value) {
            gameUrl = baseUrl + item.customAttributes[4].value;
          }

          return {
            title: item.title,
            description: item.description || "No description",
            image:
              item.keyImages.find((img: any) => img.type === "OfferImageTall")
                ?.url || "https://via.placeholder.com/200x300 ",
            updatedTime:
              item.promotions?.promotionalOffers?.[0]?.promotionalOffers?.[0]
                ?.startDate || "not available",
            keyImages: item.keyImages,
            effectiveDate:
              item.promotions?.promotionalOffers?.[0]?.promotionalOffers?.[0]
                ?.endDate ||
              item.lineOffers?.[0]?.appliedRules?.[0]?.endDate ||
              "Offer end date not available",
            gameUrl: gameUrl,
          };
        });

      console.log("Processed free games:", freeGames);
      setGameDetails(freeGames);
    }
    fetchData();
  }, []);

  return (
    // <div>
    <>
      {gameDetails.map((item, index) => (
        <div className="d-flex min-vw-100 justify-content-center">
          <CardDisplay
            key={index}
            gameName={item.title}
            gameDescription={item.description}
            src={
              item.keyImages?.find((img) => img.type === "OfferImageTall")
                ?.url || "https://via.placeholder.com/150"
            }
            alt={item.title}
            validTill={item.effectiveDate}
            gameUrl={item.gameUrl}
            // for store image , check gameurl contain store name
          />
        </div>
      ))}
    </>
    // </div>
  );
}
