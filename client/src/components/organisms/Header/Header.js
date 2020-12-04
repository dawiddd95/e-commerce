import AccountMenu from 'components/molecules/AccountMenu/AccountMenu';
import MyCart from 'components/molecules/MyCart/MyCart';
import React from 'react';
import * as S from './StyledHeader';

const Header = () => {
    return (  
        <S.Wrapper>
            <AccountMenu />
            <MyCart />
        </S.Wrapper>
    );
}
 
export default Header;