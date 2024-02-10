import React from "react";
import styles from "../Styles/Products.module.css";
import background from "../assets/background.jpg";
import Header from "./Header";
import Card from "./Card";

const Products = () => {
  return (
    <div>
      <header className={styles.header}>
        <Header></Header>
      </header>
      <nav className={styles.filterBar}>
        {/* <section className={styles.section}>
          <label htmlFor="search"></label>
          <input type="search" name="search" placeholder="Search for items" />
          <button>Search</button>
        </section>
        <section className={styles.section}>
          <h3>Amount</h3>
          <label htmlFor="kilogram">
            <input type="checkbox" name="kilogram" />
            Kilogram
          </label>
          <label htmlFor="gram">
            <input type="checkbox" name="gram" />
            Gram
          </label>
        </section>
        <section className={styles.section}>
          <h3>Category</h3>
          <label htmlFor="spice">
            <input type="checkbox" name="spice" />
            Spice
          </label>
          <label htmlFor="herbs">
            <input type="checkbox" name="herbs" />
            Herbs
          </label>
        </section>
        <section className={styles.section}>
          <h3>Price</h3>
          <label htmlFor="kilogram">
            0
            <input type="range" name="kilogram" />
            10000
          </label>
        </section> */}
      </nav>
      <div className={styles.page}>
        <div className={styles.market}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Products;
