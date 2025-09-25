/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 23/09/2025 - 16:29:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.2.0
    * - Date            : 25/09/2025
    * - Author          : Assistant (moved chip to top center overlay)
**/
import React from 'react';
import { Chip, Card as MuiCard, CardContent, CardMedia } from '@mui/material';
import styles from './Card.module.css';

const Card = ({ image, title, follows = 0, likes = 0, isSongCard = false }) => {
  const chipLabel = isSongCard ? `${likes} Likes` : `${follows} Follows`;

  return (
    <MuiCard className={styles.card}>
      <div className={styles.imageWrapper}>
        <CardMedia
          component="img"
          className={styles.albumImage}
          image={image}
          alt={title}
        />
        <div className={styles.chipContainer}>
          <Chip 
            label={chipLabel} 
            className={styles.chip}
            size="small"
          />
        </div>
      </div>
      <CardContent className={styles.cardContent}>
        <div className={styles.titleContainer}>
          <h4 className={styles.albumTitle}>{title}</h4>
        </div>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
