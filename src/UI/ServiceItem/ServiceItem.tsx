import {type ReactNode} from 'react';
import type {ServicesType} from "../../Utils/MockData/services.ts";
import Button from "../Button/Button.tsx";
import styles from "./ServiceItem.module.scss";

interface ServiceItemProps {
    service: ServicesType;
    addServiceToCart: (service: ServicesType) => void;
}

const ServiceItem = ({service, addServiceToCart}: ServiceItemProps): ReactNode => {
    return (
        <li className={styles.item}>
            <h2 className={styles.title}>{service.title}</h2>
            <p className={styles.description}>{service.description}</p>
            <span className={styles.price}>$ {service.price}</span>
            <Button text={"Добавить"} onClick={() => addServiceToCart(service)}/>
        </li>
    );
};

export default ServiceItem;