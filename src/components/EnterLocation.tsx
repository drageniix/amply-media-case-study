import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../redux/actions/common';

export class EnterLocation extends Component<
    {
        setLocation: (input: string) => void;
    },
    {
        location: String;
    }
> {
    state = {
        location: ''
    };

    setNewLocation = (e: any) => {
        e.preventDefault();
        const input = e.target.value;
        if (input.match(/(^\d{0,5}$)|(^\d{5}-\d{0,4}$)/)) {
            this.setState({ location: input });
            this.props.setLocation('');
        }
        if (input.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
            this.props.setLocation(input);
        }
    };

    render() {
        return (
            <input
                className="zipcode"
                placeholder="Your Zip Code"
                value={this.state.location}
                onChange={this.setNewLocation}
            />
        );
    }
}

const mapDispatchToProps = {
    setLocation
};

export default connect(
    null,
    mapDispatchToProps
)(EnterLocation);
