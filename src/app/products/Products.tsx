'use client';

import Image from 'next/image';

import styles from './Products.module.css';

export const Products = () => {
    return (
        <div className={styles.products}>
            <Image src="/next.svg" alt="svg" width={200} height={50} />
        </div>
    );
};
