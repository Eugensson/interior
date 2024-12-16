export type Employee = {
  name: string;
  slug: string;
  position: string;
  country: string;
  image: string;
  phone: string;
  email: string;
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

export type Project = {
  title: string;
  slug: string;
  descriptions: string;
  tags: string[];
  category: string;
  imagethumb: string;
  images: string[];
};

export type Stat = {
  countNum: number;
  text: string;
};

export type Article = {
  title: string;
  slug: string;
  description: string;
  category: string;
  imagethumb: string;
  images: string[];
  tags: string[];
  date: string;
};
