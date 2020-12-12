import React from 'react';
import { theme } from 'theme/mainTheme';
import * as S from './StyledNavbar';

const Navbar = () => {
    return (  
        <S.Wrapper>
            <S.LinksWrapper>
                <S.NavbarStyledLink 
                    to='/'
                    fontWeight={theme.fontWeight.weight600}
                    navbar
                >
                    HOME
                </S.NavbarStyledLink>
                <S.NavbarStyledLink 
                    fontWeight={theme.fontWeight.weight600}
                    navbar
                >
                    PRODUCTS
                </S.NavbarStyledLink>
                <S.NavbarStyledLink
                    to='/contact-us' 
                    fontWeight={theme.fontWeight.weight600}
                    navbar
                >
                    CONTACT US
                </S.NavbarStyledLink>
            </S.LinksWrapper>
            <S.SpecialOfferWrapper>
                {/* Dajemy mu props textHover dzięki temu jest czerwony ten link z dziedziczenia, ale na hover dostaje style linku text, czyli niebieski */}
                {/* Jako, że SpecialOffer to rozszerzony Link to musimy mu podać children jak do normalnego linku */}
                <S.SpecialOffer textHover>
                    SPECIAL SALE <strong>30% OFF</strong> ON ALL ITEM
                </S.SpecialOffer>
            </S.SpecialOfferWrapper>
        </S.Wrapper>
    );
}
 
export default Navbar;