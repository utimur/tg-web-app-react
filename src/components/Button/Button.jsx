import React from 'react';

const Button = (props) => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default Button;
