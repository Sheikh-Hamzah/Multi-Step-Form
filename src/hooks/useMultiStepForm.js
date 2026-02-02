import { useState, useCallback } from 'react';

const initialFormData = {
  // Personal Info
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  nationality: '',
  // Address Info
  streetAddress: '',
  apartment: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  addressType: '',
  // Professional Info
  occupation: '',
  company: '',
  jobTitle: '',
  yearsOfExperience: '',
  industry: '',
  workEmail: '',
  linkedIn: '',
  // Preferences
  preferredContact: '',
  newsletter: '',
  interests: '',
  referralSource: '',
  comments: '',
  termsAccepted: false,
  privacyAccepted: false,
};

const useMultiStepForm = (totalSteps = 4) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const validateStep = useCallback((step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        break;

      case 2:
        if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.addressType) newErrors.addressType = 'Address type is required';
        break;

      case 3:
        if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required';
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
        if (!formData.yearsOfExperience) newErrors.yearsOfExperience = 'Experience is required';
        if (!formData.industry) newErrors.industry = 'Industry is required';
        if (!formData.workEmail.trim()) {
          newErrors.workEmail = 'Work email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
          newErrors.workEmail = 'Invalid email format';
        }
        break;

      case 4:
        if (!formData.preferredContact) newErrors.preferredContact = 'Preferred contact is required';
        if (!formData.referralSource) newErrors.referralSource = 'Referral source is required';
        if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept terms';
        if (!formData.privacyAccepted) newErrors.privacyAccepted = 'You must accept privacy policy';
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const nextStep = useCallback(() => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      return true;
    }
    return false;
  }, [currentStep, totalSteps, validateStep]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback((step) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  }, [totalSteps]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      return true;
    }
    return false;
  }, [currentStep, formData, validateStep]);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setCurrentStep(1);
    setIsSuccess(false);
  }, []);

  return {
    currentStep,
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    nextStep,
    prevStep,
    goToStep,
    handleSubmit,
    resetForm,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === totalSteps,
  };
};

export default useMultiStepForm;
