import React, {Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addNewGame} from "../../Actions/actions";
import qs from "query-string";
import classnames from "classnames";
import Loader from "react-loader-spinner";

class EditDetails extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            photo:"",
            price:"",
            description:"",
            errors:[],
            loader:"notloading"

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentDidMount() {
        //alert(qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k);
        axios.get('/api/Games/' +qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k)
            .then(response => {

                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    photo: response.data.photo,
                    price:response.data.price,
                    description:response.data.description,
                })


            })
            .catch(function (error) {
                console.log(error)

            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        const edit = {
            id: this.state.id,
            name: this.state.name,
            photo: this.state.photo,
            price:this.state.price,
            description:this.state.description
        };
        console.log(edit);
        this.props.addNewGame(edit, this.props.history);

    }

    render(){
        const{errors}=this.state;
        const {loader}=this.state;
        console.log(loader);
        return(
            <div className="border border-light p-8 col-md-4 m-auto">
                <div className="container">
                    <h3 className="text-center">Update Game Details</h3>
                    <br/>
                    <form onSubmit={this.onSubmit}>
                        {/*Game Name*/}
                        <div className="form-group">
                            <label>Game Name:</label>
                            <input
                                type="text"
                                className={classnames("form-control",{"is-invalid":errors.error})}
                                name="name"
                                value={this.state.name}
                                placeholder="Game Name"
                                onChange={this.onChange}
                                required
                            />
                            {
                                errors.error && (
                                    <div className="invalid-feedback">{errors.error}</div>
                                )
                            }
                        </div>
                        {/*Photo URL*/}
                        <div className="form-group">
                            <label>Photo:</label>
                            <input
                                type="text"
                                className={classnames("form-control",{"is-invalid":errors.photo})}
                                name="photo"
                                value={this.state.photo}
                                placeholder="Photo URL"
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        {/*Price*/}
                        <div className="form-group">
                            <label>Price:</label>
                            <input
                                type="text"
                                className={classnames("form-control",{"is-invalid":errors.price})}
                                name="price"
                                value={this.state.price}
                                placeholder="Price"
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        {/*Description*/}
                        <div className="form-group">
                            <label>Description:</label>
                            <input
                                type="text"
                                className={classnames("form-control",{"is-invalid":errors.description})}
                                name="description"
                                value={this.state.description}
                                placeholder="Description"
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Game" className="btn btn-primary form-control"/>
                            {console.log(this.loader)}
                            {

                                loader==="loading" ?
                                    <div><Loader type="ThreeDots" color="#1bad15" height="100" width="100" />
                                        <p> This may take few seconds..........</p> </div>
                                    :null
                            }
                        </div>
                    </form>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }

}
EditDetails.propTypes = {
    addNewGame:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};
const  mapStateToProps = state =>({
    errors: state.errors
});
export default connect(mapStateToProps ,{addNewGame}) (EditDetails);