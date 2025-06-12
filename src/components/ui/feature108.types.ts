export interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

export interface Feature108Props {
  heading?: string;
  description?: string;
  tabs?: Tab[];
}
