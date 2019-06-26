import Home from './components/Home';
import Form from './components/Form';
import TodoList from './components/TodoList';
import GetData from './components/GetData';
import Life from './components/Life';
import News from './components/News';
import ProductList from './components/ProductList';
import ProductContent from './components/ProductContent';
import Login from './components/Login';
import NewsDetails from './components/NewsDetails';
import NewsParams from './components/NewsParams';
import Antd from './components/Antd';
import Chess from './components/Chess';

export default [
    {path:'/',component:Home,exact:true},
    {path:'/form',component:Form},
    {path:'/getData',component:GetData},
    {path:'/todoList',component:TodoList},
    {path:'/life',component:Life},
    {path:'/news',component:News,routes:[
        {path:'/news/newsDetails/:id',component:NewsDetails},
        {path:'/news/newsParams',component:NewsParams},
    ]},
    {path:'/productList',component:ProductList},
    {path:'/productContent',component:ProductContent},
    {path:'/login',component:Login},
    {path:'/antd',component:Antd},
    {path:'/chess',component:Chess},
];