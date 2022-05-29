import './Icon.scss'
import {IconProps} from "./Icon.types";


export const Icon: React.FC<IconProps> = ({
                                              onClick,
                                              type = 'none',
                                              model = 'regular',
                                              component: Component,
                                              ...props
                                          }) => {
    const defaultProps = {
        ...props,
        onClick,
        width: '1em',
        height: '1em',

    };

    if (Component) {
        return 'render' in Component ? Component.render({ ...defaultProps }) : Component(defaultProps);
    }


    return null;
};