import React from "react";
import { Field, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";

interface TextFieldProps {
  label: string;
  name: string;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  type = "text",
}) => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Label for the input field */}
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 Tajawal"
      >
        {t(label)}
      </label>
      {/* Input field */}
      <Field
        name={name}
        type={type}
        dir="auto"
        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 Tajawal font-medium text-lg"
      />
      {/* Error message if validation fails */}
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm mt-1 Tajawal text-red-600"
      />
    </div>
  );
};

export default TextField;
