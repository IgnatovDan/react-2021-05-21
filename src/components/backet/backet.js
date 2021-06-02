import { Fragment } from 'react';
import { connect } from 'react-redux';
import styles from './backet.module.css';
import BacketItem from './backetitem';
import { restaurants } from '../../fixtures';

function getBacketItems(order) {
  return !order
    ? []
    : Object.keys(order)
        .filter((key) => order[key] > 0)
        .map((key) => {
          const product = restaurants.findProductInfoById(key);

          return {
            productId: key,
            productPrice: product.price,
            productAmount: order[key],
          };
        });
}

const Backet = ({ order }) => {
  // TODO: useMemo(.., [order])
  // TODO: pass via props
  // HOC?
  const backetItems = getBacketItems(order);

  // TODO: useMemo(.., [order])
  // TODO: pass via props
  // HOC?
  const backetTotal = backetItems.reduce((acc, item) => acc + item.productAmount * item.productPrice, 0);

  return (
    <div className={styles.backet}>
      <div>
        Ваша корзина:
        <span>
          {!backetItems || backetItems.length === 0 ? (
            <span key="empty">нет товаров</span>
          ) : (
            <Fragment>
              {backetItems.map(
                (item) =>
                  item && (
                    <span key={item.productId}>
                      <BacketItem productId={item.productId}></BacketItem>
                    </span>
                  )
              )}
              <span className={styles.total}>Общая стоимость: ${backetTotal}</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  );
};

//TODO: Backet.propTypes = {};

const mapStateToProps = (state) => ({
  order: state.order, // TODO
});

export default connect(mapStateToProps)(Backet);
