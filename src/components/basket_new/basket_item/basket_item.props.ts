export interface BasketItemProps {
  title: string;
  quantity: number;
  item_cost: number;

  onAddItem?: (any) => void,
  onRemoveItem?: (any) => void,
  onRemoveWholeBasketItem?: (any) => void,    
}