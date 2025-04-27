import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMedium,
} from "@tabler/icons-react";
import LinkButton from "./LinkButton";
import { links } from "@/links";
import { cn } from "@/utils/classNameMerge";
import { useMemo, useState } from "react";

// Interface for the social links
interface SocialLink {
  key: string;
  href: string;
  icon: typeof IconBrandGithub;
  handle: string;
}

const socialLinks: SocialLink[] = [
  {
    key: "github",
    href: links.github,
    icon: IconBrandGithub,
    handle: "KOLBEYANG",
  },
  {
    key: "dribbble",
    href: links.dribbble,
    icon: IconBrandDribbble,
    handle: "KOLBEYANG",
  },
  {
    key: "medium",
    href: links.medium,
    icon: IconBrandMedium,
    handle: "KOLBEYANG",
  },
  {
    key: "instagram",
    href: links.instagram,
    icon: IconBrandInstagram,
    handle: "KOLBEYANG",
  },
  {
    key: "linkedin",
    href: links.linkedin,
    icon: IconBrandLinkedin,
    handle: "KOLBEYANG",
  },
];

interface Props {
  className?: string;
}

const Links = ({ className }: Props) => {
  const [currentHoveredKey, setCurrentHoveredKey] = useState<string | null>(
    null,
  );
  const hoveredSocialLink = useMemo(
    () => socialLinks.find(({ key }) => key === currentHoveredKey),
    [currentHoveredKey],
  );
  return (
    <section
      id="socials"
      className={cn(
        "flex w-full flex-1 h-full justify-center flex-col items-center gap-[20px]",
        className,
      )}
    >
      <div
        className=" flex flex-col text-[60px] sm:text-[80px] leading-[48px] sm:leading-[64px] font-medium tracking-tighter items-center

        "
      >
        {currentHoveredKey ? (
          <>
            <span>{hoveredSocialLink?.key.toUpperCase()}</span>
            <span className="flex gap-1 items-center">
              <span className="text-[60px] leading-[60px]">@</span>
              <span>{hoveredSocialLink?.handle.toUpperCase()}</span>
            </span>
          </>
        ) : (
          <>
            <span>ELSEWHERE</span>
            <span>ONLINE</span>
          </>
        )}
      </div>
      <div className="flex gap-1">
        {socialLinks.map((socialLink) => (
          <LinkButton
            onMouseEnter={() => setCurrentHoveredKey(socialLink.key)}
            onMouseLeave={() => setCurrentHoveredKey(null)}
            key={socialLink.key}
            href={socialLink.href}
            icon={socialLink.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Links;
