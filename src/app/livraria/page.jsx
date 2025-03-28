import styles from "./livraria.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import FeaturedBooks from "../components/featuredBooks";

export default function Home() {
    // Dados que seriam obtidos de uma API
    const featuredBooks = [
        {
            id: 1,
            title: "O Algoritmo da Imaginação",
            author: "Ana Luz Santos",
            price: 49.9,
            coverImage:
                "https://via.placeholder.com/150x200/3498db/ffffff?text=Algoritmo",
            rating: 4.5,
            tags: ["Ficção Científica", "Tecnologia"],
        },
        {
            id: 2,
            title: "Conexões Invisíveis",
            author: "Marcos Silva",
            price: 39.9,
            coverImage:
                "https://via.placeholder.com/150x200/e74c3c/ffffff?text=Conexões",
            rating: 4.8,
            tags: ["Romance", "Tecnologia"],
        },
        {
            id: 3,
            title: "Além do Código",
            author: "Julia Mendes",
            price: 55.9,
            coverImage:
                "https://via.placeholder.com/150x200/2ecc71/ffffff?text=Código",
            rating: 4.2,
            tags: ["Biografia", "Programação"],
        },
        {
            id: 4,
            title: "Universos Paralelos",
            author: "Lucas Costa",
            price: 47.9,
            coverImage:
                "https://via.placeholder.com/150x200/f39c12/ffffff?text=Universos",
            rating: 4.7,
            tags: ["Ficção Científica", "Filosofia"],
        },
    ];

    const newReleases = [
        {
            id: 5,
            title: "A Linguagem Secreta",
            author: "Carla Prado",
            price: 42.9,
            coverImage:
                "https://via.placeholder.com/150x200/9b59b6/ffffff?text=Linguagem",
            rating: 4.0,
            tags: ["Suspense", "Linguística"],
        },
        {
            id: 6,
            title: "Revolução Digital",
            author: "Pedro Almeida",
            price: 59.9,
            coverImage:
                "https://via.placeholder.com/150x200/1abc9c/ffffff?text=Revolução",
            rating: 4.6,
            tags: ["Não-Ficção", "Tecnologia"],
        },
        {
            id: 7,
            title: "Fronteiras do Pensamento",
            author: "Sofia Torres",
            price: 37.9,
            coverImage:
                "https://via.placeholder.com/150x200/d35400/ffffff?text=Fronteiras",
            rating: 4.3,
            tags: ["Filosofia", "Psicologia"],
        },
    ];

    const categories = [
        { id: 1, name: "Ficção Científica", icon: "🚀" },
        { id: 2, name: "Romance", icon: "❤️" },
        { id: 3, name: "Biografia", icon: "👤" },
        { id: 4, name: "Tecnologia", icon: "💻" },
        { id: 5, name: "Fantasia", icon: "🔮" },
        { id: 6, name: "História", icon: "📜" },
        { id: 7, name: "Autoajuda", icon: "🌱" },
        { id: 8, name: "Mistério", icon: "🔍" },
    ];

    // Carrinho simulado
    const cartItems = [
        { id: 2, title: "Conexões Invisíveis", quantity: 1, price: 39.9 },
        { id: 5, title: "A Linguagem Secreta", quantity: 1, price: 42.9 },
    ];

    // Função para calcular o total do carrinho
    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    // Função para renderizar estrelas com base na avaliação
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={`star-${i}`} className={styles.star}>
                    ★
                </span>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <span key="half-star" className={styles.starHalf}>
                    ★
                </span>
            );
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <span key={`empty-star-${i}`} className={styles.starEmpty}>
                    ☆
                </span>
            );
        }

        return stars;
    };

    return (
        <div className={styles.bookstoreContainer}>
            {/* HEADER */}
            <Header />

            {/* HERO BANNER */}
            <section className={styles.heroBanner}>
                <div className={styles.heroContent}>
                    <h2 className={styles.heroHeading}>
                        Descubra mundos extraordinários
                    </h2>
                    <p className={styles.heroParagraph}>
                        Promoção de lançamentos com até 30% de desconto!
                    </p>
                    <button className={styles.ctaButton}>Ver ofertas</button>
                </div>
            </section>

            {/* FEATURED BOOKS SECTION */}
            <section className={styles.bookSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionHeading}>Destaques da Semana</h2>
                    <a href="/destaques" className={styles.viewAll}>
                        Ver todos
                    </a>
                </div>

                <FeaturedBooks bookAuthor={'Ali Hazelwood'} bookPrice={'45,00'} bookTag={'Romance'} bookTitle={'A Hipótese do Amor'} cover={'https://m.media-amazon.com/images/I/71dsFCsDGYL._UF894,1000_QL80_.jpg'} textAlt={'A Hipótese do Amor Capa'} />

                <FeaturedBooks bookAuthor={'Ali Hazelwood'} bookPrice={'39,45'} bookTag={'Romance'} bookTitle={'A Razão do Amor'} cover={'https://m.media-amazon.com/images/I/81bkmJnflPL.jpg'} textAlt={'A Razão do Amor Capa'} />

                <FeaturedBooks bookAuthor={'Lynn Painter'} bookPrice={'47,90'} bookTag={'Romance'} bookTitle={'Melhor do que nos filmes'} cover={'https://m.media-amazon.com/images/I/61y5iLUKS3L._AC_UF1000,1000_QL80_.jpg'} textAlt={'Melhor do que nos filmes Capa'} />
            </section>

            {/* CATEGORIES SECTION */}
            <section className={styles.categoriesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionHeading}>Categorias Populares</h2>
                    <a href="/categorias" className={styles.viewAll}>
                        Ver todas
                    </a>
                </div>

                <div className={styles.categoriesGrid}>
                    {categories.map((category) => (
                        <a
                            key={category.id}
                            href={`/categoria/${category.id}`}
                            className={styles.categoryCard}
                        >
                            <span className={styles.categoryIcon}>{category.icon}</span>
                            <span className={styles.categoryName}>{category.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* NEW RELEASES SECTION */}
            <section className={`${styles.bookSection} ${styles.newReleases}`}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionHeading}>Lançamentos</h2>
                    <a href="/lancamentos" className={styles.viewAll}>
                        Ver todos
                    </a>
                </div>

                <div className={styles.booksGrid}>
                    {newReleases.map((book) => (
                        <div key={book.id} className={styles.bookCard}>
                            <div className={styles.bookCover}>
                                <img
                                    src={book.coverImage}
                                    alt={book.title}
                                    className={styles.coverImage}
                                />
                                <button className={styles.quickViewButton}>Visualizar</button>
                            </div>
                            <div className={styles.bookInfo}>
                                <span className={styles.newBadge}>Novo</span>
                                <h3 className={styles.bookTitle}>{book.title}</h3>
                                <p className={styles.bookAuthor}>por {book.author}</p>
                                <div className={styles.bookRating}>
                                    {renderStars(book.rating)}
                                    <span className={styles.ratingValue}>({book.rating})</span>
                                </div>
                                <div className={styles.bookTags}>
                                    {book.tags.map((tag, index) => (
                                        <span key={index} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.bookPriceActions}>
                                    <span className={styles.bookPrice}>
                                        R$ {book.price.toFixed(2)}
                                    </span>
                                    <div className={styles.bookActions}>
                                        <button className={styles.iconButton}>❤️</button>
                                        <button className={styles.iconButton}>🛒</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SUBSCRIPTION SECTION */}
            <section className={styles.subscriptionSection}>
                <div className={styles.subscriptionContent}>
                    <h2 className={styles.subscriptionHeading}>
                        Fique por dentro das novidades!
                    </h2>
                    <p className={styles.subscriptionText}>
                        Assine nossa newsletter e receba atualizações sobre novos
                        lançamentos, promoções exclusivas e dicas de leitura.
                    </p>
                    <div className={styles.subscriptionForm}>
                        <input
                            type="email"
                            className={styles.subscriptionInput}
                            placeholder="Seu melhor e-mail"
                        />
                        <button className={styles.subscribeButton}>Assinar</button>
                    </div>
                </div>
            </section>

            {/* SHOPPING CART */}
            <div className={styles.shoppingCart}>
                <div className={styles.cartHeader}>
                    <h3 className={styles.cartHeaderTitle}>Seu Carrinho</h3>
                    <button className={styles.closeButton}>✕</button>
                </div>

                <div className={styles.cartItems}>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <div className={styles.itemInfo}>
                                    <h4 className={styles.itemTitle}>{item.title}</h4>
                                    <div className={styles.itemDetails}>
                                        <span className={styles.itemQuantity}>
                                            Qtd: {item.quantity}
                                        </span>
                                        <span className={styles.itemPrice}>
                                            R$ {item.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <button className={styles.removeButton}>✕</button>
                            </div>
                        ))
                    ) : (
                        <p className={styles.emptyCartMessage}>Seu carrinho está vazio</p>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className={styles.cartFooter}>
                        <div className={styles.cartTotal}>
                            <span className={styles.totalLabel}>Total:</span>
                            <span className={styles.totalValue}>
                                R$ {calculateTotal().toFixed(2)}
                            </span>
                        </div>
                        <button className={styles.checkoutButton}>Finalizar Compra</button>
                    </div>
                )}
            </div>

            {/* FOOTER */}
            < Footer />

            {/* OVERLAY */}
            <div className={styles.overlay}></div>

            {/* SCROLL TO TOP BUTTON */}
            <button className={styles.scrollTop}>↑</button>
        </div >
    );
}