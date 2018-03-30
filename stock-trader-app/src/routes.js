import {
    Home,
    Portfolio,
    Stocks
} from "./components/";

export default [
    { path: '', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks }
]