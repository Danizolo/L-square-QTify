/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 23/09/2025 - 16:29:33
 *
 * MODIFICATION LOG
 * - Version         : 1.2.0
 * - Date            : 25/09/2025
 * - Author          : Assistant (fixes for tests)
 * - Modification    : Normalize API payloads, hide collapse for songs, pass likes for songs, ensure Carousel navigation state
 **/
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";
import styles from "./Section.module.css";

const Section = ({ title, apiUrl, isSongsSection = false }) => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [collapsed, setCollapsed] = useState(false);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        // Normalize payload: API might return { data: [...] } or [...] directly
        const items = response.data?.data ?? response.data ?? [];
        setData(items);
        if (isSongsSection) {
          setFilteredSongs(items);
        }
      } catch (error) {
        console.error(`Error fetching data from ${apiUrl}:`, error);
      }
    };
    fetchData();
  }, [apiUrl, isSongsSection]);

  useEffect(() => {
    if (isSongsSection) {
      const fetchGenres = async () => {
        try {
          const response = await axios.get("https://qtify-backend.labs.crio.do/genres");
          const genresData = response.data?.data ?? response.data ?? [];
          setGenres([{ key: "all", label: "All" }, ...genresData]);
        } catch (error) {
          console.error("Error fetching genres:", error);
        }
      };
      fetchGenres();
    }
  }, [isSongsSection]);

  useEffect(() => {
    if (isSongsSection) {
      if (selectedGenre === "all") {
        setFilteredSongs(data);
      } else {
        const songsByGenre = data.filter(
          (song) => song.genre?.key === selectedGenre || song.genre === selectedGenre
        );
        setFilteredSongs(songsByGenre);
      }
    }
  }, [data, selectedGenre, isSongsSection]);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const cardComponentProps = isSongsSection
    ? { isSongCard: true }
    : { isSongCard: false };

  // Items that will be shown in Carousel when collapsed or for songs
  const itemsToDisplay = isSongsSection ? filteredSongs : (collapsed ? data : []);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        {!isSongsSection && (
          <button
            onClick={handleCollapseToggle}
            className={styles.collapseButton}
          >
            {collapsed ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {isSongsSection && (
        <>
          <Tabs
            value={selectedGenre}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            className={styles.tabsContainer}
          >
            {genres.map((genre) => (
              <Tab
                key={genre.key}
                label={genre.label}
                value={genre.key}
                className={styles.tab}
              />
            ))}
          </Tabs>

          <Carousel
            data={filteredSongs}
            component={Card}
            cardProps={cardComponentProps}
          />
        </>
      )}

      {!isSongsSection && (
        <>
          {collapsed ? (
            <Carousel
              data={itemsToDisplay}
              component={Card}
              cardProps={cardComponentProps}
            />
          ) : (
            <div className={styles.cardGrid}>
              {Array.isArray(data) && data.map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  follows={item.follows}
                  {...cardComponentProps}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Section;
