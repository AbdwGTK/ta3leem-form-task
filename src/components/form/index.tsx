import React, { useState } from "react";
import { FormComponent, ProfileCard } from "..";

const FormWrapper: React.FC = () => {
  // Initial state for form values, initial values, and edit mode
  const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    image: null,
  };

  // State hooks
  const [formValues, setFormValues] = useState<any | null>(null);
  const [initialValues, setInitialValues] = useState(initialFormValues);
  const [isEditing, setIsEditing] = useState(true);

  // Function to handle form submission
  const handleFormSubmit = (values: any) => {
    setFormValues(values); // Save form values
    setIsEditing(false); // Switch to viewing mode
  };

  // Function to handle editing
  const handleEdit = () => {
    setInitialValues(formValues);
    setIsEditing(true);
  };

  return (
    <div className="flex p-4 items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl p-8 space-y-6 bg-white shadow-md rounded-md">
        {isEditing ? ( // Conditional rendering based on edit mode
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
