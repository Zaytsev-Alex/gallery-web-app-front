import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Paintings from './Paintings/paintingsReducer.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Test</h2>
                <Paintings>

                </Paintings>
            </div>
        );
    }
};