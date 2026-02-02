import AnimatedBackground from './components/AnimatedBackground';
import ProgressBar from './components/ProgressBar';
import PersonalInfoStep from './components/steps/PersonalInfoStep';
import AddressInfoStep from './components/steps/AddressInfoStep';
import ProfessionalInfoStep from './components/steps/ProfessionalInfoStep';
import PreferencesStep from './components/steps/PreferencesStep';
import Icons from './components/icons/Icons';
import useMultiStepForm from './hooks/useMultiStepForm';

const MultiStepForm = () => {
  const {
    currentStep,
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    nextStep,
    prevStep,
    handleSubmit,
    resetForm,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm(4);

  const renderCurrentStep = () => {
    const stepProps = { formData, handleChange, errors };

    switch (currentStep) {
      case 1:
        return <PersonalInfoStep {...stepProps} />;
      case 2:
        return <AddressInfoStep {...stepProps} />;
      case 3:
        return <ProfessionalInfoStep {...stepProps} />;
      case 4:
        return <PreferencesStep {...stepProps} />;
      default:
        return null;
    }
  };

  const onFormSubmit = async (e) => {
    await handleSubmit(e);
  };

  // Success Screen
  if (isSuccess) {
    return (
      <>
        <AnimatedBackground />
        <div className="min-h-screen py-10 px-4 sm:px-6 relative z-10 flex items-center justify-center">
          <div className="max-w-[500px] w-full">
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-8 sm:p-12 text-center overflow-hidden">
              {/* Top Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500" />

              {/* Success Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Success Message */}
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
                Registration Complete!
              </h2>
              <p className="text-slate-500 mb-8">
                Thank you, {formData.firstName}! Your registration has been submitted successfully.
              </p>

              {/* User Info Summary */}
              <div className="bg-slate-50 rounded-xl p-4 mb-8 text-left">
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Email:</span> {formData.email}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  <span className="font-medium">Phone:</span> {formData.phone}
                </p>
              </div>

              {/* Reset Button */}
              <button
                type="button"
                onClick={resetForm}
                className="btn-primary w-full sm:w-auto"
              >
                Submit Another Response
              </button>

              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Form Container */}
      <div className="min-h-screen py-10 px-4 sm:px-6 relative z-10">
        <div className="max-w-[900px] mx-auto">
          {/* Glass Card Container */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)] p-8 sm:p-12 overflow-hidden">
            {/* Top Gradient Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-pink-500 bg-[length:300%_100%] animate-shimmer"
            />

            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-3 tracking-tight">
                Registration Form
              </h1>
              <p className="text-slate-500">
                Complete all steps to create your account
              </p>
            </div>

            {/* Progress Bar */}
            <ProgressBar currentStep={currentStep} />

            {/* Form */}
            <form onSubmit={onFormSubmit}>
              {/* Step Content */}
              {renderCurrentStep()}

              {/* Navigation */}
              <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-10 pt-8 border-t-2 border-slate-100 gap-4">
                {/* Previous Button */}
                {!isFirstStep && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary w-full sm:w-auto group"
                  >
                    <Icons.ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    Previous
                  </button>
                )}

                {/* Spacer when on first step */}
                {isFirstStep && <div />}

                {/* Next/Submit Button */}
                {!isLastStep ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary w-full sm:w-auto ml-auto group"
                  >
                    Continue
                    <Icons.ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      btn-success w-full sm:w-auto ml-auto group
                      ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Registration
                        <Icons.Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>

            {/* Bottom Decorative Element */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-3xl" />
          </div>

          {/* Footer Text */}
          <div className="text-center mt-6 space-y-1">
            <p className="text-white/40 text-xs">
              Your data is secure and encrypted
            </p>
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()}{' '}
              <span className="font-semibold text-white/80">Sheikh Hamzah</span>
              <span className="text-white/40"> &middot; All rights reserved</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
