import {useServices} from "../../ Contexts/Services/useServices.tsx";
import CartList from "../../UI/CartList/CartList.tsx";
import {useMemo} from "react";
import styles from "./RenderCart.module.scss";
import type {ServicesType} from "../../Utils/MockData/services.ts";

const RenderCart = () => {
    const {removeServiceFromCart, cart} = useServices();

    const totalSum = useMemo<number>((): number => {
        return cart.reduce((sum: number, item: ServicesType): number => sum + item.price, 0);
    }, [cart]);

    return (
        <div className={styles.block}>
            <h2 className={styles.header}>{cart.length > 0 ? "Корзинка сервисов" : "Пока что в корзинке пусто..."}</h2>
            {cart.length > 0 && <CartList removeServiceFromCart={removeServiceFromCart} cart={cart}/>}
            {totalSum > 0 && (
                <div className={styles.totalWrapper}>
                    <span className={styles.totalValue}>Итого: $ {totalSum}</span>
                    <Button text={"Оформить заказ"} onClick={(): void => alert("┐(￣ヘ￣;)┌ ")}/>
                </div>
            )}
        </div>
    );
};

import Button from "../../UI/Button/Button.tsx";

export default RenderCart;