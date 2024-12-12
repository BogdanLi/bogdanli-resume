import Heading from "./ui/Heading";
import { useTranslation } from "react-i18next";

export default function EducationSection() {
  const { t } = useTranslation();

  return (
    <>
      <Heading>{t("education.title")}</Heading>
      <div className="space-y-2">
        <h2 className="font-semibold">{t("education.degree")}</h2>
        <h1 className="text-xl font-semibold">{t("education.school")}</h1>
        <p>2012 - 2023</p>
      </div>
    </>
  );
}
