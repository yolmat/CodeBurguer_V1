import React from 'react'

import LogoOrder from '../../assets/order/BurgerOrder.svg'

import TrashImg from '../../assets/order/Trash.svg'

import { Container, Header, Image, H1, Main, H3, Button, Contents, P, Article, Trash, Span } from "./styles";

const Order = () => {

    return (
        <Container>
            <Contents>
                <Header>
                    <Image alt="Logo" src={LogoOrder}></Image>
                    <H1>Pedido</H1>
                </Header>
                <Main>

                    <Article>
                        <Span>
                            <P>1 Coca-Cola, 1 X-Salada</P>
                            <H3>Steve Jobs</H3>
                        </Span>
                        <Trash alt="Trash" src={TrashImg}></Trash>
                    </Article>

                    <Article>
                        <Span>
                            <P>1 Batata Grande, 1, X-Bacon, 2 Coca-colas Ligth macc 10000a asd adsd asdsak</P>
                            <H3>Steve Jobs</H3>
                        </Span>
                        <Trash alt="Trash" src={TrashImg}></Trash>
                    </Article>

                    <Button>Voltar</Button>
                </Main>
            </Contents>
        </Container>
    )

}

export default Order