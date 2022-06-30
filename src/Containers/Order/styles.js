import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    width: 60%;
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

export const Article = styled.article `
    padding: 1rem;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-bottom: 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    max-width: 27rem;
    min-width: 27rem;
`

export const Span = styled.span `
    display: flex;
    flex-flow: column wrap;
`

export const P = styled.p `
    color: #ffffff;
`

export const H3 = styled.h3 `
    font-size: 1rem;
    color: #eeeeee;
    margin-top: 1rem;
`

export const Btn = styled.button `
    border: none;
    width: 5%;
    background-color: rgba(255,255,255,0);
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }
`

export const Trash = styled.img `
    width: 100%;
`

export const Button = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 900;
    color: #ffffff;

    background: rgba(255, 255, 255, 0.14);
    border: none;
    
    width: 100%;
    height: 5rem;
    margin-top: 1em;

    cursor: pointer;

    &:active {
        opacity: 0.5;
    }
`
