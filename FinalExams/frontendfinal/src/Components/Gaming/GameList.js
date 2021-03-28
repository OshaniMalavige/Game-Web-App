import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Game = props => (
    <div className={"row justify-content-center"}>
        <div className="card card-body my-3 col-sm-4">
            <img className="card-img-top" src={props.todo.photo} alt="Card image cap">

            </img>
        </div>
        <div className="card card-body my-3 col-sm-4">

            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h5 className="card-title">{props.todo.name}</h5></li>
                    <li className="list-group-item"><h6 className="card-text">Rs.{props.todo.price}</h6></li>
                    <li className="list-group-item"><h6 className="card-text">{props.todo.description}</h6></li>
                </ul>
            </div>
            <div className="card-body">

                <Link to={"/GameList"} className="btn btn-info btn-block">Play Now</Link>
            </div>
        </div>
    </div>

);
class GameList extends Component {

    constructor(props) {
        super(props);
        this.state = {pro: []};
    }


    componentDidMount() {
        axios.get(" /api/Games/all")
            .then(responce => {
                this.setState({pro: responce.data});
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    gameList() {
        return this.state.pro.map(function (current, i) {
            return <Game todo={current} key={i}/>
        });
    }

    render() {
        return (

            <div>
                <div className={"container "} >
                    {/*<div className={"row "}>*/}
                    {/*<div className={"col"} style={{backgroundColor:"lavender"}}>*/}

                    {this.gameList()}
                </div>

            </div>
            // </div>
            // </div>

        );
    }
}
export default GameList;
