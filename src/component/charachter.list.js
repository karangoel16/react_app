import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharachterById} from "../actions/index";
class CharListComponent extends Component {
    render(){
        console.log("inspect",this.props);
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h3>Charachter</h3>
                    <ul className="list-group">
                        {
                            this.props.chars.map(char => {
                                return (
                                    <li key={char.id} className="list-group-item">
                                        <div >{char.name}
                                        <span className="pull-right" onClick={()=>this.props.addCharachterById(char.id)}>
                                            +
                                        </span></div>
                                    </li>
                                )
                            })
                        }
                </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        chars:state.char_reducer
    };
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        addCharachterById
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchtoProps)(CharListComponent);

