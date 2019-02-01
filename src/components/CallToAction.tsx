import React from 'react';
import { connect } from 'react-redux';
import EnterLocation from '../components/EnterLocation';
import AcceptTerms from '../components/AcceptTerms';
import Signup from '../components/Signup';
import { fullStateType } from '../redux/reducers/state-types';

export const CallToAction = ({
    signedUp,
    termsAndConditions
}: {
    signedUp: boolean;
    termsAndConditions: string;
}) =>
    (!signedUp && (
        <section className="action">
            <EnterLocation />
            <Signup />
            <div className="terms-and-conditions">
                <p className="terms-and-conditions--content">
                    {termsAndConditions}
                </p>
                <AcceptTerms />
            </div>
        </section>
    )) ||
    null;

const mapStateToProps = ({ common }: fullStateType) => ({
    signedUp: common.signedUp,
    termsAndConditions: common.termsAndConditions
});

export default connect(mapStateToProps)(CallToAction);
