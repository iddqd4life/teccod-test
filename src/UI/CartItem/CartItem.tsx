import type {ServicesType} from "../../Utils/MockData/services.ts";
import styles from "./CartItem.module.scss";
import Button from "../Button/Button.tsx";

interface CartItemProps {
    service: ServicesType;
    removeServiceFromCart: (service: ServicesType) => void;
}

const CartItem = ({service, removeServiceFromCart}: CartItemProps) => {
    return (
        <li className={styles.item}>
            <h2 className={styles.title}>{service.title}</h2>
            <Button text={"Убрать"} onClick={() => removeServiceFromCart(service)} />
        </li>
    );
};

export default CartItem;