import React from 'react';
import '../Styles/GoBack/GoBack.css';
import arrowLeft from '../Assets/icon-arrow-left.svg';
import { useHistory } from 'react-router-dom';

const GoBack = () => {
    let history = useHistory();
    return (
        <div className="goBack">
            <img
                src={arrowLeft}
                alt="Go Back"
                onClick={history.goBack}
                type="button"
            />
            <span onClick={history.goBack} type="button">
                Go Back
            </span>
        </div>
    );
};

export default GoBack;
