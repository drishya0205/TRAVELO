const GOOGLE_PLACES_API_KEY = 'your api key'

export async function fetchHotels(location: string) {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+${location}&key=${GOOGLE_PLACES_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results.map((hotel: any) => ({
    id: hotel.place_id,
    name: hotel.name,
    location: hotel.formatted_address,
    rating: hotel.rating,
    image: hotel.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hotel.photos[0].photo_reference}&key=${GOOGLE_PLACES_API_KEY}` : "/default-hotel.jpg",
    price: "N/A",
    amenities: ["WiFi", "Parking"], // Dummy data
  }));
}
