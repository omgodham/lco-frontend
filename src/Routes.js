import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './core/Home';
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import SignOut from './user/SignOut';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';
import PrivateRoute from './auth/helper/PrivateRoute';
import AdminRoute from './auth/helper/AdminRoute';
import CreateCategory from './admin/CreateCategory';
import CreateProduct from './admin/CreateProduct';
import ManageProducts from './admin/ManageProducts';
import ManageCategories from './admin/ManageCategories';
import UpdateProduct from './admin/UpdateProduct';
import UpdateCategory from './admin/UpdateCategory';
import Cart from './core/Cart';
export default function Routes() {
    return (
        <Router>
        <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/cart" component={Cart} /> 
        <Route exact path="/signup" component={SignUp} /> 
        <Route exact path="/signin" component={SignIn} /> 
        <Route exact path="/signout" component={SignOut} />
        <PrivateRoute path='/user/dashboard' component={UserDashBoard}/> 
        <AdminRoute path='/admin/dashboard' component={AdminDashBoard}/> 
        <AdminRoute path='/admin/create/category' component={CreateCategory}/> 
        <AdminRoute path='/admin/create/product' component={CreateProduct}/> 
        <AdminRoute path='/admin/products' component={ManageProducts}/> 
        <AdminRoute path='/admin/categories' component={ManageCategories}/> 
        <AdminRoute path='/admin/product/update/:productId' component={UpdateProduct}/> 
        <AdminRoute path='/admin/category/update/:categoryId' component={UpdateCategory}/> 
        </Switch>
       </Router>
    )
}
