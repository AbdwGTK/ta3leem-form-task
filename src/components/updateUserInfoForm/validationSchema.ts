import { t } from "i18next";
import * as Yup from "yup";

// Regular expression for Iraqi phone numbers
const iraqiPhoneNumberRegex = /^(079|078|077|075|074)\d{8}$/;

// Define validation schema function
export const Batata = () => {
  // Create validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("first_name_required")), // Validate first name is required
    lastName: Yup.string().required(t("last_name_required")), // Validate last name is required
    email: Yup.string().email(t("email_invalid")).required(t("email_required")), // Validate email format and required
    phoneNumber: Yup.string()
      .required(t("phone_number_required")) // Validate phone number is required
      .matches(iraqiPhoneNumberRegex, t("must_be_iraqi_phone_number")) // Validate phone number format using regex
      .matches(/^\d+$/, t("english_number_only")), // Validate phone number contains only English digits
    address: Yup.string().required(t("address_required")), // Validate address is required
    city: Yup.string().required(t("city_required")), // Validate city is required
  });

  return validationSchema; // Return the validation schema
};
