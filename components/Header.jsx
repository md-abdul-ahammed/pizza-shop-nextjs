import Image from 'next/image';
import React from 'react';
import styles from '../styles/Header.module.css';


const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image width='32' height='32' src="/img/telephone.png" alt="call-logo" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW !</div>
                    <div className={styles.text}>01865 763836 </div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image width='160' height='69' src="/img/ahammed-logo.png" alt="call-logo" />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image width='30' height='30' src="/img/cart.png" alt="call-logo" />
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    );
};

export default Header;