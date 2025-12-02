import { useState } from "react";
// import BtnArrow from "@/components/icons/BtnArrow";
// import { AppButton } from "@/components/shared/Buttons";
// import useSendMail from "@/utils/useSendEmail";
import BtnArrow from "../../icons/BtnArrow";
import useSendMail from "../../../utils/useSendEmail";
import { AppButton } from "../../shared/Buttons";

const ContactForm = () => {
  const { loading, error, sendMail, submitMessage } = useSendMail("cform");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      await sendMail(formData);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        message: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="bg-white p-[30px] shadow-[0px_4px_24px_0px_#0000001A] rounded-sm lg:rounded-2xl h-fit w-full lg:min-w-[500px]">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="font-inter text-base py-[22px] text-app-dark w-full border-b border-border focus:border-app-gray focus:outline-none placeholder:text-app-gray placeholder:opacity-50 placeholder:font-inter"
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="phone"
              placeholder="Your contact number"
              value={formData.phone}
              onChange={handleChange}
              className="font-inter text-base py-[22px] text-app-dark w-full border-b border-border focus:border-app-gray focus:outline-none placeholder:text-app-gray placeholder:opacity-50 placeholder:font-inter"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <input
              name="company"
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="font-inter text-base py-[22px] text-app-dark w-full border-b border-border focus:border-app-gray focus:outline-none placeholder:text-app-gray placeholder:opacity-50 placeholder:font-inter"
            />
            {errors.company && (
              <p className="text-sm text-red-500">{errors.company}</p>
            )}
          </div>
          <div className="space-y-2">
            <input
              name="email"
              type="email"
              placeholder="Type your email address"
              value={formData.email}
              onChange={handleChange}
              className="font-inter text-base py-[22px] text-app-dark w-full border-b border-border focus:border-app-gray focus:outline-none placeholder:text-app-gray placeholder:opacity-50 placeholder:font-inter"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <textarea
            name="message"
            placeholder="Briefly state your security needs or concerns."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="font-inter text-base py-[22px] text-app-dark w-full border-b border-border focus:border-app-gray focus:outline-none placeholder:text-app-gray placeholder:opacity-50 placeholder:font-inter"
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {submitMessage && (
          <p className="text-sm text-green-500">{submitMessage}</p>
        )}
        {error && <p className="text-sm text-red-500">{error}</p>}
        <div className="flex justify-center">
          <AppButton
            as="button"
            icon={<BtnArrow />}
            type="submit"
            className="w-full sm:w-fit"
          >
            {loading ? "Sending" : "Submit"}
          </AppButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
