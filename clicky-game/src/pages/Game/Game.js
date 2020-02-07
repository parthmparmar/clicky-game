import React, { Component } from "react";
import { imageArray } from "../../images"
import TopBar from "../../components/TopBar";
import Jumbotron from "../../components/jumbotron";
class Game extends Component {
    // setting our global state
    state = {
        imageArray: imageArray,
        clickedArray: [],
        Score: 0,
        topScore: 0,
        msg: "Click an Image to Play Game!"
    };

    componentDidMount() {
        const shuffledArray = this.randomizeArray();
        this.setState({
            imageArray: shuffledArray,
        });
    }

    playGame = name => {
        
        const shuffledArray = this.randomizeArray();

        if (this.checkArray(name) == true) {
            this.setState({
                imageArray: shuffledArray,
                Score: 0,
                clickedArray: [],
                msg: "You Guessed Incorrectly!"
            })
        }
        else {
            var newArray = this.state.clickedArray.concat(name)
            var newScore = this.state.Score + 1
            var newtopScore = this.topScoreCheck(newScore)
            this.setState({
                imageArray: shuffledArray,
                clickedArray: newArray,
                Score: newScore,
                topScore: newtopScore,
                msg: "You Guessed Correctly!"
            });
        };
    };

    checkArray = name => {
        return (this.state.clickedArray.includes(name) ? true : false)
    };

    topScoreCheck = (newScore) => {
        if (newScore > this.state.topScore){
            return newScore
        }
        else {
            return this.state.topScore
        };
    };

    randomizeArray = () => {
        var array = this.state.imageArray.slice();
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    render() {
        return (
            <div>
                <TopBar score={this.state.Score} topScore = {this.state.topScore} msg = {this.state.msg}/>
                <Jumbotron />
                <div className="container">
                    <div className="row">
                        {this.state.imageArray.map(item => {
                            return (
                                <div className="col-md-2">
                                    <img key={item.name} className="img-fluid p-2 mt-3" src={item.image} onClick={() => this.playGame(item.name)} alt="superhero" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        )
    }
}

export default Game;