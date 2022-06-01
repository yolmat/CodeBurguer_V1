import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #0A0A10;
`

export const Contents = styled.article `
    display: flex;
    flex-flow: column nowrap;
`

export const Header = styled.header`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const Image = styled.img `
    width: 100%;
`

export const H1 = styled.h1 `
    font-weight: 700;
    font-size: 2.3rem;
    color: #ffffff;
    margin: 2.5rem 0;
`

export const Main = styled.main `
    display: flex;
    flex-flow: column nowrap;
`

export const Form = styled.form `
    display: flex;
    flex-flow: column nowrap;
`

export const H3 = styled.h3 `
    font-size: 1rem;
    color: #eeeeee;
    margin-bottom: 0.4rem;
`

export const InputOrder = styled.input `
    width: 100%;
    border: none;
    margin-bottom: 3rem;
    background: rgba(255, 255, 255, 0.25);    border-radius: 14px;
    padding: 1rem;
    font-weight: 300;
    font-size: 1rem;
    color: aqua;
    color: #FFFFFF;

    &::placeholder {
        color: white;
    }

    &:focus {
        box-shadow: 0;
        border: none;
        outline: 0;
    }
`

export const Button = styled.button `
    font-size: 1.5rem;
    font-weight: 900;
    color: #ffffff;

    background: #D93856;
    border: none;
    
    width: 100%;
    height: 5rem;

    cursor: pointer;

    &:active {
        opacity: 0.5;
    }
`