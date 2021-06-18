//一级路由
import Home from '../component/Home'
import Menu from '../component/Menu'
import Login from '../component/Login'
import Register from '../component/Register'
import Admin from '../component/Admin'
import About from '../component/about/About'
import Is404 from '../component/Is404'
//二级路由
import Contact from '../component/about/Contact'
import History from '../component/about/History'
import Delivery from '../component/about/Delivery'
import OrderingGuide from '../component/about/OrderingGuide'
export default [
    { path: "/", name: "homeLink", component: Home },
    { path: "/menu", component: Menu },
    { path: "/admin", component: Admin },
    {
        path: "/about",
        component: About,
        children: [
            { path: "/about/contact", name: "contactLink", component: Contact },
            { path: "/about/history", name: "historyLink", component: History },
            { path: "/about/delivery", name: "deliveryLink", component: Delivery },
            { path: "/about/orderingGuide", name: "orderingGuideLink", component: OrderingGuide },
        ]
    },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/Is404", component: Is404 },
    { path: "*", redirect: "/Is404" }
]