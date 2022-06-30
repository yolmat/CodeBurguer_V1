import React, { useEffect, useState} from 'react'

import axios from 'axios'

import LogoOrder from '../../assets/order/BurgerOrder.svg'

import TrashImg from '../../assets/order/Trash.svg'

import { Container, Header, Image, H1, Main, H3, Button, Contents, P, Article, Trash, Span, Btn } from "./styles";

const Order = () => {

    const [orderClient, setOrder] = useState([])
    
    useEffect(() => {
        async function fetchOrders() {
            const { data: newOrder } = await axios.get("http://localhost:3002/orders")

            setOrder(newOrder);
        }

        fetchOrders()
    },[])

    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:3002/orders/${orderId}`)

        const newOrder = orderClient.filter((order) => order.id != orderId)

        setOrder(newOrder)
    }
    
    return (
        <Container>
            <Contents>
                <Header>
                    <Image alt="Logo" src={LogoOrder}></Image>
                    <H1>Pedido</H1>
                </Header>
                <Main>
                    <ul>
                        {orderClient.map((order) => (
                            <li key={order.id}>
                                <Article>
                                    <Span>
                                        <P>{order.order}</P>
                                        <H3>{order.clientName}</H3>
                                    </Span>
                                    <Btn onClick={() => deleteOrder(order.id)}>
                                        <Trash alt="Trash" src={TrashImg}></Trash>
                                    </Btn>
                                </Article>
                            </li>
                        ))}
                    </ul>

                    <Button to="/">Voltar</Button>
                </Main>
            </Contents>
        </Container>
    )

}

export default Order