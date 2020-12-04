import React from 'react';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import Subscribe from 'components/molecules/Subscribe/Subscribe';
import { theme } from 'theme/mainTheme';
import * as S from './StyledFooter';

const Footer = () => {
    return (
        <S.Wrapper>
            <S.ConstactWrapper>
                <S.StyledStrong color={theme.color.primary} footer>
                    CONTACT US
                </S.StyledStrong>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetu adipiscing elite sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse.
                </Paragraph>
                <Paragraph>
                    4331 Dominion St, Burnaby, BC V5G 1C7, Canada 7X4V+M2 Burnaby, British Columbia, Canada
                </Paragraph>
                <Paragraph>
                    (+80)123 456 789 - (+80)123 456 789
                </Paragraph>
                <Paragraph>
                    info@example.com - info1@example.com
                </Paragraph>
            </S.ConstactWrapper>
            <S.InnerWrapper>
                {/* Te kolumny powinniśmy wydzielić do osobnej molekuły */}
                <S.ColumnWrapper>
                    <S.StyledStrong color={theme.color.primary} footer>
                        STORE LOCATION
                    </S.StyledStrong>
                    <S.FooterStyledLink footer>
                        Los Angeles - USA
                    </S.FooterStyledLink>
                    <S.FooterStyledLink footer>
                        New York - USA
                    </S.FooterStyledLink>
                    <S.FooterStyledLink footer>
                        California - USA
                    </S.FooterStyledLink>
                    <S.FooterStyledLink footer>
                        Bangkok - Thailand
                    </S.FooterStyledLink>
                    <S.FooterStyledLink footer>
                        Paris - France
                    </S.FooterStyledLink>
                    <S.FooterStyledLink footer>
                        London - England
                    </S.FooterStyledLink>
                </S.ColumnWrapper>
                <S.ColumnWrapper>
                    <S.StyledStrong color={theme.color.primary} footer>
                        CUSTOMER SERVICE
                    </S.StyledStrong>
                    <S.FooterStyledLink footer>
                        Customer Service
                    </S.FooterStyledLink>
                    <S.FooterStyledLink footer>
                        Shipping & Returns
                    </S.FooterStyledLink>
                    <S.FooterStyledLink footer>
                        Track Your Order
                    </S.FooterStyledLink>
                    <S.FooterStyledLink footer>
                        Help Center
                    </S.FooterStyledLink>
                    <S.FooterStyledLink footer>
                        Store Location
                    </S.FooterStyledLink>
                    <S.FooterStyledLink footer>
                        Customer Feedback
                    </S.FooterStyledLink>
                </S.ColumnWrapper>
                <S.SubscribeWrapper>
                    <Subscribe />
                </S.SubscribeWrapper>
            </S.InnerWrapper>
        </S.Wrapper>
    );
}
 
export default Footer;