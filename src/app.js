import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const DashboardPage=() =>(
    <p>Dashboard</p>
)
const AddPage=() =>(
    <p>Add</p>
)
const EditPage = () =>(
    <p>Edit</p>
)
const HelpPage =() =>(
    <p>Help</p>
)
const notFoundPage =() => (
    <p>404 page not found!</p>
);


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={DashboardPage} exact={true}/>
            <Route path="/add" component={AddPage}/>
            <Route path="/edit" component={EditPage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={notFoundPage}/>
        </Switch>
        
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));