import cn from 'classnames';
import './styles.css';

const FormTextArea = ({ className, errorText, ...restProps }) => (
    <div className={cn('cnInputRoot', className)}>
        <textarea {...restProps} className={cn('cnFormTextAreaRoot', errorText && 'cnFormTextAreaWithError')} />
        <span className="cnInputError">{errorText}</span>
    </div>
);

export default FormTextArea;
