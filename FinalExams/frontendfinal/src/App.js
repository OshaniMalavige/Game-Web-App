import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import "../src/navigationbar.css";
import {Nav,NavItem,Navbar,NavDropdown} from 'react-bootstrap';
import AddNewGame from "./Components/Gaming/AddNewGame";
import GameList from "./Components/Gaming/GameList";
import UpdateorDeleteGame from "./Components/Gaming/UpdateorDeleteGame";
import EditDetails from "./Components/Gaming/EditDetails";
import Home from "./Components/Home";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Footer from "./Components/Footer";

class App extends Component{
    render(){
        return(
            <Provider store={store}>
            <Router>
                <div className="container-fluid">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/AddNewGame">Add New Game</Nav.Link>
                            <Nav.Link href="/GameList">All Games</Nav.Link>
                            <Nav.Link href="/UpdateorDeleteGame">More Actions</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar><br/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route exact path='/AddNewGame' component={AddNewGame}/>
                        <Route exact path='/GameList' component={GameList}/>
                        <Route exact path='/UpdateorDeleteGame' component={UpdateorDeleteGame}/>
                        <Route path='/EditDetails' component={EditDetails}/>
                    </Switch>
                </div>
            </Router>
             <Footer/>
            </Provider>

        )
    }
}
const HomePage=()=>(
    <div>Home Page</div>
);

export default App;
