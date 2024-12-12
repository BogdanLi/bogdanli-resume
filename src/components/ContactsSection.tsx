import { useTranslation } from "react-i18next";
import Heading from "./ui/Heading";

import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default function ContactsSection() {
  const { t } = useTranslation();

  return (
    <>
      <Heading>{t("contacts.title")}</Heading>
      <div className="space-y-4">
        <a href="tel:+992032000043" className="flex gap-2 items-center">
          <PhoneIcon className="w-4 h-4 stroke-black" />
          +992 03 200 0043
        </a>
        <a
          href="mailto:li.bogdan74@gmail.com"
          className="flex gap-2 items-center"
        >
          <EnvelopeIcon className="w-4 h-4 stroke-black" />
          li.bogdan74@gmail.com
        </a>
        <a
          href="https://bogdan-li.xyz"
          target="_blank"
          className="flex gap-2 items-center"
        >
          <GlobeAltIcon className="w-4 h-4 stroke-black" />
          bogdan-li.xyz
        </a>
      </div>
    </>
  );
}
