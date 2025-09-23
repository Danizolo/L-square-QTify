/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 23/09/2025 - 16:33:01
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 23/09/2025
 * - Author          : DHANUSH
 * - Modification    :
 **/
/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 23/09/2025 - 13:30:30
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 23/09/2025
 * - Author          : DHANUSH
 * - Modification    :
 **/
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div>
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
      </div>
      <div>
        <Button text="Give Feedback" />
      </div>
    </nav>
  );
}

export default Navbar;
