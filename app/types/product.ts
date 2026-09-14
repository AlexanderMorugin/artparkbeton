export interface IProductDetails {
  textAccent: string;
  textAddition: string;
}

export interface IProductPrices {
  id: number;
  sizeName: string;
  sizeOptions: string;
  sizeWeight: string;
  sizePrice: string;
  sizeCurrency: string;
}

export interface IProductOptions {
  optionName?: string;
  optionDescription: string[] | string;
  optionDescriptionTwo?: string;
}

export interface IPortfolioForCard {
  id: number;
  title: string;
  image550: string;
}
