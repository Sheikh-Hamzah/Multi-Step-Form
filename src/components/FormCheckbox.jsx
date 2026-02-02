import Icons from './icons/Icons';

const FormCheckbox = ({
  label,
  name,
  checked,
  onChange,
  error,
  required,
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className={`
          p-5 rounded-xl border-2 transition-all duration-300
          ${error
            ? 'bg-red-50 border-red-300'
            : 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 hover:border-slate-300'
          }
        `}
      >
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <div className="relative">
            <input
              type="checkbox"
              name={name}
              checked={checked}
              onChange={onChange}
              className="
                appearance-none w-6 h-6 min-w-6 border-2 border-slate-300 rounded-md
                cursor-pointer transition-all duration-200 bg-white
                hover:border-primary-500
                checked:bg-gradient-to-br checked:from-primary-500 checked:to-secondary-500 checked:border-primary-500
                focus:ring-4 focus:ring-primary-500/20 focus:outline-none
              "
            />
            {checked && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </div>

          <span className="text-slate-600 font-medium text-[0.95rem]">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </span>
        </label>
      </div>

      {error && (
        <div className="error-message mt-2">
          <Icons.AlertCircle className="w-3.5 h-3.5" />
          {error}
        </div>
      )}
    </div>
  );
};

export default FormCheckbox;
