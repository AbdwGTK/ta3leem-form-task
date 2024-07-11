import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      sign_up: "Sign Up",
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      phone_number: "Phone Number",
      address: "Address",
      city: "City",
      submit: "Submit",
      first_name_required: "First name is required",
      last_name_required: "Last name is required",
      email_invalid: "Invalid email address",
      email_required: "Email is required",
      phone_number_required: "Phone number is required",
      must_be_iraqi_phone_number:
        "Iraqi number that starts with 077, 078, 079, 075",
      english_number_only: "English numbers only",
      address_required: "Address is required",
      city_required: "City is required",
      remove: "Remove",
      edit: "Edit",
      profile: "Profile",
    },
  },
  ar: {
    translation: {
      sign_up: "سجل",
      first_name: "الاسم الأول",
      last_name: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone_number: "رقم الهاتف",
      address: "العنوان",
      city: "المدينة",
      submit: "إرسال",
      first_name_required: "الاسم الأول مطلوب",
      last_name_required: "اسم العائلة مطلوب",
      email_invalid: "البريد الإلكتروني غير صحيح",
      email_required: "البريد الإلكتروني مطلوب",
      phone_number_required: "رقم الهاتف مطلوب",
      must_be_iraqi_phone_number: "الرقم عراقي يبدأ بـ078 او 077 او 079 او 075",
      english_number_only: "الرقم باللغة العربية فقط",
      address_required: "العنوان مطلوب",
      city_required: "المدينة مطلوبة",
      remove: "حذف الصورة",
      edit: "تعديل",
      profile: "الملف الشخصي",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
