import Icons from './icons/Icons';

const stepConfig = [
  { icon: Icons.User, label: 'Personal' },
  { icon: Icons.MapPin, label: 'Address' },
  { icon: Icons.Briefcase, label: 'Professional' },
  { icon: Icons.Settings, label: 'Preferences' },
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="relative flex justify-between items-start mb-12 px-2.5">
      {/* Background line */}
      <div className="absolute top-7 left-[60px] right-[60px] h-1 bg-slate-200 rounded z-0" />

      {stepConfig.map((step, index) => {
        const stepNumber = index + 1;
        const StepIcon = step.icon;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div
            key={stepNumber}
            className="flex flex-col items-center relative z-10 flex-1"
          >
            {/* Step Circle */}
            <div
              className={`
                relative w-14 h-14 rounded-full flex items-center justify-center font-semibold text-lg
                transition-all duration-400 ease-out border-[3px]
                ${isCompleted
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-emerald-300/30 shadow-[0_8px_20px_-4px_rgba(16,185,129,0.4)]'
                  : isActive
                    ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white border-primary-300/30 shadow-[0_10px_30px_-5px_rgba(102,126,234,0.5)] scale-105'
                    : 'bg-slate-100 text-slate-400 border-transparent'
                }
              `}
            >
              {/* Pulse ring for active step */}
              {isActive && (
                <div className="absolute inset-[-2px] rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 -z-10 animate-pulse-ring" />
              )}

              {/* Icon */}
              {isCompleted ? (
                <Icons.Check className="w-6 h-6" />
              ) : (
                <StepIcon className="w-6 h-6" />
              )}
            </div>

            {/* Step Label */}
            <span
              className={`
                mt-3 text-sm font-medium text-center transition-all duration-300
                ${isActive ? 'text-primary-500 font-semibold' : isCompleted ? 'text-emerald-500' : 'text-slate-500'}
              `}
            >
              {step.label}
            </span>

            {/* Connecting Line */}
            {stepNumber < 4 && (
              <div className="absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-1 bg-slate-200 z-0 overflow-hidden">
                <div
                  className={`
                    h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded
                    transition-all duration-600 ease-out
                    ${isCompleted ? 'w-full' : 'w-0'}
                  `}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
