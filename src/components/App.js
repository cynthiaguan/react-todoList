import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import DetailContainer from '../containers/DetailContainer';
import HomeContainer from '../containers/HomeContainer';
import Header from "./layout/Header"

class App extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={HomeContainer} />
                        <Route path="/children/:id" component={DetailContainer} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;