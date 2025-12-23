import {type ReactNode} from 'react';
import Container from "../UI/Container/Container";
import RenderServices from "../Modules/RenderServices/RenderServices.tsx";
import ServiceProvider from "../ Contexts/Services/ServicesProvider.tsx";
import RenderCart from "../Modules/RenderCart/RenderCart.tsx";

const ServicesPage = (): ReactNode => {
    return (
        <ServiceProvider>
            <Container>
                <RenderServices/>
                <RenderCart/>
            </Container>
        </ServiceProvider>
    );
};

export default ServicesPage;