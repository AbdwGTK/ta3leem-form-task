import React, { useState } from "react";
import { FormComponent, ProfileCard } from "..";

const FormWrapper: React.FC = () => {
  const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    image: null,
  };

  const [formValues, setFormValues] = useState<any | null>(null);
  const [initialValues, setInitialValues] = useState(initialFormValues);
  const [isEditing, setIsEditing] = useState(true);

  const handleFormSubmit = (values: any) => {
    setFormValues(values);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setInitialValues(formValues);
    setIsEditing(true);
  };

  return (
    <div className="flex p-4 items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl p-8 space-y-6 bg-white shadow-md rounded-md">
        {isEditing ? (
          <FormComponent
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
          />
        ) : (
          <ProfileCard values={formValues} onEdit={handleEdit} />
        )}
      </div>
    </div>
  );
};

export default FormWrapper;
