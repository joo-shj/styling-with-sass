import React from 'react';
import className from 'classnames';

import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest }) {
    // return <button className={['Button', size].join(' ')}> 
    // return <button className={'Button ${size}'}> 
    console.log(rest);
    //* default값 설정 방법2
    //return <button className={'Button', size = 'midium'}> 
    return (
    <button className={ className(
        'Button', 
         size, 
         color, 
        {
         outline, 
         fullWidth,
         },
         )} 
        {...rest}
        > 
        {children} 
        </button>
    );
}

//* default값 설정 방법1
Button.defaultProps = {
    size: 'medium' ,
    color: 'blue'
}

export default Button;

