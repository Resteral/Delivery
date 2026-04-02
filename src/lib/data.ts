export const businesses = [
  {
    id: "pnb-eats",
    name: "PNB Eats",
    location: "Effingham, NH",
    town: "Effingham",
    phone: "603-301-0113",
    category: "Pizza & Subs",
    description: "Breakfast, sandwiches, specialty subs, and fresh pizza.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400",
    isOpen: true,
    seating: ["Inside Dining", "Fast Pick-up"],
    products: [
      { id: "p1", name: "Specialty Sub", price: 12.99 },
      { id: "p2", name: "Large Pizza", price: 18.50 },
      { id: "p3", name: "Morning Coffee", price: 3.50 }
    ]
  },
  {
    id: "boyles",
    name: "Boyle's General Store",
    location: "Effingham Falls, NH",
    town: "Effingham",
    phone: "603-539-7888",
    category: "General Store",
    description: "Local convenience, groceries, and neighborhood essentials.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400",
    isOpen: true,
    seating: ["Porch Seating"],
    products: [
      { id: "b1", name: "Local Honey (16oz)", price: 9.00 },
      { id: "b2", name: "Fresh Produce Box", price: 25.00 },
      { id: "b3", name: "Artisanal Cheese", price: 7.50 }
    ]
  },
  {
    id: "muddy-moose",
    name: "Muddy Moose Pub",
    location: "North Conway, NH",
    town: "North Conway",
    phone: "603-356-3827",
    category: "Restaurant",
    description: "Hearty American comfort food in a rustic lodge setting.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400",
    isOpen: true,
    seating: ["Lodge Booths", "Bar Area", "Patio"],
    products: [
      { id: "m1", name: "Moose Burger", price: 16.50 },
      { id: "m2", name: "Lodge Ribs", price: 24.00 },
      { id: "m3", name: "Clam Chowder", price: 8.50 }
    ]
  },
  {
    id: "wolfeboro-dockside",
    name: "Wolfeboro Dockside",
    location: "Wolfeboro, NH",
    town: "Wolfeboro",
    phone: "603-569-3456",
    category: "Seafood & Grill",
    description: "Casual lakeside dining and famous dairy bar treats.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400",
    isOpen: false,
    seating: ["Lakeside Deck", "Inside Hall"],
    products: [
      { id: "w1", name: "Fried Clam Strip Plate", price: 19.99 },
      { id: "w2", name: "Double Scoop Cone", price: 6.50 },
      { id: "w3", name: "Haddock Basket", price: 15.00 }
    ]
  },
  {
    id: "walts-carpentry",
    name: "Walt's Carpentry",
    location: "Effingham, NH",
    town: "Effingham",
    phone: "603-555-0912",
    category: "Home Services",
    description: "Premium custom carpentry, framing, and restorative woodcraft. Quality you can trust in the Lakes Region.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7385?auto=format&fit=crop&q=80&w=400",
    isOpen: true,
    seating: ["On-Site Consultations", "Workshop Visits"],
    products: [
      { id: "wc1", name: "Custom Built-ins", price: 1200.00 },
      { id: "wc2", name: "Framing Consultation", price: 150.00 },
      { id: "wc3", name: "Restoration Project Quote", price: 0.00 }
    ]
  }
];
