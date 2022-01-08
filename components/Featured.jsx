import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import React, { useState } from 'react';

const Featured = () => {
    const [index, setIndex] = useState(0)
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png"
    ];
    const handleArrow = (direction) => {
        if (direction === 'l') {
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if (direction === 'r') {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }
    return (
        <div className={styles.container}>
            <div onClick={() => handleArrow('l')} style={{ left: 0 }} className={styles.arrowContainer}>
                <Image objectFit='contain' src='/img/arrowl.png' layout='fill' alt='' />
            </div>
            <div style={{ transform: `translateX(${-100 * index}vw)` }} className={styles.wrapper}>
                {images.map((img, i) => (
                    <div key={i} className={styles.imageContainer}>
                        <Image objectFit='contain' src={img} layout='fill' alt='' />
                    </div>
                ))}
            </div>
            <div onClick={() => handleArrow('r')} style={{ right: 0 }} className={styles.arrowContainer}>
                <Image objectFit='contain' src='/img/arrowr.png' layout='fill' alt='' />
            </div>
        </div>
    );
};

export default Featured;