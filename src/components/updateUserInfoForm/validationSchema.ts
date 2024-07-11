import { t } from "i18next";
import * as Yup from "yup";
const iraqiPhoneNumberRegex = /^(079|078|077|075|074)\d{8}$/;

export const Batata = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("first_name_required")),
    lastName: Yup.string().required(t("last_name_required")),
    email: Yup.string().email(t("email_invalid")).required(t("email_required")),
    phoneNumber: Yup.string()
      .required(t("phone_number_required"))
      .matches(iraqiPhoneNumberRegex, t("must_be_iraqi_phone_number"))
      .matches(/^\d+$/, t("english_number_only")),
    address: Yup.string().required(t("address_required")),
    city: Yup.string().required(t("city_required")),
  });
  return validationSchema;
};
