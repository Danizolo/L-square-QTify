/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 23/09/2025 - 16:24:43
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 23/09/2025
 * - Author          : DHANUSH
 * - Modification    :
 **/
import React from "react";
import Section from "../components/Section/Section";
import styles from "./Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      {/* Hero section */}
      <Hero />
      <Section
        title="Top Albums"
        apiUrl="https://qtify-backend-labs.crio.do/albums/top"
      />
      <Section
        title="New Albums"
        apiUrl="https://qtify-backend-labs.crio.do/albums/new"
      />
      <Section
        title="Songs"
        apiUrl="https://qtify-backend-labs.crio.do/songs"
        isSongsSection={true}
      />
    </div>
  );
};

export default Home;
