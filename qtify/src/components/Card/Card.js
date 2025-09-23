/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 23/09/2025 - 16:29:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/09/2025
    * - Author          : DHANUSH
    * - Modification    : 
**/
import React from 'react';
import { Chip, Card as MuiCard, CardContent, CardMedia } from '@mui/material';
import styles from './Card.module.css';

const Card = ({ image, title, follows, likes, isSongCard }) => {
  const chipLabel = isSongCard ? `${likes} Likes` : `${follows} Follows`;
  
  return (
    <MuiCard className={styles.card}>
      <CardMedia
        component="img"
        className={styles.albumImage}
        image={image}
        alt={title}
      />
      <CardContent className={styles.cardContent}>
        <Chip 
          label={chipLabel} 
          className={styles.chip}
          size="small"
        />
      </CardContent>
      <div className={styles.titleContainer}>
        <h4 className={styles.albumTitle}>{title}</h4>
      </div>
    </MuiCard>
  );
};

export default Card;