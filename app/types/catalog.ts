export interface Catalog {
  id: number;
  title: string;
  subtitle: string;
  route: string;
}

export interface CatalogStepOptions {
  optionName: string;
  optionDescription: string[] | string;
  optionDescriptionTwo?: string;
}

export interface ICatalogListCardImage {
  id: number;
  float: string;
  route: string;
  title: string;
  subtitle: string;
  image: string;
}
