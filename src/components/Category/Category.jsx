import React from 'react'
import styles from './Category.module.css'

const Category = () => {
  return (
    <div>
      <h2>Category</h2>
      <p>What are you currently looking for</p>
      <div className={styles.categoryContainer}>
        <div className={styles.imageWrapper}>
          <img src={'/img/ctg/hiclipart 15.png'} alt="" />
          <p>T-Shirt</p>
        </div>
        <div className={styles.imageWrapper2}>
          <img src={'/img/ctg/hiclipart 21.png'} alt="" />
          <p>Shorts</p>
        </div>
        <div className={styles.imageWrapper3}>
          <img src={'/img/ctg/hiclipart 22.png'} alt="" />
          <p>Jacket</p>
        </div>
        <div className={styles.imageWrapper4}>
          <img src={'/img/ctg/hiclipart 26.png'} alt="" />
          <p>Pants</p>
        </div>
        <div className={styles.imageWrapper5}>
          <img src={'/img/ctg/hiclipart 34.png'} alt="" />
          <p>Shoes</p>
        </div>
      </div>
    </div>
  )
}

export default Category