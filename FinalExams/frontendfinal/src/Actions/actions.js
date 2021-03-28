import axios from "axios";
import {GET_ERRORS} from "./types";

{/*Add New Game*/}
export const addNewGame = (game, history) => async dispatch => {
    try {
        await axios.post("/api/Games", game);
        history.push("/");
        window.location.replace("/AddNewGame");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};