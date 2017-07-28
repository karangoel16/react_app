import React , {Component} from 'react';
import {connect} from 'react-redux';

class OverAllComponent extends Component {
    render(){
        console.log("over all props", this.props);
        return(
            <div className="row">
                <h3>Team Skill:</h3>
                < div className="col-xs-12 jumbotron">
                        Strength:<b>{this.props.strength}</b><br/>
                    Intelligence:<b>{this.props.intelligence}</b><br/>
                        Speed: <b>{this.props.speed}</b>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    let strength=0;
    let intelligence=0;
    let speed =0;
    state.heros_reducer.forEach(hero=>{
        strength+=hero.strength;
        intelligence+=hero.intelligence;
        speed+=hero.speed;
    })
    return {
        strength:strength,
        intelligence:intelligence,
        speed:speed
    }
}


export default connect(mapStateToProps,null)(OverAllComponent);
