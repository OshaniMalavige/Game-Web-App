import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class UpdateorDeleteGame extends Component{
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }

    componentDidMount() {
       axios.get(" /api/Games/all")
           .then(response => {
               this.setState({games: response.data});
           })
           .catch(function (error) {
               console.log(error);

           })
   }

    onDeleteClick(id){
        if(window.confirm('Do you want to delete')) {
            axios.delete("/api/Games/delete/" + id).then((response) => {
                window.location.replace("/UpdateorDeleteGame")
            });
        }
    }

    render() {
        const {games}=this.state;
        const list =this.state.games.map((post) => {
                return (
                    <tr key={ post.id}>
                        <td>{post.name}</td>
                        <td>{post.photo}</td>
                        <td>{post.price}</td>
                        <td>{post.description}</td>
                        <td>
                            <Link to={"/EditDetails/id?_k="+post.id} className="btn btn-primary">Update</Link><button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, post.id)}>Delete</button>
                        </td>
                    </tr>
                )
            }
        );

        return(
            <div id="cs">
                <div className="text-left mb-3">
                    <Link to="/AddNewGame" className="btn btn-outline-danger"><i
                        className="fas fa-plus-circle"></i> Add New Game
                    </Link></div>
                <table className="table table-light table-striped">
                    <thead>
                    <tr>

                        <th>Game Name</th>
                        <th>Photo URL</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {list}

                    </tbody>
                </table>
            </div>
        );
    }
}
export default UpdateorDeleteGame;