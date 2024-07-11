import React from "react";
import { useTranslation } from "react-i18next";

// LanguageSwitcher component for language selection
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  // Function to change the language using i18n
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex Tajawal font-bold justify-center mt-4">
      {/* Button to switch to English */}
      <button
        onClick={() => changeLanguage("en")}
        className="px-4 py-2 mx-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
      >
        English
      </button>
      {/* Button to switch to Arabic */}
      <button
        onClick={() => changeLanguage("ar")}
        className="px-4 py-2 mx-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;
