import React , { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {delCharachterByid} from '../actions';
class HerosListComponent extends Component {
    render(){
        console.log("props",this.props.heros);
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h3>Heros</h3>
                    <ul className="list-group">
                        {
                            this.props.heros.map(hero=> {
                                return (
                                    <li key={hero.id} className="list-group-item">
                                        <div>{hero.name}
                                            <span className="pull-right" onClick={()=>this.props.delCharachterByid(hero.id)}>-</span>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
        </div>)
    }
}

function mapStateToProps(state){
    return {
        heros:state.heros_reducer
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        delCharachterByid
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(HerosListComponent);