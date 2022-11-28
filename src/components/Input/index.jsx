import cn from 'classnames';
import './styles.css';

const Input = ({ errorText, className, ...restProps }) => {
    return (
        <div className={cn('cnInputRoot', className)}>
            <input {...restProps} className={cn('cnInputItem', errorText && 'cnInputWithError')}/>
            <span className="cnInputError">{errorText}</span>
        </div>
    );
};

export default Input;
