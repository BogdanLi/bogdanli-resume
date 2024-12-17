import ContactsSection from "./ContactsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import LanguagesSection from "./LanguagesSection";
import ProfileSection from "./ProfileSection";
import SkillsSection from "./SkillsSection";
import Divider from "./ui/Divider";

export default function Main() {
  return (
    <div className="grid lg:grid-cols-12">
      <div className="order-4 lg:order-1 lg:col-span-5 bg-gray-100 px-6 md:px-12 py-4 space-y-4">
        <ContactsSection />
        <Divider variant="dotted" />
        <SkillsSection />
        <Divider variant="dotted" />
        <EducationSection />
        <Divider variant="dotted" />
        <LanguagesSection />
      </div>
      <div className="order-2 lg:col-span-7 py-4 ps-4 md:pe-12 space-y-6">
        <ProfileSection />
        <Divider variant="dotted" />
        <ExperienceSection />
      </div>
    </div>
  );
}
