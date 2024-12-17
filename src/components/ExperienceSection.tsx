import { useEffect, useState } from "react";
import { Database } from "../lib/types/database.types";
import supabaseClient from "../lib/supabase-client";
import WorkPlace from "./WorkPlace";

export default function ExperienceSection() {
  const [experience, setExperience] = useState<
    null | Database["public"]["Tables"]["work_experience"]["Row"][]
  >(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabaseClient.from("work_experience").select("*");

      setExperience(data);
    })();
  }, []);

  return (
    <section>
      {experience &&
        experience.map(
          (el) => el.hidden !== true && <WorkPlace key={el.id} job={el} />
        )}
    </section>
  );
}
