import { Link } from "react-router-dom";
import "./ProductCard.css";
import logo from "../../../Assets/Images/Brownie.jpeg";
import { Button } from "@mui/material";
import { useRef } from "react";
import ProductModel from "../../../Models/ProductModel";


function ProductCard(product:ProductModel): JSX.Element {




    const initialPrice = product.price;
    const buttonRef = useRef<HTMLButtonElement>();
    const buttonDivRef = useRef<HTMLDivElement>();

    const flip = () => {
        buttonDivRef.current.style.transform = "rotateY(180deg)";
        setTimeout(() => {
            buttonRef.current.style.transform = "rotateY(180deg)";
            buttonRef.current.style.backgroundColor = "#006400";
            buttonRef.current.textContent = "Add to cart";
        }, 150);
    }

    const unflip = () => {
        buttonDivRef.current.style.transform = "rotateY(0deg)";
        setTimeout(() => {
            buttonRef.current.style.transform = "rotateY(0deg)";
            buttonRef.current.style.backgroundColor = "#b28d1c";
            buttonRef.current.innerHTML = initialPrice.toLocaleString() + "&#8362;";
        }, 150);
    }

    return (
        <div className="ProductCard" onMouseEnter={flip} onMouseLeave={unflip}>
            <img width={"100%"} className="product-img" src={logo} alt="img" />
            <p className="product-desc">
                {product.name}
            </p>

            <div className="product-div-button" ref={buttonDivRef}>
                <Link to="/"><Button sx={{ fontSize: "medium", backgroundColor: "#b28d1c" }} ref={buttonRef} color="secondary" variant="contained">{initialPrice}&#8362;</Button></Link>
            </div>
        </div>
    );
}

export default ProductCard;
