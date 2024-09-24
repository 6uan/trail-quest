/* 

Displays a list of trails runners can choose from with in-depth
information and aesthetically pleasing overviews of the path

*/
const trailData = [
  {
    id: 1,
    parkTrailName: "Oleta River State Park",
    cityState: "North Miami Beach, FL",
    distance: 3.0,
    distanceType: "miles",
    description:
      "A scenic trail through mangroves and along the Oleta River, ideal for both beginner and intermediate runners.",
    directions: "https://maps.app.goo.gl/HWhSVY6C85mia4u89",
    image: "/images/-oleta-river.webp",
    trailImage: "/images/oleta-river.webp",
  },
  {
    id: 2,
    parkTrailName: "Virginia Key Beach Park",
    cityState: "Miami, FL",
    distance: 2.5,
    distanceType: "miles",
    description:
      "A coastal trail with beautiful ocean views, perfect for a relaxed run by the beach.",
    directions: "https://maps.app.goo.gl/zk33ew7go1TYAiUe6",
    image: "/images/-virginia-key.webp",
    trailImage: "/images/virginia-key.webp",
  },
  {
    id: 3,
    parkTrailName: "Crandon Beach Walk",
    cityState: "Key Biscayne, FL",
    distance: 6.1,
    distanceType: "miles",
    description:
      "A lush tropical trail that winds through Crandon Park, offering a mix of paved and unpaved paths.",
    directions: "https://maps.app.goo.gl/BBaHGUcfnN7XcHiz6",
    image: "/images/-crandon-park.webp",
    trailImage: "/images/crandon-park.webp",
  },
  {
    id: 4,
    parkTrailName: "Matheson Hammock Park",
    cityState: "Coral Gables, FL",
    distance: 0.4,
    distanceType: "miles",
    description:
      "A peaceful trail with shaded areas, winding through the hammock and offering great views of the bay.",
    directions: "https://maps.app.goo.gl/T74YbDWXpXq3YTfC8",
    image: "/images/-matheson-hammock.webp",
    trailImage: "/images/matheson-hammock.webp",
  },
  {
    id: 5,
    parkTrailName: "Bill Baggs Cape Florida State Park",
    cityState: "Key Biscayne, FL",
    distance: 5.1,
    distanceType: "miles",
    description:
      "A picturesque trail that runs along the coastline, passing the historic Cape Florida Lighthouse.",
    directions: "https://maps.app.goo.gl/bsgG4UdSUvseu2QJ8",
    image: "/images/-bill-baggs.webp",
    trailImage: "/images/bill-baggs.webp",
  },
  {
    id: 6,
    parkTrailName: "Tamiami & Dade-Broward Levee Canal Trail",
    cityState: "Doral, FL",
    distance: 8.5,
    distanceType: "miles",
    description:
      "A longer, flat trail that runs through the Everglades, perfect for distance runners looking for open space.",
    directions: "https://maps.app.goo.gl/bMSs4biDTw9GKxYP6",
    image: "/images/-tamiami.webp",
    trailImage: "/images/tamiami.webp",
  },
  {
    id: 7,
    parkTrailName: "Amelia Earhart Park",
    cityState: "Hialeah, FL",
    distance: 3.8,
    distanceType: "miles",
    description:
      "A family-friendly trail with a mix of paved and off-road sections, offering views of the park’s lakes and green spaces.",
    directions: "https://maps.app.goo.gl/MxR1W8a2ZXa4BagU9",
    image: "/images/-amelia-earhart.webp",
    trailImage: "/images/amelia-earhart.webp",
  },
  {
    id: 8,
    parkTrailName: "Shark Valley Trail",
    cityState: "West Rd, FL",
    distance: 15.0,
    distanceType: "miles",
    description:
      "A scenic and flat loop trail offering sweeping views of the Everglades National Park, ideal for long-distance runners.",
    directions: "https://maps.app.goo.gl/ap9qHCmR16sYcQKH9",
    image: "/images/-shark-valley.webp",
    trailImage: "/images/shark-valley.webp",
  },
  {
    id: 9,
    parkTrailName: "Larry and Penny Thompson Memorial Park",
    cityState: "Miami, FL",
    distance: 5.5,
    distanceType: "miles",
    description:
      "A wooded trail through a beautiful park, offering both paved and unpaved paths for various running levels.",
    directions: "https://maps.app.goo.gl/My1dYZGxaKmZt76z5",
    image: "/images/-larry-and-penny.webp",
    trailImage: "/images/larry-and-penny.webp",
  },
];

export default trailData;
