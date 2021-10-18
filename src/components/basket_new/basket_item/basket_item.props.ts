export interface BasketItemProps {
  title: string;
  item_cost: number;

  onRemoveWholeBasketItem?: (any) => void,    
}