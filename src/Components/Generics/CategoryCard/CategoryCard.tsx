import "./CategoryCard.css";
import img from "../../../Assets/Images/Brownie.jpeg";
import CategoryModel from "../../../Models/CategoryModel";
import { Link } from "react-router-dom";

function CategoryCard(category: CategoryModel): JSX.Element {
    return (
        <Link to={"/products/"+category._id}>
            <div className="CategoryCard">

                <img src={img} alt="cat" className="categoryImg" />
                <h2>{category.name}</h2>

            </div>
        </Link>
    );
}

export default CategoryCard;
