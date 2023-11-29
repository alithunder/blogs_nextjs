import React from 'react';
import Link from 'next/link';
import styles from './card.module.css';
import { format } from 'date-fns';
import Image from 'next/image';

const Card = ({ data }) => {
    if (!data) {
        return null;
      }
  return (
    <div className={styles.card}>
  <Image className={styles.img} src={data.photo_url} alt="Blog Image" width={400} height={200} />
      <h3 className={styles.h1}>{data.title}</h3>
      <p className={styles.by}>{data.category}</p>
      <div className={styles.botcard}>
      <Link className={styles.arti} href={`/${data.id}`}>Read article</Link>

        <p className={styles.by}>{format(new Date(data.created_at), 'MMMM dd,yyyy')}</p>
      </div>
    </div>
  );
};

export default Card;
