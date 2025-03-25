import styles from './featuredBooks.module.css';

const FeaturedBooks = ({ cover, textAlt, bookTitle, bookAuthor, bookTag, bookPrice }) => {
    return (
        <div className={styles.booksGrid}>
            <div className={styles.bookCard}>
                <div className={styles.bookCover}>
                    <img
                        src={cover}
                        alt={textAlt}
                        className={styles.coverImage}
                    />
                    <button className={styles.quickViewButton}>Visualizar</button>
                </div>
                <div className={styles.bookInfo}>
                    <h3 className={styles.bookTitle}>{bookTitle}</h3>
                    <p className={styles.bookAuthor}>por {bookAuthor}</p>
                    <div className={styles.bookTags}>
                        <span className={styles.tag}>{bookTag}</span>
                    </div>
                    <div className={styles.bookPriceActions}>
                        <span className={styles.bookPrice}>
                            R$ {bookPrice}
                        </span>
                        <div className={styles.bookActions}>
                            <button className={styles.iconButton}>❤️</button>
                            <button className={styles.iconButton}>🛒</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FeaturedBooks;