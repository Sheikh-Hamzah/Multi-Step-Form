import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import Icons from '../icons/Icons';

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not', label: 'Prefer not to say' },
];

const PersonalInfoStep = ({ formData, handleChange, errors }) => {
  return (
    <div className="animate-slide-in">
      {/* Step Header */}
      <div className="mb-8">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-2">
          <Icons.User className="w-7 h-7 text-primary-500" />
          Personal Information
        </h2>
        <p className="text-slate-500 pb-5 border-b-2 border-slate-100">
          Please provide your basic personal details to get started.
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          error={errors.firstName}
          required
          icon={Icons.User}
        />

        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          error={errors.lastName}
          required
          icon={Icons.User}
        />

        <FormInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          error={errors.email}
          required
          icon={Icons.Mail}
        />

        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          error={errors.phone}
          required
          icon={Icons.Phone}
        />

        <FormInput
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
          error={errors.dateOfBirth}
          required
          icon={Icons.Calendar}
        />

        <FormSelect
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={genderOptions}
          placeholder="Select your gender"
          error={errors.gender}
          required
        />

        <FormInput
          label="Nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          placeholder="Enter your nationality"
          icon={Icons.Globe}
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;
