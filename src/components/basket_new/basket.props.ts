import { BasketItemProps } from "./basket_item/basket_item.props";

export interface BasketProps {
  items: BasketItemProps[];

  onRemoveWholeBasketItem?: (any) => void,  
}