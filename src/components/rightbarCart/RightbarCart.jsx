import classes from './RightbarCart.module.css';

const RightbarCart = (props) => {
  return (
    <div className={classes.cart}>
      <span className={classes.cartTitle}>{props.title}</span>
      { props.children }
    </div>
  );
}

export default RightbarCart;
