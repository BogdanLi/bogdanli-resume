import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex flex-col md:absolute top-4 right-8">
      <button
        disabled={i18n.language === "en"}
        className={`${i18n.language === "en" ? "font-medium" : ""}`}
        onClick={() => changeLang("en")}
      >
        English
      </button>
      <button
        disabled={i18n.language === "ru"}
        className={`${i18n.language === "ru" ? "font-medium" : ""}`}
        onClick={() => changeLang("ru")}
      >
        Русский
      </button>
    </div>
  );
}
