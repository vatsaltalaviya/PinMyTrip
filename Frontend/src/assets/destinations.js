const destinations = [
    {
      cityName: "Udaipur, Rajasthan",
      image: "https://img.freepik.com/free-photo/udaipur-city-view-from-hotel-balcony-rajasthan-india_53876-65505.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Udaipur, known as the \"City of Lakes,\" is famous for its stunning palaces and serene lakes. It offers a rich blend of Rajasthani culture and history.",
      keyHighlights: [
        "City Palace",
        "Lake Pichola",
        "Jagdish Temple"
      ],
      location: {
        lat: 24.5854,
        lng: 73.7125
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 900,
      recommendedDays: 3
    },
    {
      cityName: "Manali",
      image: "https://img.freepik.com/free-photo/mesmerizing-view-houses-fields-covered-snow-surrounded-by-mountains-trees_181624-13827.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Manali is a scenic hill station in Himachal Pradesh, renowned for its snow-capped mountains and adventure activities. It’s a gateway to the Himalayas.",
      keyHighlights: [
        "Rohtang Pass",
        "Solang Valley",
        "Hidimba Devi Temple"
      ],
      location: {
        lat: 32.2432,
        lng: 77.1892
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 500,
      recommendedDays: 5
    },
    {
      cityName: "Varanasi (The Ganges)",
      image: "https://img.freepik.com/premium-photo/bunch-colorful-boats-floating-against-crowd-people-tourist-pilgrims-kedar-ghat-ganges_1048944-1720668.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Varanasi, one of the oldest cities in the world, is a spiritual hub along the Ganges River. It’s known for its ghats and ancient temples.",
      keyHighlights: [
        "Kashi Vishwanath Temple",
        "Dashashwamedh Ghat",
        "Sarnath"
      ],
      location: {
        lat: 25.3176,
        lng: 82.9739
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 800,
      recommendedDays: 5
    },
    {
      cityName: "Goa",
      image: "https://img.freepik.com/free-photo/rest-sunshine-atoll-bungalow-holiday_1232-3876.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Goa is famous for its pristine beaches and vibrant nightlife. It’s a blend of Portuguese heritage and tropical charm.",
      keyHighlights: [
        "Baga Beach",
        "Fort Aguada",
        "Basilica of Bom Jesus"
      ],
      location: {
        lat: 15.2993,
        lng: 74.124
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 1900,
      recommendedDays: 5
    },
    {
      cityName: "Kerala Backwaters",
      image: "https://img.freepik.com/premium-photo/houseboat-kerala-backwaters-india_163782-3931.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "The Kerala Backwaters offer a serene network of canals, rivers, and lakes. Houseboat cruises showcase lush greenery and village life.",
      keyHighlights: [
        "Alleppey Backwaters",
        "Kumarakom",
        "Vembanad Lake"
      ],
      location: {
        lat: 9.4981,
        lng: 76.3388
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 2500,
      recommendedDays: 5
    },
    {
      cityName: "Munnar",
      image: "https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-761.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Munnar is a picturesque hill station in Kerala, known for its tea plantations and misty mountains. It’s a haven for nature lovers.",
      keyHighlights: [
        "Eravikulam National Park",
        "Tea Museum",
        "Mattupetty Dam"
      ],
      location: {
        lat: 10.0889,
        lng: 77.0595
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 2000,
      recommendedDays: 4
    },
    {
      cityName: "London",
      image: "https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "London, the vibrant capital of the UK, blends history with modernity. Iconic landmarks and diverse culture define this global city.",
      keyHighlights: [
        "Big Ben",
        "Tower of London",
        "British Museum"
      ],
      location: {
        lat: 51.5074,
        lng: -0.1278
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 26900,
      recommendedDays: 3
    },
    {
      cityName: "Île-de-France",
      image: "https://img.freepik.com/free-photo/beautiful-shot-rock-bound-peninsula-near-sea-cape-vilan-galicia-spain_181624-51046.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Île-de-France, centered around Paris, is rich in art, history, and culture. It’s home to world-famous landmarks and museums.",
      keyHighlights: [
        "Eiffel Tower",
        "Louvre Museum",
        "Notre-Dame Cathedral"
      ],
      location: {
        lat: 48.8566,
        lng: 2.3522
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 45900,
      recommendedDays: 3
    },
    {
      cityName: "Provence, France",
      image: "https://img.freepik.com/free-photo/abbey-senanque-blooming-rows-lavender-flowers-gordes-luberon-vaucluse-provence-france-europe_268835-1291.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Provence is famed for its lavender fields, charming villages, and Mediterranean climate. It’s a region of art and cuisine.",
      keyHighlights: [
        "Avignon Palace",
        "Gordes Village",
        "Lavender Fields"
      ],
      location: {
        lat: 43.9493,
        lng: 4.8055
      },
      transportOptions:"Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 43600,
      recommendedDays: 4
    },
    {
      cityName: "Tuscany, Italy",
      image: "https://img.freepik.com/free-photo/beautiful-rustic-house-landscape_23-2151918077.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Tuscany is renowned for its rolling hills, vineyards, and Renaissance art. Florence and Siena are cultural gems.",
      keyHighlights: [
        "Florence Cathedral",
        "Leaning Tower of Pisa",
        "Siena’s Piazza del Campo"
      ],
      location: {
        lat: 43.7696,
        lng: 11.2558
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 35000,
      recommendedDays: 5
    },
    {
      cityName: "Venice",
      image: "https://img.freepik.com/free-photo/photo-canal-city_1163-159.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Venice, the city of canals, is a masterpiece of architecture and history. Its unique waterways captivate visitors.",
      keyHighlights: [
        "St. Mark’s Square",
        "Grand Canal",
        "Doge’s Palace"
      ],
      location: {
        lat: 45.4408,
        lng: 12.3155
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 33000,
      recommendedDays: 5
    },
    {
      cityName: "Grand Canyon National Park",
      image: "https://img.freepik.com/free-photo/aerial-shot-grand-canyon-national-park-usa_181624-31611.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "The Grand Canyon is a natural wonder with breathtaking vistas and vast landscapes. It’s a must-see in Arizona.",
      keyHighlights: [
        "South Rim",
        "Bright Angel Trail",
        "Havasu Falls"
      ],
      location: {
        lat: 36.0544,
        lng: -112.1401
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 27900,
      recommendedDays: 2
    },
    {
      cityName: "Niagara Falls",
      image: "https://img.freepik.com/free-photo/niagara-falls-closeup-dusk_649448-3268.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Niagara Falls is a spectacular trio of waterfalls straddling the US-Canada border. Its power and beauty are awe-inspiring.",
      keyHighlights: [
        "Maid of the Mist",
        "Cave of the Winds",
        "Niagara SkyWheel"
      ],
      location: {
        lat: 43.0962,
        lng: -79.0377
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 60000,
      recommendedDays: 4
    },
    {
      cityName: "Barcelona, Spain",
      image: "https://img.freepik.com/free-photo/view-park-guell-winter-barcelona_1398-4411.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Barcelona blends Gothic charm with modernist architecture, like Gaudí’s works. Its beaches and cuisine are vibrant.",
      keyHighlights: [
        "Sagrada Família",
        "Park Güell",
        "La Rambla"
      ],
      location: {
        lat: 41.3851,
        lng: 2.1734
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 80000,
      recommendedDays: 5
    },
    {
      cityName: "Dalmatia, Croatia",
      image: "https://img.freepik.com/free-photo/beautiful-aerial-view-cala-s-almunia-beach-spainb_181624-50046.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Dalmatia boasts stunning Adriatic coastlines and historic towns like Dubrovnik. Its islands are perfect for sailing.",
      keyHighlights: [
        "Dubrovnik Old Town",
        "Diocletian’s Palace",
        "Krka National Park"
      ],
      location: {
        lat: 43.5081,
        lng: 16.4402
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 28200,
      recommendedDays: 5
    },
    {
      cityName: "Amsterdam",
      image: "https://img.freepik.com/free-photo/dark-clouds-canal-amsterdam_1304-5376.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Amsterdam is famous for its picturesque canals and world-class museums. Its cycling culture adds charm.",
      keyHighlights: [
        "Rijksmuseum",
        "Anne Frank House",
        "Vondelpark"
      ],
      location: {
        lat: 52.3676,
        lng: 4.9041
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 75000,
      recommendedDays: 3
    },
    {
      cityName: "Greek Islands",
      image: "https://img.freepik.com/free-photo/traditional-house-interior-design_23-2151050908.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "The Greek Islands, like Santorini and Mykonos, offer whitewashed villages and turquoise waters. They’re a Mediterranean paradise.",
      keyHighlights: [
        "Santorini Caldera",
        "Mykonos Windmills",
        "Crete’s Knossos"
      ],
      location: {
        lat: 36.3932,
        lng: 25.4615
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 42000,
      recommendedDays: 3
    },
    {
      cityName: "Cape Town",
      image: "https://img.freepik.com/free-photo/breathtaking-view-rocky-cliffs-by-ocean-captured-cape-town-south-africa_181624-32009.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Cape Town is nestled between Table Mountain and the Atlantic Ocean. It’s a hub of culture and natural beauty.",
      keyHighlights: [
        "Table Mountain",
        "Robben Island",
        "Cape of Good Hope"
      ],
      location: {
        lat: -33.9249,
        lng: 18.4241
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 28000,
      recommendedDays: 2
    },
    {
      cityName: "Sydney",
      image: "https://img.freepik.com/premium-photo/downtown-sydney-skyline-australia-from-top-view-twilight_255553-249.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Sydney is known for its iconic Opera House and Harbour Bridge. Its beaches and lifestyle are quintessentially Australian.",
      keyHighlights: [
        "Sydney Opera House",
        "Bondi Beach",
        "Sydney Harbour Bridge"
      ],
      location: {
        lat: -33.8688,
        lng: 151.2093
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 35000,
      recommendedDays: 4
    },
    {
      cityName: "Bangkok",
      image: "https://img.freepik.com/free-photo/wat-arun-temple-bangkok-thailand_335224-972.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Bangkok is a bustling metropolis with ornate temples and vibrant street markets. It’s a gateway to Thai culture.",
      keyHighlights: [
        "Grand Palace",
        "Wat Arun",
        "Chatuchak Market"
      ],
      location: {
        lat: 13.7563,
        lng: 100.5018
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 20000,
      recommendedDays: 2
    },
    {
      cityName: "Hong Kong",
      image: "https://img.freepik.com/free-photo/scene-victoria-harbour-hong-kong_74190-223.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Hong Kong is a dynamic city with a stunning skyline and rich Cantonese heritage. Victoria Harbour is a highlight.",
      keyHighlights: [
        "Victoria Peak",
        "Temple Street Night Market",
        "Tian Tan Buddha"
      ],
      location: {
        lat: 22.3193,
        lng: 114.1694
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 28000,
      recommendedDays: 3
    },
    {
      cityName: "Dubai",
      image: "https://img.freepik.com/free-photo/futuristic-dubai-landscape_23-2151339742.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740",
      description: "Dubai is a city of superlatives, with towering skyscrapers and luxury shopping. The desert and culture add depth.",
      keyHighlights: [
        "Burj Khalifa",
        "Dubai Mall",
        "Palm Jumeirah"
      ],
      location: {
        lat: 25.2048,
        lng: 55.2708
      },
      transportOptions: "Accessible by road, air, and public transport.",
      bestMonthsToVisit: "October to March",
      timeFlexibility: "All year",
      amount: 60900,
      recommendedDays: 4
    }
  ];

  export default destinations