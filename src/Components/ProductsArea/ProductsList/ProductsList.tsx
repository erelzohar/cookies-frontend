import { useParams } from "react-router-dom";
import "./ProductsList.css";
import { useEffect,useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/Products";
import notify from "../../../Services/Notify";
import ProductCard from "../../Generics/ProductCard/ProductCard";

function ProductsList(): JSX.Element {
    const params = useParams();
    const category = params.categoryId;
    const [productsState,setProducts] = useState<ProductModel[]>([]);

    useEffect(()=>{
        productsService.getProducts()
        .then(res=>setProducts(res))
        .catch(err=>{
            notify.error(err);
        });
        
    },[]);

    return (
        <div className="ProductsList">
			{productsState.map((p,i)=><ProductCard key={i} {...p} />)}
        </div>
    );
}

export default ProductsList;
