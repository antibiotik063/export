export type Language = 'en' | 'ru' | 'fa';

export type PageRoute = 'home' | 'products' | 'logistics';

export type ProductCategoryKey =
  | 'all'
  | 'oils'
  | 'grains_pulses'
  | 'halal_dairy'
  | 'custom_sourcing';

export interface ProductOption {
  id: string;
  category: Exclude<ProductCategoryKey, 'all'>;
  imageKey:
    | 'sunflowerOil'
    | 'wheatGrains'
    | 'pulsesChickpeas'
    | 'halalDairy'
    | 'customSourcing';
  moqMt: string;
}

export interface QuotePrefill {
  productId: string;
  productLabel: string;
}
