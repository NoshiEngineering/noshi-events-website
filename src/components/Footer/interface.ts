import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IFooterItem {
  label: string;
  url: string;
  icon?: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
}

export interface IFooterSection {
  title: string;
  links: IFooterItem[];
}
