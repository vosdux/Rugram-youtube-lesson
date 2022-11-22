import Button from '../Button';
import './styles.css'

const TextArea = ({ value, onChange, placeholder, isLoading, onSubmit, buttonText }) => (
    <div className='cnTextAreaWrapper'>
        <textarea
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            className="cnTextArea"
        />
        <Button disabled={isLoading} className='cnSendButton' onClick={onSubmit}>{buttonText}</Button>
    </div >
);

export default TextArea;
