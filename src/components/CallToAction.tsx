import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EnterLocation from '../components/EnterLocation';
import AcceptTerms from '../components/AcceptTerms';
import Signup from '../components/Signup';
import TermsAndConditions from '../components/TermsAndConditions';

export class CallToAction extends Component<any, any> {
    static propTypes = {
        signedUp: PropTypes.bool
    };

    render() {
        return (
            (!this.props.signedUp && (
                <section className="action">
                    <EnterLocation />
                    <Signup />
                    <div className="terms-and-conditions">
                        <TermsAndConditions />
                        <AcceptTerms />
                    </div>
                </section>
            )) ||
            null
        );
    }
}

const mapStateToProps = (state: any) => ({
    signedUp: state.common.signedUp
});

export default connect(mapStateToProps)(CallToAction);
