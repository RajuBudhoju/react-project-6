import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>{[
        {id: 'c1', name: "Biryani", amount: 2, price: 180.00},
    ].map((item) => <li>{item.name}</li>)}</ul>;

    return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>345.87</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
)};

export default Cart;