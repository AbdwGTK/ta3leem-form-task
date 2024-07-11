import React from "react";
import { useTranslation } from "react-i18next";

interface ProfileCardProps {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    image: string | ArrayBuffer | null;
  };
  onEdit: () => void;
}

const CardInfo = ({ label, value }: { label: string; value: string }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={` flex justify-between gap-10 ${
        i18n.language === "ar" ? "rtl" : "ltr"
      }`}
      style={
        i18n.language === "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
    >
      <p className="Tajawal text-xl">{`${t(label)}: `}</p>
      <p className="Tajawal text-xl">{value}</p>
    </div>
  );
};

const ProfileCard: React.FC<ProfileCardProps> = ({ values, onEdit }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl Tajawal font-bold text-center">{t("profile")}</h2>
      {values.image && (
        <img
          src={values.image as string}
          alt="Profile"
          className="object-cover w-32 h-32 rounded-full"
        />
      )}
      <div>
        <CardInfo label={"first_name"} value={values.firstName} />
        <CardInfo label={"last_name"} value={values.lastName} />
        <CardInfo label={"email"} value={values.email} />
        <CardInfo label={"phone_number"} value={values.phoneNumber} />
        <CardInfo label={"address"} value={values.address} />
        <CardInfo label={"city"} value={values.city} />
      </div>
      <button
        onClick={onEdit}
        className="px-4 py-2 font-bold text-white Tajawal bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
      >
        {t("edit")}
      </button>
    </div>
  );
};

export default ProfileCard;