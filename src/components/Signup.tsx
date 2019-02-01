import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../redux/actions/common';

export class Signup extends Component<any, any> {
    static propTypes = {
        signedUp: PropTypes.bool,
        acceptedTerms: PropTypes.bool,
        location: PropTypes.string
    };

    render() {
        return (
            <button
                onClick={this.props.signUp}
                className="action__signup"
                disabled={!this.props.acceptedTerms || !this.props.location}>
                Sign Up
            </button>
        );
    }
}

const mapStateToProps = (state: any) => ({
    signedUp: state.common.signedUp,
    acceptedTerms: state.common.acceptedTerms,
    location: state.common.location
});

const mapDispatchToProps = {
    signUp
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);
