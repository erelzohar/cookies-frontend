import CategoryModel from "../Models/CategoryModel";
import ProductModel from "../Models/ProductModel";
import store from "../Redux/Store";
import globals from "./Globals";
import jwtAxios from "./JwtAxios";
import notify from "./Notify";

class ProductsService {

    public async getProducts(): Promise<ProductModel[]> {
        try {
            if (store.getState().productsState.products) {
                return store.getState().productsState.products;
            }
            const response = await jwtAxios.get<ProductModel[]>(globals.productsUrl);
            return response.data;
        }
        catch (err) {
            notify.error(err);
        }
    }
    
    public async getCategories(): Promise<CategoryModel[]> {
        try {
            if (store.getState().productsState.categories) {
                return store.getState().productsState.categories;
            }
            const response = await jwtAxios.get<CategoryModel[]>(globals.productsUrl + "/categories");
            return response.data;
        }
        catch (err) {
            notify.error(err);
        }
    }

}
const productsService = new ProductsService();
export default productsService;