import Home from "./components/Home";
import Crud from "./components/Crud";

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home
        },
        // {
        //     path: '/crud',
        //     component: Crud
        // },
    ]
}
