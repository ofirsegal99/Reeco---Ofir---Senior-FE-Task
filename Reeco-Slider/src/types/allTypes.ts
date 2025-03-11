export type Option<T> = {
    text: string;
    value: T;
  };

export type MovementByOption = Option<string> & {
    type: 'Pixels' | 'Items';
  };

export type ProductOptions =  'productCard' | 'chip';
  
export type OrientationType = 'vertical' | 'horizontal';


export type ProductCardItem = {
    id: number;
    name: string;
    description: string;
    image: string;
};
  
export type CategoryChipItem = {
  id: number;
  name: string;
  color: string;
  icon: string;
  description: string;
};