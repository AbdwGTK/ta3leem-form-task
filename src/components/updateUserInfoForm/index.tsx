import React from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher, TextField, UploadButton } from "..";
import { Batata } from "./validationSchema";

interface FormComponentProps {
  initialValues: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    image: string | ArrayBuffer | null;
  };
  onSubmit: (values: any) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  initialValues,
  onSubmit,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <LanguageSwitcher />
      <h2 className="text-2xl font-bold text-center Tajawal">{t("sign_up")}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={Batata}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onSubmit(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form
            className={`space-y-4 ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
          >
            <TextField label={t("first_name")} name="firstName" />
            <TextField label={t("last_name")} name="lastName" />
            <TextField label={t("email")} name="email" type="email" />
            <TextField label={t("phone_number")} name="phoneNumber" />
            <TextField label={t("address")} name="address" />
            <TextField label={t("city")} name="city" />
            <UploadButton
              initialImage={initialValues.image} // Pass initial image value for preview
              onImageChange={(image: string | ArrayBuffer | null) =>
                setFieldValue("image", image)
              }
            />
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 Tajawal font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                {t("submit")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
