import styles from "./CartList.module.scss";
import type {ServicesType} from "../../Utils/MockData/services.ts";
import type {ReactNode} from "react";
import CartItem from "../CartItem/CartItem.tsx";

interface CartListProps {
    cart: ServicesType[];
    removeServiceFromCart: (service: ServicesType) => void;
}

const CartList = ({cart, removeServiceFromCart}: CartListProps): ReactNode => {
    return (
        <ul className={styles.list}>
            {cart.map((item: ServicesType): ReactNode => <CartItem removeServiceFromCart={removeServiceFromCart} service={item} key={item.id} />)}
        </ul>
    );
};

export default CartList;