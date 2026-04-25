import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Star, Sparkles, Heart, Camera, CakeSlice } from "lucide-react";

const shop = {
  name: "Choco Lips",
  tagline: "Fresh waffles, crepes, pancakes & fruit platters",
  address: "Urban City Food Court Ambagahandhiya, Colombo",
  hours: "Open daily: 10:00 AM - 07:00 PM",
  phoneDisplay: "0756715141/ 0773101866",
  phoneHref: "0756715141",
  instagram: "@chocolips",
};

const products = [
  { name: "Golden Waffles", desc: "Crispy outside, fluffy inside, topped with chocolate, berries, cream, or ice cream.", emoji: "🧇" },
  { name: "French Crepes", desc: "Soft folded crepes filled with Nutella, fruits, caramel, lotus, or vanilla cream.", emoji: "🥞" },
  { name: "Fluffy Pancakes", desc: "Stacked pancakes with honey, maple syrup, berries, butter, and whipped cream.", emoji: "🍯" },
  { name: "Fruit Platters", desc: "Fresh seasonal fruits arranged beautifully for sharing, gifting, and celebrations.", emoji: "🍓" },
];

const menuItems = [
  { name: "Nutella Strawberry Waffle", price: "$8.50" },
  { name: "Lotus Biscoff Crepe", price: "$7.90" },
  { name: "Honey Butter Pancake Stack", price: "$8.20" },
  { name: "Chocolate Banana Crepe", price: "$7.50" },
  { name: "Mixed Berry Fruit Platter", price: "$10.00" },
  { name: "Ice Cream Waffle Bowl", price: "$9.50" },
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
            <a href="#favorites">Favorites</a>
            <a href="#gallery">Gallery</a>
            <a href="#visit">Visit</a>
          </div>
          <a href="#visit" className="nav-button">Visit Us</a>
        </nav>

        <div id="home" className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="pill"><Sparkles size={18} /> Fresh desserts made daily</div>
            <h1>Waffles, Crepes & Sweet Plates That Make You Smile.</h1>
            <p className="hero-text">A cozy dessert shop serving golden waffles, soft crepes, fluffy pancakes, and colorful fruit platters made fresh for every craving.</p>
            <div className="hero-actions">
              <a href="#menu" className="primary-button">Explore Menu</a>
              <a href="#visit" className="secondary-button">Find Location</a>
            </div>
          </motion.div>

          <div className="dessert-art">
            <motion.div variants={floatingAnimation} animate="animate" className="float-card card-one"><div>🧇</div><p>Chocolate Waffle</p></motion.div>
            <motion.div variants={floatingAnimation} animate="animate" className="float-card card-two"><div>🍓</div><p>Fresh Fruits</p></motion.div>
            <motion.div variants={floatingAnimation} animate="animate" className="float-card card-three"><div>🥞</div><p>Fluffy Pancakes</p></motion.div>
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
        <div className="favorites-grid">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="eyebrow light">Signature menu</p>
            <h2>Customer favorites</h2>
            <p>Perfect for dine-in, takeaway, birthday treats, date nights, or a sweet evening with friends.</p>
          </motion.div>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <motion.div key={item.name} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="menu-card">
                <span><Star size={20} /> {item.name}</span>
                <strong>{item.price}</strong>
              </motion.div>
            ))}
          </div>
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
        <SectionHeading eyebrow="Gallery" title="Desserts worth sharing" text="Use this section for real shop photos later. For now, it gives the page a playful animated gallery feel." />
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
