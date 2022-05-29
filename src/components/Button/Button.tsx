import React from "react";
import './Button.scss'
import {ButtonProps} from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
                                                  submit = false,
                                                  onClick,

                                                  className,
                                                  size = 'medium',
                                                  type = 'ghost',
                                                  ...props
                                              }) => {
    return (
        <div

            onClick={!props.disabled ? onClick : undefined}
            role="presentation"
        >


            <button
                type={submit ? 'submit' : 'button'}
                disabled={props.disabled}
                {...props}
            >

            </button>
        </div>
    );
};
