export interface Catalog {
  id: number;
  title: string;
  subtitle: string;
  route: string;
}

export interface CatalogList {
  id: number;
  title: string;
  imageBig: string;
  imageNormal: string;
  imageThumb: string;
}

export interface CatalogStep {
  id: number;
  sizeName: string;
  sizeOptions: string;
  sizeWeight: string;
  sizePrice: string;
  sizeCurrency: string;
}

export interface CatalogStepOptions {
  optionName: string;
  optionDescription: string[] | string;
  optionDescriptionTwo?: string;
}
