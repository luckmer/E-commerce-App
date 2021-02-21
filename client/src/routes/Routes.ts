import {
    Home,
    Register,
    Login,
    PasswordChange,
    PageNotFound,
    Cart,
    Catalog,
    Create,
    Update,
    Details
} from "../exports/Exports";

export const routes = [
    { path: "/", Component: Home, name: "Home" },
    { path: "/register", Component: Register, name: "Register" },
    { path: "/login", Component: Login, name: "Login" },
    {path: "/PasswordChange",Component: PasswordChange,name: "PasswordChange"},
    { path: "/cart", Component: Cart, name: "Cart" },
    { path: "/catalog", Component: Catalog, name: "catalog" },
    { path: "/details/:id", Component: Details, name: "Details" },
    { path: "/create_product", Component: Create, name: "Create" },
    { path: "/update/:id", Component: Update, name: "update" },
    { path: "*", Component:PageNotFound, name: "PageNotFound" },
];
