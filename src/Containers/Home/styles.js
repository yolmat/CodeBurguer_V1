import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div `
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background: #0A0A10;
    height: 100vh;
`

export const Contents = styled.article `
    display: flex;
    flex-flow: column nowrap;
`
export const Viewer = styled(Link) `
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem 1rem 0 0;
    background: #D93856;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

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
    margin-bottom: 2rem;
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

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
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

    &:hover{ 
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`