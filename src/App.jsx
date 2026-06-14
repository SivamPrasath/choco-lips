import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Sparkles, Heart, Camera, CakeSlice } from "lucide-react";

const shop = {
  name: "Choco Lips",
  tagline: "Fresh waffles, crepes, churros & dessert platters",
  address: "Urban City Food Court Ambagahandhiya, Colombo",
  hours: "Open daily: 10:00 AM - 07:00 PM",
  phoneDisplay: "0756715141/ 0773101866",
  phoneHref: "0756715141",
  instagram: "@chocolips",
};

// const products = [
//   { name: "Golden Waffles", desc: "Crispy outside, fluffy inside, topped with chocolate, berries, cream, or ice cream.", emoji: "🧇" },
//   { name: "French Crepes", desc: "Soft folded crepes filled with Nutella, fruits, caramel, lotus, or vanilla cream.", emoji: "🥞" },
//   { name: "Fluffy Pancakes", desc: "Stacked pancakes with honey, maple syrup, berries, butter, and whipped cream.", emoji: "🍯" },
//   { name: "Fruit Platters", desc: "Fresh seasonal fruits arranged beautifully for sharing, gifting, and celebrations.", emoji: "🍓" },
// ];

const products = [
  {
    name: "Sweet Waffles",
    desc: "Choose from Milk Choco, White Choco, Strawberry or Nutella spreads with your favorite toppings.",
    emoji: "🧇",
  },
  {
    name: "Sweet Crepes",
    desc: "Freshly made crepes with premium chocolate spreads and delicious toppings.",
    emoji: "🥞",
  },
  {
    name: "Churros",
    desc: "Rs. 990 • Add Nuts +200 • Add Ice Cream +150",
    emoji: "🍫",
  },
  {
    name: "Waffle Platter",
    desc: "Rs. 1590 • Add Nuts +200 • Add Ice Cream +150",
    emoji: "🧇",
  },
];

// const menuItems = [
//   { name: "Nutella Strawberry Waffle", price: "$18.50" },
//   { name: "Lotus Biscoff Crepe", price: "$7.90" },
//   { name: "Honey Butter Pancake Stack", price: "$8.20" },
//   { name: "Chocolate Banana Crepe", price: "$7.50" },
//   { name: "Mixed Berry Fruit Platter", price: "$10.00" },
//   { name: "Ice Cream Waffle Bowl", price: "$9.50" },
// ];

const menuPricing = [
  {
    item: "Base Spread Only",
    milk: "500",
    white: "500",
    strawberry: "650",
    nutella: "650",
  },
  {
    item: "Brownie",
    milk: "700",
    white: "750",
    strawberry: "850",
    nutella: "850",
  },
  {
    item: "Strawberry Maniac",
    milk: "750",
    white: "750",
    strawberry: "850",
    nutella: "850",
  },
  {
    item: "Oreo",
    milk: "790",
    white: "790",
    strawberry: "900",
    nutella: "890",
  },
  {
    item: "Banana",
    milk: "550",
    white: "650",
    strawberry: "700",
    nutella: "700",
  },
  {
    item: "Strawberry",
    milk: "750",
    white: "800",
    strawberry: "850",
    nutella: "850",
  },
  {
    item: "Corn Flakes",
    milk: "650",
    white: "700",
    strawberry: "800",
    nutella: "800",
  },
  {
    item: "Cadbury Chocolate",
    milk: "900",
    white: "950",
    strawberry: "1100",
    nutella: "1100",
  },
  {
    item: "Snickers",
    milk: "900",
    white: "950",
    strawberry: "1100",
    nutella: "1100",
  },
  {
    item: "Nut Crunch",
    milk: "800",
    white: "800",
    strawberry: "950",
    nutella: "950",
  },
  {
    item: "KitKat",
    milk: "850",
    white: "850",
    strawberry: "950",
    nutella: "950",
  },
  {
    item: "Marshmallows",
    milk: "600",
    white: "650",
    strawberry: "790",
    nutella: "790",
  },
];

const gallery = ["🧇", "🍓", "🥞", "🍫", "🍌", "🍯"];

const floatingAnimation = {
  animate: {
    y: [0, -16, 0],
    rotate: [0, 3, -3, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-text">{text}</p>
    </motion.div>
  );
}

export default function App() {
  return (
    <main>
      <section className="hero-section">
        <div className="blob blob-left" />
        <div className="blob blob-right" />

        <nav className="navbar">
          <a href="#home" className="logo"><span>Choco</span> Lips</a>
          <div className="nav-links">
            <a href="#menu">Menu</a>
            <a href="#favorites">Pricing</a>
            <a href="#gallery">Gallery</a>
            <a href="#visit">Visit</a>
          </div>
          <a href="#visit" className="nav-button">Visit Us</a>
        </nav>

        <div id="home" className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="pill"><Sparkles size={18} /> Fresh desserts made daily</div>
            <h1>Waffles, Crepes & Sweet Plates That Make You Smile.</h1>
            <p className="hero-text">A cozy dessert shop serving freshly made sweet waffles, crepes, churros and signature dessert platters prepared for every craving.</p>
            <div className="hero-actions">
              <a href="#menu" className="primary-button">Explore Menu</a>
              <a href="#visit" className="secondary-button">Find Location</a>
            </div>
          </motion.div>

          <div className="dessert-art">
            <motion.div variants={floatingAnimation} animate="animate" className="float-card card-one"><div>🧇</div><p>Chocolate Waffle</p></motion.div>
            <motion.div variants={floatingAnimation} animate="animate" className="float-card card-two"><div>🍫</div><p>Churros</p></motion.div>
            <motion.div variants={floatingAnimation} animate="animate" className="float-card card-three"><div>🧇</div><p>Waffle Platter</p></motion.div>
            <motion.div variants={floatingAnimation} animate="animate" className="float-card card-four"><div>🍫</div><p>Sweet Crepes</p></motion.div>
            <div className="center-shadow" />
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="center-dessert">🍰</motion.div>
          </div>
        </div>
      </section>

      <section id="menu" className="section">
        <SectionHeading eyebrow="Our sweets" title="Made for every craving" text="From warm waffles to fresh fruit platters, every plate is crafted to look beautiful and taste unforgettable." />
        <div className="product-grid">
          {products.map((item, index) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -10, rotate: 1 }} className="product-card">
              <div className="emoji">{item.emoji}</div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
    <section id="favorites" className="favorites-section">

  {/* <div className="section-heading">
    <p className="eyebrow light">Pricing</p>
    <h2>Sweet Waffles</h2>

    <p>
      Choose from Milk Choco, White Choco,
      Strawberry or Nutella spreads.
    </p>
  </div> */}

  <section id="favorites" className="favorites-section">
  <div className="section-heading">
    <p className="eyebrow light">Pricing</p>
    <h2>Sweet Waffles</h2>
    <p>
      Choose from Milk Choco, White Choco,
      Strawberry or Nutella spreads.
    </p>

    
  </div>
</section>

  <div className="pricing-table-wrapper">
    
    <table className="pricing-table">

      <thead>
        
        <tr>
          <th>Item</th>
          <th>Milk</th>
          <th>White</th>
          <th>Strawberry</th>
          <th>Nutella</th>
        </tr>

      </thead>

      <tbody>

        {menuPricing.map((item) => (

          <tr key={item.item}>

            <td>{item.item}</td>

            <td>{item.milk}</td>

            <td>{item.white}</td>

            <td>{item.strawberry}</td>

            <td>{item.nutella}</td>

          </tr>

        ))}

      </tbody>

    </table>
<p className="swipe-hint">
      ← Swipe horizontally →
    </p>
  </div>


  <div style={{ height: "70px" }} />


  <div className="section-heading">

    <p className="eyebrow light">Pricing</p>

    <h2>Sweet Crepes</h2>

    <p>

      Same pricing applies to Sweet Crepes.

    </p>

  </div>


  <div className="pricing-table-wrapper">

    <table className="pricing-table">

      <thead>

        <tr>

          <th>Item</th>

          <th>Milk</th>

          <th>White</th>

          <th>Strawberry</th>

          <th>Nutella</th>

        </tr>

      </thead>

      <tbody>

        {menuPricing.map((item) => (

          <tr key={`crepe-${item.item}`}>

            <td>{item.item}</td>

            <td>{item.milk}</td>

            <td>{item.white}</td>

            <td>{item.strawberry}</td>

            <td>{item.nutella}</td>

          </tr>

        ))}

      </tbody>

    </table>
<p className="swipe-hint">
      ← Swipe horizontally →
    </p>
  </div>

</section>

    
      <section className="section">
        <div className="why-grid">
          {[
            [Heart, "Made with love", "Every dessert is prepared fresh with care and attention."],
            [CakeSlice, "Premium toppings", "Chocolate, fruits, cream, sauces, and crunchy extras."],
            [Camera, "Photo-worthy plates", "Beautiful presentation that customers love to share."],
          ].map(([Icon, title, desc], index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="why-card">
              <Icon size={34} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="gallery" className="section">
        <SectionHeading eyebrow="Gallery" title="Our Dessert Collection" text="Fresh waffles, crepes, churros and dessert platters made with premium ingredients." />
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <motion.div key={`${item}-${index}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? 3 : -3 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.07 }} className="gallery-card">
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="visit" className="visit-section">
        <div className="visit-box">
          <div className="visit-grid">
            <div>
              <p className="eyebrow">Visit us today</p>
              <h2>Your next sweet stop</h2>
              <p>Drop by for freshly made desserts, or call us to prepare your favorite plate before you arrive.</p>
              <div className="contact-list">
                <div><MapPin /> {shop.address}</div>
                <div><Clock /> {shop.hours}</div>
                <div><Phone /> {shop.phoneDisplay}</div>
                <div><Camera /> {shop.instagram}</div>
              </div>
              <div className="hero-actions">
                <a href={`tel:${shop.phoneHref}`} className="primary-dark">Call Now</a>
                <a href={`https://wa.me/${shop.phoneHref.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="secondary-button">WhatsApp Order</a>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="visit-card">
              <div>🍓🧇🥞</div>
              <h3>Sweet moments start here</h3>
              <p>We will publish our Store Image soon.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <footer>© 2026 {shop.name}. {shop.tagline}.</footer>
    </main>
  );
}
