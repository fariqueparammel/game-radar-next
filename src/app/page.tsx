import ListOfCards from "./components/listOfCards";

function Home() {
  const initialCardItems = [
    {
      title: "No game found",
      description: "No description available",
      image: "https://via.placeholder.com/150",
      updatedTime: "Not available",
      keyImages: [
        {
          type: "OfferImageTall",
          url: "https://via.placeholder.com/150",
        },
      ],
      effectiveDate: "Not available",
      gameUrl: "not available",
    },
  ];

  return (
    <div>
      <ListOfCards cardItems={initialCardItems} />
    </div>
  );
}

export default Home;
