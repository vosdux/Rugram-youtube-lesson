import cn from "classnames";
import './styles.css';

const Button = (props) => {
    return (
        <button {...props} className={cn('cnButton', props.className)} />
    )
}

export default Button;
