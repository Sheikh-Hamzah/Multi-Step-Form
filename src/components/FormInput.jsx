import Icons from './icons/Icons';

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required,
  icon: Icon,
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

      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-colors duration-300">
            <Icon className="w-5 h-5" />
          </div>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            form-input
            ${Icon ? 'form-input-with-icon' : ''}
            ${error ? 'form-input-error' : ''}
            focus:ring-4 focus:ring-primary-500/10
          `}
        />
      </div>

      {error && (
        <div className="error-message">
          <Icons.AlertCircle className="w-3.5 h-3.5" />
          {error}
        </div>
      )}
    </div>
  );
};

export default FormInput;
