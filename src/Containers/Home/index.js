import React, { useState, useRef } from "react"; // Import React

import axios from 'axios'; // Consumir APIs

import Logo from '../../assets/home/BurgerHome.svg' // Import img used on the site

import { Container, Viewer, Header, Image, H1, Main, H3, InputOrder, Button, Contents, Form } from "./styles"; // Import styles used on the site

//JSX = misturar HTML com CSS
const Home = () => {

    const [orderClient, setOrder] = useState([])

    const inputOrder = useRef()
    const inputClientName = useRef()
    const inputPrice = useRef()

    async function addnewOrder() {

        const { data: newOrder } = await axios.post('http://localhost:3002/orders', { clientName: inputClientName.current.value, order: inputOrder.current.value, price: inputPrice.current.value })

        console.log(newOrder)

        setOrder([...orderClient, newOrder]);
    }

    return (
        <Container>
            <Viewer to="/orders">Orders</Viewer>
            <Contents>
                <Header>
                    <Image alt="Logo" src={Logo}></Image>
                    <H1>Faça seu Pedido!</H1>
                </Header>
                <Main>
                    <Form autocomplete="off">
                        <H3>Cadastre o Pedido do Cliente</H3>
                        <InputOrder ref={inputOrder} type="text" placeholder="Pedido"></InputOrder>

                        <H3>Nome do cliente</H3>
                        <InputOrder ref={inputClientName} type="text" placeholder="Nome"></InputOrder>

                        <H3>Preço</H3>
                        <InputOrder ref={inputPrice} type="text" placeholder="Preço"></InputOrder>

                        <Button type="submit" onClick={addnewOrder}>Novo Pedido</Button>
                    </Form>
                </Main>
            </Contents>
        </Container>
    )

}

export default Home