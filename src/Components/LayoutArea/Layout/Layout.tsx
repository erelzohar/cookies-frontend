import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";
import Home from "../../HomeArea/Home/Home";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import SpeedDialComponent from "../SpeedDialComponent/SpeedDialComponent";
import ProductsList from "../../ProductsArea/ProductsList/ProductsList";



function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Router>
                <header><Header /></header>
                <main id="layout-main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/auth/register" element={<Register/>}/>
                        <Route path="/auth/login" element={<Login/>}/>
                        <Route path="/products" element={<ProductsList/>}/>
                        <Route path="/products/:categoryId" element={<ProductsList/>}/>
                    </Routes>
                </main>
                <footer>
                    <SpeedDialComponent/>
                    <Footer />
                </footer>
            </Router>
        </div>
    );
}

export default Layout;
