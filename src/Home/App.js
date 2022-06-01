import React from "react";

import Logo from '../assets/home/BurgerHome.svg'

import { Container, Header, Image, H1, Main, H3, InputOrder, Button, Contents, Form } from "./styles";


//JSX = misturar HTML com CSS
const App = () => {

    return (
        <Container>
            <Contents>
                <Header>
                    <Image alt="Logo" src={Logo}></Image>
                    <H1>Faça seu Pedido!</H1>
                </Header>
                <Main>
                    <Form method="post" autocomplete="off">
                        <H3>Pedido</H3>
                        <InputOrder type="text" placeholder="Pedido"></InputOrder>

                        <H3>Nome do cliente</H3>
                        <InputOrder type="text" placeholder="Nome"></InputOrder>

                        <Button>Novo Pedido</Button>
                    </Form>
                </Main>
            </Contents>
        </Container>
    )

}

export default App