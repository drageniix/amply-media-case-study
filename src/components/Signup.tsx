import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../redux/actions/common';
import { fullStateType } from '../redux/reducers/state-types';

export const Signup = ({
    signUp,
    acceptedTerms,
    location
}: {
    signUp: (event: MouseEvent) => void;
    acceptedTerms: Boolean;
    location: String;
}) => (
    <button
        onClick={signUp}
        className="signup"
        disabled={!acceptedTerms || !location}>
        Sign Up
    </button>
);

const mapStateToProps = ({ common }: fullStateType) => ({
    acceptedTerms: common.acceptedTerms,
    location: common.location
});

const mapDispatchToProps = {
    signUp
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);
