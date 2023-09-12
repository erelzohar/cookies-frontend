import "./ProductsCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";
import ProductModel from "../../../Models/ProductModel";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
interface productsCarouselProps {
    products: ProductModel[]
}

const ProductsCarousel: React.FC<productsCarouselProps> = ({ products }): JSX.Element => {

    return (
        <div className="ProductsCarousel">
            <Carousel
                swipeable
                draggable
                ssr // means to render carousel on server-side.
                infinite
                responsive={responsive}>
                {products.map((p, i) => <ProductCard key={i} {...p} />)}
            </Carousel>
        </div>
    );
}

export default ProductsCarousel;
