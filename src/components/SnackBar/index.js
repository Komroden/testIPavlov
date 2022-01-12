import React from 'react';
import './style.scss';

export const SnackBar = ({text,visible}) => {
    return (
        <div style={{display:visible?'flex':'none'}} className={'snackBar'}>
            <img src={'/images/success.svg'} alt={'success'} className={'snackBar__icon'}/>
            <span className={'snackBar__text snackBar__text_paddingLeft'}>{text}</span>

        </div>
    );
};

