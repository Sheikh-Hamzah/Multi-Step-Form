import Icons from './icons/Icons';

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  required,
  rows = 4,
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`
          form-textarea
          ${error ? 'form-input-error' : ''}
        `}
      />

      {error && (
        <div className="error-message">
          <Icons.AlertCircle className="w-3.5 h-3.5" />
          {error}
        </div>
      )}
    </div>
  );
};

export default FormTextarea;
