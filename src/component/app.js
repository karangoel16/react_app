import React ,{Component} from 'react';
import CharListComponent from './charachter.list';
import HerosListComponent from './heros.component';
import OverAllComponent from './Overall.component';
class AppComponent extends Component{
    render(){
        return (
            <div>
                <h2>SuperSquad</h2>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <CharListComponent/>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <HerosListComponent/>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <OverAllComponent/>
                    </div>
                </div>
            </div>
        )

    }
}

export default AppComponent;