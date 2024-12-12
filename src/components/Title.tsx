import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();

  return (
    <section className="pt-8 text-center space-y-4">
      <h1 className="text-4xl font-semibold">{t("name")}</h1>
      <p className="uppercase">{t("description")}</p>
    </section>
  );
}
