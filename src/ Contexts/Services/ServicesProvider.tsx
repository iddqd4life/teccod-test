import {type ReactNode, useEffect, useState} from "react";
import servicesData, {type ServicesType} from "../../Utils/MockData/services.ts";
import type ServicesContextType from "./types.tsx";
import {ServiceContext} from "./useServices.tsx";

const ServiceProvider = ({children}: {children: ReactNode}) => {
    const [services, setServices] = useState<ServicesType[] | null>(null);

    // типа профетчили данные, туда сюда, антипаттерн конеш тут, но лучше написать свой хук, а еще лучше React Query заюзать
    useEffect(() => {
        setServices(servicesData);
    }, []);

    const [cart, setCart] = useState<ServicesType[]>([]);

    const addServiceToCart = (service: ServicesType): void => {
        setCart((prev: ServicesType[]): ServicesType[] => [...prev, service]);
        setServices((prev: ServicesType[] | null): ServicesType[] | null => prev ? prev.filter((item: ServicesType) => item.id !== service.id) : null);
    }

    const removeServiceFromCart = (service: ServicesType): void => {
        setCart((prev: ServicesType[]) => prev.filter((item: ServicesType) => item.id !== service.id))
        setServices((prev: ServicesType[] | null): ServicesType[] | null => prev ? [...prev, service] : null);
    }

    const values: ServicesContextType = {
        services,
        cart,
        addServiceToCart,
        removeServiceFromCart
    }

    return (
        <ServiceContext.Provider value={values}>
            {services ? children : "Сервисы подгружаются..."}
        </ServiceContext.Provider>
    )
}

export default ServiceProvider;