import React from 'react';
import { connect } from 'react-redux';
import EnterLocation from '../components/EnterLocation';
import AcceptTerms from '../components/AcceptTerms';
import Signup from '../components/Signup';
import { fullStateType } from '../redux/reducers/state-types';
import { getTemperatureColor } from '../redux/selectors/common';

export const CallToAction = ({
    signedUp,
    termsAndConditions,
    color
}: {
    signedUp: boolean;
    termsAndConditions: string;
    color: string;
}) =>
    (!signedUp && (
        <section className="action">
            <h1 className={'action__title' + color}>Get Daily Alerts</h1>
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
    termsAndConditions: common.termsAndConditions,
    color: getTemperatureColor(common)
});

export default connect(mapStateToProps)(CallToAction);
