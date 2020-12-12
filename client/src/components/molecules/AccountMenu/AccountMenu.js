import React, { useState } from 'react';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';
import userIcon from 'assets/icons/user.svg';
import * as S from './StyledAccountMenu';

const AccountMenu = () => {
    const [isVisible, setVisibility] = useState(false);

    const onMouseOver = () => {
        setVisibility(true);
    }

    const onMouseLeave = () => {
        setVisibility(false);
    }

    return (
        <>
            <S.Wrapper onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                <ButtonIcon icon={userIcon} />
                <Paragraph>
                    My Account
                </Paragraph>
                {
                    isVisible && (
                        <S.DropdownWrapper width='200px' onMouseOver={onMouseOver}>
                            <S.DropdownStyledLink textHover>
                                My Account
                            </S.DropdownStyledLink>
                            <S.DropdownStyledLink textHover>
                                My Wish List
                            </S.DropdownStyledLink>
                            <S.DropdownStyledLink to='/register' textHover>
                                Create an Account
                            </S.DropdownStyledLink>
                            <S.DropdownStyledLink to='/login' textHover>
                                Log In
                            </S.DropdownStyledLink>
                        </S.DropdownWrapper>
                    )
                }
            </S.Wrapper>
        </>
    );
}
 
export default AccountMenu;