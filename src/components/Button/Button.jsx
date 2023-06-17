import React from "react";
import PropTypes from 'prop-types';
import {  ButtonLoadMore } from "./Button.styled";
 const Button = ({onClick}) => {
    return (
        <div>
        <ButtonLoadMore onClick={onClick} type='button'>Load more</ButtonLoadMore>
        </div>
            )
}
Button.propTypes = {
onClick:PropTypes.func.isRequired,
}
export default Button;