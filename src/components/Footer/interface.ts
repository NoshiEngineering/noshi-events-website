export interface IFooterItem {
  label: string;
  url: string;
  icon?: string;
}

export interface IFooterSection {
  title: string;
  links: IFooterItem[];
}
