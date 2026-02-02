import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import Icons from '../icons/Icons';

const experienceOptions = [
  { value: '0-1', label: '0-1 years' },
  { value: '1-3', label: '1-3 years' },
  { value: '3-5', label: '3-5 years' },
  { value: '5-10', label: '5-10 years' },
  { value: '10+', label: '10+ years' },
];

const industryOptions = [
  { value: 'tech', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'other', label: 'Other' },
];

const ProfessionalInfoStep = ({ formData, handleChange, errors }) => {
  return (
    <div className="animate-slide-in">
      {/* Step Header */}
      <div className="mb-8">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-2">
          <Icons.Briefcase className="w-7 h-7 text-primary-500" />
          Professional Information
        </h2>
        <p className="text-slate-500 pb-5 border-b-2 border-slate-100">
          Tell us about your professional background and experience.
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="Software Engineer, Designer, etc."
          error={errors.occupation}
          required
          icon={Icons.Briefcase}
        />

        <FormInput
          label="Company/Organization"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter company name"
          error={errors.company}
          required
          icon={Icons.Building}
        />

        <FormInput
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Your current job title"
          error={errors.jobTitle}
          required
        />

        <FormSelect
          label="Years of Experience"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          options={experienceOptions}
          placeholder="Select experience level"
          error={errors.yearsOfExperience}
          required
        />

        <FormSelect
          label="Industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          options={industryOptions}
          placeholder="Select your industry"
          error={errors.industry}
          required
        />

        <FormInput
          label="Work Email"
          name="workEmail"
          type="email"
          value={formData.workEmail}
          onChange={handleChange}
          placeholder="work@company.com"
          error={errors.workEmail}
          required
          icon={Icons.Mail}
        />

        <FormInput
          label="LinkedIn Profile"
          name="linkedIn"
          type="url"
          value={formData.linkedIn}
          onChange={handleChange}
          placeholder="linkedin.com/in/yourprofile"
          icon={Icons.Linkedin}
        />
      </div>
    </div>
  );
};

export default ProfessionalInfoStep;
