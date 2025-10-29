import { cn } from "@/utils/classNameMerge";
import AnimatedLink from "./AnimatedLink";
import { links } from "@/links";

interface FooterLink {
  label: string;
  link: string;
}

interface FooterProps {
  className?: string;
}

const socialLinks: FooterLink[] = [
  { label: "Github", link: links.github },
  { label: "Dribbble", link: links.dribbble },
  { label: "Medium", link: links.medium },
  { label: "Instagram", link: links.instagram },
  { label: "LinkedIn", link: links.linkedin },
];

const navigationLinks: FooterLink[] = [
  { label: "Top", link: "#top" },
  { label: "Tools", link: "#tools" },
  { label: "Projects", link: "#projects" },
  { label: "Links", link: "#links" },
];

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("py-8 max-w-[600px]", className)}>
      <div className="grid grid-rows-3 grid-flow-col gap-x-12 gap-y-1 items-start">
        {socialLinks.map((link) => (
          <AnimatedLink
            key={link.label}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-left max-w-[100px]"
          >
            {link.label}
          </AnimatedLink>
        ))}
        {navigationLinks.map((link) => (
          <AnimatedLink
            key={link.label}
            href={link.link}
            className="text-left max-w-[100px]"
          >
            {link.label}
          </AnimatedLink>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
