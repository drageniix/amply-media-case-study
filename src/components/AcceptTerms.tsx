import React, { MouseEvent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { acceptTerms } from '../redux/actions/common';
import { fullStateType } from '../redux/reducers/state-types';

export const AcceptTerms = ({
    acceptedTerms,
    acceptTerms
}: {
    acceptedTerms: boolean;
    acceptTerms: (event: MouseEvent | ChangeEvent) => void;
}) => (
    <div className="terms-and-conditions--accept" onClick={acceptTerms}>
        <input
            name="accept"
            type="checkbox"
            checked={acceptedTerms}
            onChange={acceptTerms}
        />
        <label htmlFor="accept">Accept Terms</label>
    </div>
);

const mapStateToProps = ({ common }: fullStateType) => ({
    acceptedTerms: common.acceptedTerms
});

const mapDispatchToProps = {
    acceptTerms
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AcceptTerms);
