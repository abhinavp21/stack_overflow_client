import { App } from "./App";

export default [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => <Redirect to="/login" />
    },
    {
        path: "/login",
        layout: DefaultLayout,
        component: App
    },
    {
        path: "/dashboard",
        layout: DefaultLayout,
        component: Dashboard
    },
    {
        path: "/customers",
        layout: DefaultLayout,
        component: Customers
    },
    {
        path: "/products",
        layout: DefaultLayout,
        component: Products
    },
    {
        path: "/errors",
        layout: DefaultLayout,
        component: Errors
    },
    {
        path: "/transaction",
        layout: DefaultLayout,
        component: Transaction
    }
];