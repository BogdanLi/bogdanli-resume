import { useTranslation } from "react-i18next";
import { Database } from "../lib/types/database.types";
import dayjs from "dayjs";
import { getEmploymentType, getLocationType, getMonth } from "../lib/utils";

type Props = {
  job: Database["public"]["Tables"]["work_experience"]["Row"];
};

export default function WorkPlace({ job }: Props) {
  const { i18n, t } = useTranslation();

  const start = `${getMonth(
    dayjs(job.start_date).format("MM"),
    i18n.language
  )} ${dayjs(job.start_date).format("YYYY")}`.toUpperCase();

  const end = job.end_date
    ? `${getMonth(dayjs(job.end_date).format("MM"), i18n.language)} ${dayjs(
        job.end_date
      ).format("YYYY")}`.toUpperCase()
    : t("present").toUpperCase();

  const employmentType = getEmploymentType(job.employment_type, i18n.language);
  const locationType = getLocationType(job.location, i18n.language);

  return (
    <article className="mt-4">
      <h1 className="font-semibold">
        {i18n.language === "ru" ? job.position_ru : job.position_en}
      </h1>
      <div className="flex flex-col gap-2 lg:flex-row justify-between text-sm">
        <div>
          <p>{i18n.language === "ru" ? job.company_ru : job.company_en}</p>
          <p className="text-xs">
            {employmentType} - {locationType}
          </p>
        </div>
        <p>
          {start} - {end}
        </p>
      </div>
      <div className="text-sm ps-4 my-2">
        {i18n.language === "ru"
          ? job.responsibilities_ru &&
            job.responsibilities_ru.map((el: string) => {
              return <li>{el}</li>;
            })
          : job.responsibilities_en &&
            job.responsibilities_en.map((el: string) => {
              return <li>{el}</li>;
            })}
      </div>
    </article>
  );
}
