import React from 'react';
import PropTypes from 'prop-types';
import { Strong } from 'components/atoms/Strong/Strong';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';
import { theme } from 'theme/mainTheme';
import * as S from './StyledPolicyShopItem';


const PolicyShopItem = ({icon, title, text, background}) => {
    return (
        <S.Wrapper>
            <S.IconWrapper background={background}>
                <ButtonIcon icon={icon} />
            </S.IconWrapper>
            <S.TextWrapper>
                <Strong>
                    {title}
                </Strong>
                <Paragraph>
                    {text}
                </Paragraph>
            </S.TextWrapper>
        </S.Wrapper>
    );
}

PolicyShopItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    background: PropTypes.string
}

PolicyShopItem.defaultProps = {
    background: theme.background.primary,
}
 
export default PolicyShopItem;