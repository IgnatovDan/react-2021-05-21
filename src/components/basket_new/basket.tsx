import { BasketProps } from "./basket.props";
import BasketItem from "./basket_item/basket_item";

const Basket = (basket: BasketProps): JSX.Element => {
  return (
    <>
      { basket.items.length
        ? basket.items.map(item => <BasketItem
            title={item.title}
            item_cost={item.item_cost}
            quantity={item.quantity}
            onAddItem={basket.onAddItem}
            onRemoveItem={basket.onRemoveItem}
            onRemoveWholeBasketItem={basket.onRemoveWholeBasketItem}
          />)
        : <div>No items to display</div> }
        <div>Summary price = {basket.items.reduce((acc, item) => acc + item.item_cost * item.quantity, 0)}$ </div>
    </>
  );
}

export default Basket;