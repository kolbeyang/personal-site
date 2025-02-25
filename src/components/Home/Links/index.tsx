import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMedium,
} from "@tabler/icons-react";
import LinkButton from "./LinkButton";
import { links } from "@/links";

const Links = () => {
  return (
    <div className="flex w-full justify-center gap-[4px]">
      <LinkButton href={links.github} icon={IconBrandGithub} />
      <LinkButton href={links.dribbble} icon={IconBrandDribbble} />
      <LinkButton href={links.medium} icon={IconBrandMedium} />
      <LinkButton href={links.instagram} icon={IconBrandInstagram} />
      <LinkButton href={links.linkedin} icon={IconBrandLinkedin} />
    </div>
  );
};

export default Links;
