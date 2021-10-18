import { BasketItemProps } from "./basket_item.props";

const BasketItem = ({ title, quantity, item_cost, onAddItem, onRemoveItem, onRemoveWholeBasketItem }: BasketItemProps): JSX.Element => {
  return (
    <div>
      <span>Айтем: {title}</span>
      <span>Количество {quantity}</span>
      <span>Суммарная цена {item_cost * quantity}</span>
      {onAddItem && <span onClick={() => onAddItem({title, quantity, item_cost})}>+</span> }
      {onRemoveItem && <span onClick={() => onRemoveItem({title, quantity, item_cost})}>-</span> }
      {onRemoveWholeBasketItem && <span onClick={() => onRemoveWholeBasketItem({title, quantity, item_cost})}>X</span>}
    </div>
  );
}

export default BasketItem;