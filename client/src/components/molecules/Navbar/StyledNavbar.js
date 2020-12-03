import styled from 'styled-components';
import { StyledLink } from 'components/atoms/Link/Link';

export const Wrapper = styled.nav`
    width: 100%;
    height: 50px;
    background-color: ${ ({theme}) => theme.background.transparent};
    border-top: 1px solid #E6E6E6;
    border-bottom: 1px solid #E6E6E6;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LinksWrapper = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 0 0 40px;
    display: flex;
    justify-content: flex-start;
` 

export const SpecialOfferWrapper = styled.div`
    width: 50%;
    height: 100%;
    line-height: 49px;
    display: flex;
    justify-content: center;
` 

// Rozszerzamy linki by móc dać line-height w przypadku Navbara, oraz jakieś marginesy czy paddingi
export const NavbarStyledLink = styled(StyledLink)`
    padding: 0 15px;
    line-height: 49px;
`

// Rozszerzamy StyledLink by nadać mu niestandardowy kolor, który być może powtórzy się tylko raz
export const SpecialOffer = styled(StyledLink)`
    color: #f3283c;
`