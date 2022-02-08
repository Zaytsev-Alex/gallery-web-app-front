import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getPaintings } from './paintingsActions.jsx'

class Paintings extends React.Component {

    componentDidMount() {
        this.props.getPaintings(0);
    }

    render() {
        let paintings = this.props.paintings.records.map(item => {
            return (
                <div key={item.Id} className="painting">
                    <div className="name">{item.name}</div>
                    <div className="year">{item.year}</div>
		    <hr />
                </div>
            );
        });

        return (
            <div id="paintings">
                {paintings}
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        paintings: state.data,
        error: state.error
    }
}

let mapDispatch = (dispatch) => {
    return {
        getPaintings: (index) => dispatch(getPaintings(index))
    }
}

export default connect(mapProps, mapDispatch)(Paintings) 