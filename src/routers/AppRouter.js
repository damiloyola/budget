import React from 'react';
import DashboardPage from '../components/DashboardPage';
import AddPage from '../components/AddPage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Header/>
            <Switch> 
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/add" component={AddPage}/>
                <Route path="/edit" component={EditPage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
       
        
    </BrowserRouter>

)

export default AppRouter ;
