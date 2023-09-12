import CategoryModel from "../../../Models/CategoryModel";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoriesList.css";



const cat:CategoryModel[] = [
{
    _id:"sdrf343srgs",
    name:"choco",
    imageName:""
},
{
    _id:"sdrf44srgs",
    name:"vanil",
    imageName:""
},
{
    _id:"sdrfs1rgs",
    name:"mishmish",
    imageName:""
},
{
    _id:"sdr21fsrgs",
    name:"banana",
    imageName:""
},
{
    _id:"sdr3fsrgs",
    name:"shumim",
    imageName:""
},
{
    _id:"sdr4fsrgs",
    name:"shumim",
    imageName:""
},
{
    _id:"sd5rfsrgs",
    name:"shumim",
    imageName:""
}

]

function CategoriesList(): JSX.Element {
    return (
        <div className="CategoriesList" style={{gridTemplateColumns:`repeat(${cat.length}, minmax(150px,1fr))`}}>
            {cat.map((c,i)=><CategoryCard key={i} {...c} />)}
        </div>
    );
}

export default CategoriesList;
