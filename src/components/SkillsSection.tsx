import { useEffect, useState } from "react";
import Heading from "./ui/Heading";
import { useTranslation } from "react-i18next";
import { Database } from "../lib/types/database.types";
import supabaseClient from "../lib/supabase-client";

export default function SkillsSection() {
  const [skills, setSkills] = useState<
    null | Database["public"]["Tables"]["skills"]["Row"][]
  >(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabaseClient.from("skills").select("*");

      setSkills(data);
    })();
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Heading>{t("skills.title")}</Heading>
      <div className="space-y-2">
        {skills && skills.map((skill) => <p key={skill.id}>{skill.name}</p>)}
      </div>
    </>
  );
}
