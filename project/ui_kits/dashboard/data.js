// Ebrostay host dashboard data (window.EBR_DASH)
window.EBR_DASH = {
  host: { name: "Marta Gil", initials: "MG" },
  stats: [
    { key: "earnings", label: "Earnings this month", value: "€4,820", delta: "+12%", up: true, icon: "wallet" },
    { key: "occupancy", label: "Occupancy", value: "78%", delta: "+6%", up: true, icon: "calendar-check" },
    { key: "checkins", label: "Upcoming check-ins", value: "5", delta: "next 7 days", up: null, icon: "log-in" },
    { key: "rating", label: "Overall rating", value: "4.90", delta: "126 reviews", up: null, icon: "star" },
  ],
  // 12 months of earnings for the bar chart (in €)
  earnings: [2100, 2480, 2950, 3300, 3120, 3680, 4200, 4650, 4820, 4100, 3600, 3900],
  listings: [
    { id: "tubo",  title: "Sunny loft in El Tubo",       area: "Casco Histórico", img: "https://picsum.photos/seed/ebro-tubo/240/200",  price: 118, status: "Listed",  occ: 82, rating: 4.92 },
    { id: "river", title: "River-view flat near the Ebro", area: "Las Fuentes",   img: "https://picsum.photos/seed/ebro-river/240/200", price: 134, status: "Listed",  occ: 74, rating: 4.87 },
    { id: "indep", title: "Elegant flat on Independencia", area: "Centro",        img: "https://picsum.photos/seed/ebro-indep/240/200", price: 156, status: "Listed",  occ: 88, rating: 4.95 },
    { id: "delic", title: "Modern duplex in Delicias",     area: "Delicias",      img: "https://picsum.photos/seed/ebro-delicias/240/200", price: 108, status: "Snoozed", occ: 0,  rating: 4.83 },
  ],
  bookings: [
    { ref: "EBR-4821-ZGZ", guest: "Carlos M.",  listing: "Sunny loft in El Tubo",      inDate: "12 Jun", outDate: "15 Jun", nights: 3, total: 389, status: "Confirmed" },
    { ref: "EBR-4822-ZGZ", guest: "Élodie R.",  listing: "River-view flat near the Ebro", inDate: "14 Jun", outDate: "18 Jun", nights: 4, total: 612, status: "Confirmed" },
    { ref: "EBR-4823-ZGZ", guest: "Tom B.",     listing: "Elegant flat on Independencia", inDate: "16 Jun", outDate: "19 Jun", nights: 3, total: 524, status: "Pending" },
    { ref: "EBR-4819-ZGZ", guest: "Núria S.",   listing: "Sunny loft in El Tubo",      inDate: "20 Jun", outDate: "23 Jun", nights: 3, total: 389, status: "Confirmed" },
    { ref: "EBR-4810-ZGZ", guest: "Hannah K.",  listing: "Modern duplex in Delicias",  inDate: "02 Jun", outDate: "05 Jun", nights: 3, total: 359, status: "Completed" },
  ],
  nav: [
    ["layout-dashboard", "Overview"],
    ["home", "Listings"],
    ["calendar-days", "Calendar"],
    ["receipt-text", "Bookings"],
    ["wallet", "Earnings"],
    ["message-square", "Messages"],
    ["settings", "Settings"],
  ],
};
