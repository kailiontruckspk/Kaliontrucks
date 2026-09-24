/*
  KAILION TRUCKS — Fleet data
  ---------------------------------------------------------
  HOW TO ADD A NEW TRUCK (no coding needed):
  1. Copy an existing block below (from "{" to "},").
  2. Change the "id" to something unique, no spaces (e.g. "my-new-truck").
  3. Update name, nameCn, category, image, specs, features, price.
  4. Put the truck's photo in assets/img/ and set "image" to that filename.
  5. Save the file. The truck appears automatically on services.html
     and gets its own page at truck.html?id=my-new-truck
  ---------------------------------------------------------
*/
const TRUCKS = [
  {
    id: "tianjin-prime-mover",
    name: "KAILION Tianjin Prime Mover",
    category: "Prime Mover",
    image: "assets/img/truck-tianjin.jpg",
    price: "PKR 1120 Million",
    specs: [
      ["Brand/Model", " KAILION Tianjin"],
      ["Cab / Drive", "Right-Hand Drive (RHD)"],
      ["Engine / Power", "Kangji — 190 HP"],
      ["Engine Model", "B190-33"],
      ["Emission Standard", "National III"],
      ["Transmission", "Small 8-Speed"],
      ["Axle", "145"],
      ["Main Beam", "280 mm Double-Layer (7+5)"],
      ["Tyres", "1000R20 Steel Wire Tyres"],
      ["Air Conditioning", "Included"],
      ["Chassis Length", "22 FT"],
      ["Front Wheel Nuts", "10 Nuts"],
      ["Vehicle Type", "Prime Mover / Tractor Head"],
      ["Turn Plate", "Turn Plate / Fifth-Wheel Coupling"]
    ],
    features: [
      "190 HP Kangji B190-33 engine",
      "National III engine specification",
      "Right-hand-drive cab",
      "Small 8-speed transmission",
      "280 mm double-layer main beam (7+5)"
    ]
  },
  {
    id: "d912",
    name: "KAILION D912",
    category: "Cab & Chassis",
    image: "assets/img/truck-d912.jpg",
    price: "PKR 7.35 Million",
    specs: [
      ["rand/Model", "KAILION D912"],
      ["Cab / Drive", "Right-Hand Drive (RHD)"],
      ["Engine / Power", "Kailion 140 HP"],
      ["Engine Model", "YC4D139-33"],
      ["Emission Standard", "National III"],
      ["Transmission", "8-Speed, 8JS85E"],
      ["Axle", "1061"],
      ["Frame", "188 mm, Double-Layer"],
      ["Tyres", "8.25R16 Steel Wire Tyres"],
      ["Air Conditioning", "Included"],
      ["Front Wheel Nuts", "8–10 Nuts"]
    ],
    features: [
      "140 HP Kailion/Yuchai specification",
      "YC4D139-33 National III engine",
      "8-speed 8JS85E transmission",
      "188 mm double-layer frame",
      "8.25R16 steel wire tyres"
    ]
  },
  {
    id: "green-spraying",
    name: "Green Spraying / Sprinkler Truck",
    category: "Landscaping",
    image: "assets/img/truck-sprinkler.jpg",
    thumb: "assets/img/ls-green-spraying.jpg",
    price: null,
    specs: [
      ["Wheelbase", "3950 mm"],
      ["Tank Volume", "12 m³"],
      ["Front Flush Width", "14–18 m"],
      ["Rear Sprinkler Coverage", "8–10 m³"],
      ["Side Spray Width", "10–12 m"],
      ["High-Pressure Water Cannon Range", "35 m"],
      ["Self-Priming Height", "7 m"]
    ],
    features: [
      "Digitally controlled spray patterns",
      "Long-range water cannon for dust suppression",
      "Modular tank, low-maintenance design"
    ]
  },
  {
    id: "compactor-garbage",
    name: "Compactor Garbage Truck",
    category: "Landscaping",
    image: "assets/img/truck-compactor.jpg",
    thumb: "assets/img/ls-compactor-garbage.jpg",
    price: null,
    specs: [
      ["Configuration", "8×4 rear-loading compactor"],
      ["Chassis", "Sinotruk"],
      ["Body Type", "Compression / Compactor"],
      ["Application", "Municipal & commercial waste collection"]
    ],
    features: [
      "High-density hydraulic compaction",
      "Sealed body prevents leakage and odor",
      "Built for daily heavy-duty collection routes"
    ]
  },
  {
    id: "cement-slurry-spreading",
    name: "Cement Slurry Spreading Truck",
    category: "Road Maintenance",
    image: "assets/img/truck-cement-slurry.jpg",
    thumb: "assets/img/rm-cement-slurry-spreading.jpg",
    price: null,
    specs: [
      ["Wheelbase", "3950 mm"],
      ["Water Tank / Cement Tank", "11.5 / 3.5 m³"],
      ["Engine Power", "121 / 143 kW"],
      ["Water Pump", "60–90 kW"],
      ["Slurry Pump Power", "4 kW"],
      ["Stirred Tank", "200 L"],
      ["Cement Spreading Width", "6–10 m"]
    ],
    features: [
      "Exclusive hydraulic technology for smoother, safer operation",
      "Precise spreading-volume control, fully adjustable",
      "High-efficiency oil-boiler heating for faster setting"
    ]
  },
  {
    id: "asphalt-spreading",
    name: "Asphalt Spreading Truck",
    category: "Road Maintenance",
    image: "assets/img/truck-asphalt.jpg",
    thumb: "assets/img/rm-asphalt-spreading.jpg",
    price: null,
    specs: [
      ["Wheelbase", "3800 mm"],
      ["Tank Volume", "7 m³"],
      ["Engine Power", "121 kW"],
      ["Asphalt Pump", "QGB680"],
      ["Asphalt Pump Flow Rate", "680 L/min"],
      ["Asphalt Spreading Width", "≤ 4.5 m"],
      ["Tail Nozzles", "32"]
    ],
    features: [
      "Accurate, freely adjustable spreading rate",
      "32 tail nozzles for even asphalt coverage",
      "Electrified, centralized controls — safe and automated"
    ]
  },
  {
    id: "dust-suppression",
    name: "Multifunctional Dust Suppression Truck",
    category: "Landscaping",
    image: "assets/img/ls-dust-suppression.jpg",
    price: null, priceNote: "",
    specs: [], features: []
  },
  {
    id: "dump-garbage",
    name: "Dump Garbage Truck",
    category: "Landscaping",
    image: "assets/img/ls-dump-garbage.jpg",
    price: null, priceNote: "",
    specs: [], features: []
  },
  {
    id: "self-loading-garbage",
    name: "Self-Loading & Unloading Garbage Truck",
    category: "Landscaping",
    image: "assets/img/ls-self-loading-garbage.jpg",
    price: null, priceNote: "",
    specs: [], features: []
  },
  {
    id: "kitchen-garbage",
    name: "Kitchen Garbage Truck",
    category: "Landscaping",
    image: "assets/img/ls-kitchen-garbage.jpg",
    price: null, priceNote: "",
    specs: [], features: []
  },
  {
    id: "side-compactor-garbage",
    name: "Side-Loading Compactor Garbage Truck",
    category: "Landscaping",
    image: "assets/img/ls-side-compactor-garbage.jpg",
    price: null, priceNote: "",
    specs: [], features: []
  },
  {
    id: "removable-compartment",
    name: "Removable Compartment Garbage Truck",
    category: "Landscaping",
    image: "assets/img/ls-removable-compartment.jpg",
    price: null, priceNote: "",
    specs: [], features: []
  },
  {
    id: "anti-collision-buffer",
    name: "Anti-Collision Buffer Truck",
    category: "Road Maintenance",
    image: "assets/img/rm-anti-collision-buffer.jpg",
    price: null, priceNote: "",
    specs: [], features: []
  },
  {
    id: "multifunc-cement-slurry",
    name: "Multifunctional Cement Slurry Spreading Truck",
    category: "Road Maintenance",
    image: "assets/img/rm-multifunc-cement-slurry.jpg",
    price: null, priceNote: "",
    specs: [], features: []
  },
  {
    id: "hot-recycled-asphalt",
    name: "Hot Recycled Asphalt Pavement Maintenance Truck",
    category: "Road Maintenance",
    image: "assets/img/rm-hot-recycled-asphalt.jpg",
    price: null, priceNote: "",
    specs: [], features: []
  },
  {
    id: "asphalt-gravel-sealing",
    name: "Asphalt Gravel Synchronous Sealing Truck",
    category: "Road Maintenance",
    image: "assets/img/rm-asphalt-gravel-sealing.jpg",
    price: null, priceNote: "",
    specs: [], features: []
  },
  {
    id: "kailion-1729",
    name: "KAILION 1729",
    category: "Cab & Chassis",
    image: "assets/img/truck-1730.jpg",
    price: "PKR 5.6 Million",
    specs: [
      ["Model/Brand", "KAILION 1730"],
      ["Drive / Body", "Right-Hand Drive (RHD)"],
      ["Engine", "Yunnei 4102QB —95 HP"],
      ["Transmission", "5-Speed, 140"],
      ["Frame / Beam", "188mm, Single-Layer Beam"],
      ["Axles", "1058 Front"],
      ["Tyres", "7.00R16 Steel Wire Tyres"],
      ["Air Conditioning", "Included"],
      ["Chassis / Body Length", "14FT"],
      ["Front Wheel Nuts", "6 Nuts"]
    ],
    features: [
      "Yunnei 4102QB —95 HP engine",
      "5-speed, 140 transmission",
      "188 mm single-layer beam",
      "14ft chassis/body"
    ]
  },
  {
    id: "kailion-1730",
    name: "KAILION 1730",
    category: "Cab & Chassis",
    image: "assets/img/truck-1730.jpg",
    price: "PKR 5.6 Million",
    specs: [
      ["Model/Brand", "KAILION 1730"],
      ["Drive / Body", "Right-Hand Drive (RHD)"],
      ["Engine", "Yunnei — 115 HP"],
      ["Transmission", "5-Speed Tatung"],
      ["Frame / Beam", "192 mm, Double-Layer Beam"],
      ["Axles", "1058 Front & Rear Axles"],
      ["Tyres", "7.00R16"],
      ["Air Conditioning", "Included"],
      ["Chassis / Body Length", "14–16 FT"],
      ["Front Wheel Nuts", "6–8 Nuts"]
    ],
    features: [
      "115 HP Yunnei engine",
      "5-speed Tatung transmission",
      "192 mm double-layer beam",
      "Suitable for 14–16 ft chassis/body"
    ]
  },
  {
    id: "kailion-1731",
    name: "KAILION 1731",
    category: "Cab & Chassis",
    image: "assets/img/truck-1731.jpg",
    price: "PKR 5.85 Million",
    specs: [
      ["Cab / Drive", "Right-Hand Drive (RHD)"],
      ["Engine / Power", "Yuchai YCD4F32 — 130 HP"],
      ["Emission Standard", "National Euro III"],
      ["Transmission", "5-Speed, 140"],
      ["Axle", "1058"],
      ["Frame", "188 mm, Double-Layer"],
      ["Tyres", "7.00R16 Steel Wire Tyres"],
      ["Air Conditioning", "Included"],
      ["Chassis Length", "16 FT"],
      ["Front Wheel Nuts", "6–8 Nuts"]
    ],
    features: [
      "Yuchai YCD4F32 130 HP engine",
      "National Euro III specification",
      "5-speed 140 transmission",
      "188 mm double-layer frame"
    ]
  }
];
