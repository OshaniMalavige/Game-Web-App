import React, {Component} from 'react';
import GameList from "./Gaming/GameList";

class Home extends Component{
    render() {
        return (
            <div>
                <div >
                        <GameList/>
                </div>

            </div>
        );
    }
}
export default Home;