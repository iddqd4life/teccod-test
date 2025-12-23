import type {ServicesType} from "../../Utils/MockData/services.ts";

export default interface ServicesContextType {
    services: ServicesType[] | null;
    cart: ServicesType[];
    addServiceToCart: (service: ServicesType) => void;
    removeServiceFromCart: (service: ServicesType) => void;
}