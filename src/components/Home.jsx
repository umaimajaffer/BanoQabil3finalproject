import React, { useEffect, useState } from 'react'; // Import useEffect and useState for the carousel
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Import the CSS for styling
import DATA from '../Data'; // Importing product data

// Component to display each product
const ProductImage = ({ img, title, desc, price }) => {
    return (
        <div className="product-image-box">
            <img src={img} alt={title} className="product-img" />
            <div className="product-details">
                <h4 className="product-title">{title}</h4>
                <p>{desc}</p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};
 
// Component to display product sections (Smartphones, MacBooks, iPads, Earbuds)
const ProductSection = ({ title, products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerPage = 4; // Number of products to show at a time

    const handleNext = () => {
        if (currentIndex + productsPerPage < products.length) {
            setCurrentIndex((prevIndex) => prevIndex + productsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex - productsPerPage >= 0) {
            setCurrentIndex((prevIndex) => prevIndex - productsPerPage);
        }
    };

    return (
        <div className="product-section">
            {/* Clickable title navigates to the /products page */}
            <Link to="/products">
                <h3 className="section-title">{title}</h3>
            </Link>
            <div className="product-slider">
                {products.slice(currentIndex, currentIndex + productsPerPage).map((product) => (
                    <ProductImage
                        key={product.id}
                        img={product.img}
                        title={product.title}
                        desc={product.desc}
                        price={product.price}
                    />
                ))}
            </div>
            {/* Navigation arrows */}
            <div className="carousel-arrows">
                <button className="arrow left" onClick={handlePrev} disabled={currentIndex === 0}>
                    &lt; {/* Left arrow symbol */}
                </button>
                <button className="arrow right" onClick={handleNext} disabled={currentIndex + productsPerPage >= products.length}>
                    &gt; {/* Right arrow symbol */}
                </button>
            </div>
        </div>
    );
};

const Home = () => {
    // Filter the data for each product section
    const smartphones = DATA.filter((product) => product.title.toLowerCase().includes('iphone'));
    const macbooks = DATA.filter((product) => product.title.toLowerCase().includes('macbook'));
    const ipads = DATA.filter((product) => product.title.toLowerCase().includes('ipad'));
    const earbuds = DATA.filter((product) => product.title.toLowerCase().includes('airbuds'));

    // Carousel data with titles
    const carouselData = [
        { img: "/assests/images/home/img5.jpg", title: "iPhone 14 Pro" },
        { img: "/assests/images/home/img2.jpg", title: "iPhone 14" },
        { img: "/assests/images/home/img3.jpg", title: "iPhone SE" },
        { img: "/assests/images/home/img4.jpg", title: "iPhone 13 Pro Max" },
        { img: "/assests/images/home/macbook5.jpeg", title: "MacBook Air M1" },
        { img: "/assests/images/home/macbook3.jpeg", title: "MacBook Pro M1" },
        { img: "/assests/images/home/ipad2.jpg", title: "iPad Pro 11\"" },
        { img: "/assests/images/home/ipad3.png", title: "iPad Air" },
        { img: "/assests/images/home/earbud2.png", title: "AirPods Pro" },
        { img: "/assests/images/home/earbud3.jpg", title: "AirPods 2nd Gen" },
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [carouselData.length]);

    return (
        <div className="home-container">
            {/* Carousel code */}
            <div className="carousel-container">
                <div className="carousel-text">
                    <h2 className="carousel-title">{carouselData[currentIndex].title}</h2>
                </div>
                <div className="carousel-image">
                    <img src={carouselData[currentIndex].img} alt={carouselData[currentIndex].title} className="carousel-img" />
                </div>
            </div>

            {/* Product Sections */}
            <ProductSection title="Smartphones" products={smartphones} />
            <ProductSection title="MacBooks" products={macbooks} />
            <ProductSection title="iPads" products={ipads} />
            <ProductSection title="Earbuds" products={earbuds} />
        </div>
    );
};

export default Home;
