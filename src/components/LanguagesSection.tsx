import { useTranslation } from "react-i18next";
import Heading from "./ui/Heading";

export default function LanguagesSection() {
  const { t } = useTranslation();

  return (
    <>
      <Heading>{t("langs.title")}</Heading>
      <div className="space-y-2">
        <div className="grid grid-cols-12 items-center gap-4">
          <p className="col-span-4">{t("langs.ru")}</p>
          <div className="col-span-8 h-2 bg-black w-full rounded-full"></div>
        </div>
        <div className="grid grid-cols-12 items-center gap-4">
          <p className="col-span-4">{t("langs.en")}</p>
          <div className="col-span-8 h-2 bg-black w-11/12 rounded-full"></div>
        </div>
      </div>
    </>
  );
}
