import {type ReactNode} from "react";
import ServicesList from "../../UI/ServicesList/ServicesList.tsx";
import {useServices} from "../../ Contexts/Services/useServices.tsx";
import styles from "./RenderServices.module.scss";

const RenderServices = (): ReactNode => {
    const {addServiceToCart, services} = useServices();

    return (
        <div className={styles.block}>
            <h2 className={styles.header}>{services?.length ? "Список возможных услуг и сервисов" : "Жесть мажор..."}</h2>
            {services && services.length > 0 && <ServicesList addServiceToCart={addServiceToCart} services={services}/>}
        </div>
    );
};

export default RenderServices;