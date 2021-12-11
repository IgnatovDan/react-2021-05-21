import { BasketItemProps } from "./basket_item.props";

const BasketItem = ({ title, item_cost, onRemoveWholeBasketItem }: BasketItemProps): JSX.Element => {
  return (
    <div>
      <span>Айтем: {title}</span>
      <span>Суммарная цена {item_cost}</span>
      {onRemoveWholeBasketItem && <span onClick={() => onRemoveWholeBasketItem({title, item_cost})}>&nbsp;&nbsp;&nbsp;del&nbsp;&nbsp;&nbsp;</span>}
    </div>
  );
}

export default BasketItem;