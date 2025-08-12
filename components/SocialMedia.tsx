import React from 'react';
import { Facebook, Instagram, Twitter, Github, Linkedin } from 'lucide-react';
import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from './ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface SocialMediaProps {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}


const socialLink = [
  {
    title: "Github",
    href: "https://github.com/abe-dev762",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "#",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "#",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "#",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "#",
    icon: <Twitter className="w-5 h-5" />,
  },
];



const SocialMedia = ({ className, iconClassName, tooltipClassName }: SocialMediaProps) => {
  return (
     <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;