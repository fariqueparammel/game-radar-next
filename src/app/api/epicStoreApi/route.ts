export async function GET() {
  try {
    // const apiUrl = import.meta.env.VITE_API_URI;

    const response = await fetch(
      "https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions?locale=en-US&country=IN&allowCountries=IN",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching Epic Games data:", error);
    // Return a proper error response with status code
    return Response.json(
      { error: "Unable to fetch game data. Please try again later." },
      { status: 500 }
    );
  }
}
