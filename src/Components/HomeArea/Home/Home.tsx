import "./Home.css";
import ProductsCarousel from "../../Generics/ProductsCarousel/ProductsCarousel";
import { motion } from "framer-motion";
import logo from "../../../Assets/Images/cookies-logo.jpg";
import macarons from "../../../Assets/Images/macarons.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import CategoriesList from "../../Generics/CategoriesList/CategoriesList";
import Logo from "../Logo/Logo";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import bookimg from "../../../Assets/Images/transparent-book.png"
import truck from "../../../Assets/Images/transparent-truck.png"
import cookie from "../../../Assets/Images/transparent-cookie.png"
import building from "../../../Assets/Images/building-transparent.png"
import CategoryModel from "../../../Models/CategoryModel";
import productsService from "../../../Services/Products";
const products: ProductModel[] = [
    {
        _id:"sdr4fsrgs",
        name: "loremishmish",
        price: 500,
        imageName: "abc.jpg",
        category: "chocolate"
    }, {
        _id:"sdrfsr33gs",
        name: "loremishmish",
        price: 500,
        imageName: "abc.jpg",
        category: "chocolate"
    }, {
        _id:"sdrf22srgs",
        name: "loremishmish",
        price: 500,
        imageName: "abc.jpg",
        category: "chocolate"
    }, {
        _id:"sdrf12srgs",
        name: "loremishmish",
        price: 500,
        imageName: "abc.jpg",
        category: "chocolate"
    }
]



const headersHoverVariants = {
    scale: 1.2,
    color: "rgb(178, 141, 28)",
    transition: {
        type: "spring",
        stiffness: 500,
        mass: 0.5
    }
}
function Home(): JSX.Element {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
    const [categories,setCategories] = useState<CategoryModel[]>([]);
    const mouseMoveHandler = (event: MouseEvent) => {
        setMouseCoordinates({
            x: event.clientX,
            y: event.clientY
        });
    }

    useEffect(() => {
        // window.addEventListener('mousemove', mouseMoveHandler);
        // return (() => {
        //     window.removeEventListener('mousemove', mouseMoveHandler);
        // })

        
    }, [])
    return (
        <div className="Home">
            <Fade fraction={0.4}>
                <Logo />
            </Fade>
            <Fade direction="up" fraction={0.2}>
                <div className="home-section" >
                    <CategoriesList />
                </div>
            </Fade>
            <Slide delay={500}>
                <div className="home-section">
                    <Link to="/products">
                        <h1 className="home-heading">Top Sales</h1>
                    </Link>
                    <ProductsCarousel products={products} />
                </div>
            </Slide>
            <Slide delay={500} direction="right" >
                <div className="home-section" >
                    <Link to="/products">
                        <h1 className="home-heading">New Products</h1>
                    </Link>
                    <ProductsCarousel products={products} />
                </div>
            </Slide>
            <Slide delay={500}>
                <div className="home-section">
                    <Link to="/products">
                        <h1 className="home-heading">Events</h1>
                    </Link>
                    <ProductsCarousel products={products} />
                </div>
            </Slide>
            <div className="home-section about-us-section">
                <div className="inner-about-us">
                    <img className="img about-us-img" style={{paddingBottom:"1rem",paddingTop:"1rem"}} src={truck} alt="" />
                    <h3>deliveries</h3>
                </div>

                <div className="inner-about-us">
                    <img className="img about-us-img" src={cookie} alt="" />
                    <h3>quality</h3>
                </div>
                <div className="inner-about-us">
                    <img className="img about-us-img" src={building} alt="" />
                    <h3>companies</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
