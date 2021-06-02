import styles from './backetitem.module.css';
import { ReactComponent as Minus } from '../../../icons/minus.svg';
import { ReactComponent as Plus } from '../../../icons/plus.svg';
import { connect } from 'react-redux';
import { decrement, increment } from '../../../redux/actions';
import { restaurants } from '../../../fixtures';

const BacketItem = ({ productId, productAmount, increment, decrement }) => {
  // TODO: useMemo(.., [productId])
  // TODO: pass via props to remove 'restaurants.findProductInfoById' from this function
  // HOC?
  const data = ((productInfo) => ({
    productName: productInfo.name,
    restaurantName: productInfo.restaurantName,
    productPrice: productInfo.price,
    itemCost: productInfo.price * productAmount,
    productAmount,
  }))(restaurants.findProductInfoById(productId));

  return (
    <span>
      <div>
        <span className={styles.productName}>{data.productName || 'Incorrect product info'}</span>
        {' from ' + (data.restaurantName || 'Incorrect restaurant info')} - {data.productAmount || 0}шт,$
        {data.itemCost || 0}
      </div>
      <span className={styles.buttons}>
        <button className={styles.button} onClick={decrement} data-id="product-decrement">
          <Minus />
        </button>
        <button className={styles.button} onClick={increment} data-id="product-increment">
          <Plus />
        </button>
      </span>
    </span>
  );
};

// TODO: BacketItem.propTypes = {};

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.productId)),
  decrement: () => dispatch(decrement(props.productId)),
});

const mapStateToProps = (state, props) => ({
  productAmount: state.order[props.productId] || 0,
});

export default connect(mapStateToProps, mapDispatchToProps)(BacketItem);
