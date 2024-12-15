export type Employee = {
  name: string;
  slug: string;
  position: string;
  country: string;
  image: string;
  socials: Social[];
};

export type Social = {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type Service = {
  title: string;
  slug: string;
  descriptions: string;
};
