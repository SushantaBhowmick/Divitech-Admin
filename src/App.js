import './App.css';
import MainLayout from './Components/MainLayout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Enquiries from './pages/Enquiries';
import BlogList from './pages/BlogList';
import BlogCatList from './pages/BlogCatList';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import ProductList from './pages/ProductList';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddCat from './pages/AddCat';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='blog-list' element={<BlogList />} />
          <Route path='blog' element={<AddBlog />} />
          <Route path='blog-category' element={<AddBlogCat />} />
          <Route path='blog-category-list' element={<BlogCatList />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='color' element={<AddColor />} />
          <Route path='list-color' element={<ColorList />} />
          <Route path='category' element={<AddCat />} />
          <Route path='list-category' element={<CategoryList />} />
          <Route path='list-brand' element={<BrandList />} />
          <Route path='product-list' element={<ProductList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

//1.46.00ss
