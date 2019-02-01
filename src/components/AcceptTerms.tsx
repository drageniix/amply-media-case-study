import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { acceptTerms } from '../redux/actions/common';

export class AcceptTerms extends Component<any, any> {
    static propTypes = {
        acceptedTerms: PropTypes.bool
    };

    render() {
        return (
            <div
                className="terms-and-conditions--accept"
                onClick={this.props.acceptTerms}>
                <input
                    name="accept"
                    type="checkbox"
                    checked={this.props.acceptedTerms}
                    onChange={this.props.acceptTerms}
                />
                <label htmlFor="accept">Accept Terms</label>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    acceptedTerms: state.common.acceptedTerms
});

const mapDispatchToProps = {
    acceptTerms
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AcceptTerms);
