import { useTranslation } from "react-i18next";
import Heading from "./ui/Heading";

import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import supabaseClient from "../lib/supabase-client";
import { Database } from "../lib/types/database.types";

export default function ContactsSection() {
  const [contacts, setContacts] = useState<
    null | Database["public"]["Tables"]["contacts"]["Row"][]
  >(null);

  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const { data } = await supabaseClient.from("contacts").select("*");

      setContacts(data);
    })();
  }, []);

  return (
    <>
      <Heading>{t("contacts.title")}</Heading>
      <div className="space-y-4">
        {!contacts ? (
          <>{t("loading")}</>
        ) : (
          <>
            <a
              href={`tel:${contacts[0].phone}`}
              className="flex gap-2 items-center"
            >
              <PhoneIcon className="w-4 h-4 stroke-black" />
              {contacts[0].phone}
            </a>
            <a
              href={`mailto:${contacts[0].email}`}
              className="flex gap-2 items-center"
            >
              <EnvelopeIcon className="w-4 h-4 stroke-black" />
              {contacts[0].email}
            </a>
            <a
              href={contacts[0].website}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <GlobeAltIcon className="w-4 h-4 stroke-black" />
              {contacts[0].website.replace("https://", "").replace("/", "")}
            </a>
          </>
        )}
      </div>
    </>
  );
}
