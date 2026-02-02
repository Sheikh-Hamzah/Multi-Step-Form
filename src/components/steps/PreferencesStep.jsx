import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import FormTextarea from '../FormTextarea';
import FormCheckbox from '../FormCheckbox';
import Icons from '../icons/Icons';

const contactOptions = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'sms', label: 'SMS' },
  { value: 'whatsapp', label: 'WhatsApp' },
];

const newsletterOptions = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'none', label: 'No thanks' },
];

const referralOptions = [
  { value: 'google', label: 'Google Search' },
  { value: 'social', label: 'Social Media' },
  { value: 'friend', label: 'Friend/Colleague' },
  { value: 'ad', label: 'Advertisement' },
  { value: 'other', label: 'Other' },
];

const PreferencesStep = ({ formData, handleChange, errors }) => {
  return (
    <div className="animate-slide-in">
      {/* Step Header */}
      <div className="mb-8">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-2">
          <Icons.Settings className="w-7 h-7 text-primary-500" />
          Preferences & Additional Info
        </h2>
        <p className="text-slate-500 pb-5 border-b-2 border-slate-100">
          Almost done! Set your communication preferences.
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSelect
          label="Preferred Contact Method"
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleChange}
          options={contactOptions}
          placeholder="Select preference"
          error={errors.preferredContact}
          required
        />

        <FormSelect
          label="Newsletter Subscription"
          name="newsletter"
          value={formData.newsletter}
          onChange={handleChange}
          options={newsletterOptions}
          placeholder="Select frequency"
        />

        <FormInput
          label="Interests/Topics"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          placeholder="Technology, Design, Business..."
          icon={Icons.Heart}
        />

        <FormSelect
          label="How did you hear about us?"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
          options={referralOptions}
          placeholder="Select source"
          error={errors.referralSource}
          required
        />

        <FormTextarea
          label="Additional Comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Is there anything else you'd like us to know?"
          className="md:col-span-2"
        />

        <FormCheckbox
          label={
            <>
              I accept the <strong className="text-slate-700">Terms and Conditions</strong>
            </>
          }
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          error={errors.termsAccepted}
          required
          className="md:col-span-2"
        />

        <FormCheckbox
          label={
            <>
              I accept the <strong className="text-slate-700">Privacy Policy</strong>
            </>
          }
          name="privacyAccepted"
          checked={formData.privacyAccepted}
          onChange={handleChange}
          error={errors.privacyAccepted}
          required
          className="md:col-span-2"
        />
      </div>
    </div>
  );
};

export default PreferencesStep;
