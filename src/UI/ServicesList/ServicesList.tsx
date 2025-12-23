import {type ReactNode} from 'react';
import type {ServicesType} from "../../Utils/MockData/services.ts";
import ServiceItem from "../ServiceItem/ServiceItem.tsx";
import styles from "./ServicesList.module.scss";

interface ServicesListProps {
    services: ServicesType[];
    addServiceToCart: (service: ServicesType) => void;
}

const ServicesList = ({services, addServiceToCart}: ServicesListProps): ReactNode => {
    return (
        <ul className={styles.list}>
            {services.map((service: ServicesType) => <ServiceItem addServiceToCart={addServiceToCart} key={service.id} service={service} />)}
        </ul>
    );
};

export default ServicesList;