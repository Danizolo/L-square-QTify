/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 23/09/2025 - 13:30:30
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 23/09/2025
 * - Author          : DHANUSH
 * - Modification    :
 **/
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    // <div>Hello</div>
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
