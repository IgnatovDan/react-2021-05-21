import { BasketItemProps } from "./basket_item/basket_item.props";

export interface BasketProps {
  items: BasketItemProps[];

  onAddItem?: (any) => void,
  onRemoveItem?: (any) => void,
  onRemoveWholeBasketItem?: (any) => void,  
}