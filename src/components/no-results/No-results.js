import React, {Component} from 'react';
import './No-results.css'

class NoResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    render() {
        let nothingToShowText = 'Please write the song name on the search box and press enter, you can search the song you like or your favorite.'
        return (
            <div className="no-results">
                <h1>{nothingToShowText}</h1>
            </div>
        );
    }
}


export  default NoResults;