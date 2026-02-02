import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import Icons from '../icons/Icons';

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'in', label: 'India' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'ng', label: 'Nigeria' },
  { value: 'other', label: 'Other' },
];

const addressTypeOptions = [
  { value: 'home', label: 'Home' },
  { value: 'work', label: 'Work' },
  { value: 'other', label: 'Other' },
];

const AddressInfoStep = ({ formData, handleChange, errors }) => {
  return (
    <div className="animate-slide-in">
      {/* Step Header */}
      <div className="mb-8">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-2">
          <Icons.MapPin className="w-7 h-7 text-primary-500" />
          Address Information
        </h2>
        <p className="text-slate-500 pb-5 border-b-2 border-slate-100">
          Where can we reach you? Enter your residential address.
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Street Address"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          placeholder="123 Main Street"
          error={errors.streetAddress}
          required
          icon={Icons.Home}
          className="md:col-span-2"
        />

        <FormInput
          label="Apartment/Suite"
          name="apartment"
          value={formData.apartment}
          onChange={handleChange}
          placeholder="Apt, Suite, Unit (optional)"
        />

        <FormInput
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          error={errors.city}
          required
          icon={Icons.Building}
        />

        <FormInput
          label="State/Province"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter your state"
          error={errors.state}
          required
        />

        <FormInput
          label="Postal Code"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="12345"
          error={errors.postalCode}
          required
        />

        <FormSelect
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          options={countryOptions}
          placeholder="Select your country"
          error={errors.country}
          required
        />

        <FormSelect
          label="Address Type"
          name="addressType"
          value={formData.addressType}
          onChange={handleChange}
          options={addressTypeOptions}
          placeholder="Select address type"
          error={errors.addressType}
          required
        />
      </div>
    </div>
  );
};

export default AddressInfoStep;
