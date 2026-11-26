export type LinkItem = {
  href: string;
  title: string;
  label?: string;
  featured?: boolean;
};

export const links: LinkItem[] = [
  {
    href: "https://meo-mai-moi.com",
    title: "Meo Mai Moi",
    label: "Our pets management platform",
    featured: true
  },
  {
    href: "https://patreon.com/catarchy",
    title: "Become a Patron"
  },
  {
    href: "https://boosty.to/catarchy",
    title: "Boosty"
  },
  {
    href: "https://catarchy.org/#donate",
    title: "Donate"
  },
  {
    href: "https://slot4.me/booking/catarchy",
    title: "Book a visit"
  },
  {
    href: "https://www.youtube.com/catarchy",
    title: "YouTube"
  }
];
