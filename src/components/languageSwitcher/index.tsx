import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex Tajawal font-bold justify-center mt-4">
      <button
        onClick={() => changeLanguage("en")}
        className="px-4 py-2 mx-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
      >
        English
      </button>
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
