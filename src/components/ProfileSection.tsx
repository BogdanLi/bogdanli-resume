import { useTranslation } from "react-i18next";
import Heading from "./ui/Heading";

export default function ProfileSection() {
  const { t } = useTranslation();

  return (
    <>
      <Heading>{t("profile.title")}</Heading>
      <p className="text-sm">{t("profile.description")}</p>
    </>
  );
}
