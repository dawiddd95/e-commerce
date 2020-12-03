import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { StyledLink } from 'components/atoms/Link/Link';
import { Dropdown } from './Dropdown';

const Background = styled.div`
    margin: 80px;
`

const DropdownStyledLink = styled(StyledLink)`
    padding: 12px;
`

storiesOf('Molecules/Dropdown', module)
    .add('Normal', () => 
        <Background>
            <Dropdown width='150px'>
                <DropdownStyledLink textHover>
                    My Account
                </DropdownStyledLink>
                <DropdownStyledLink textHover>
                    My Wish List
                </DropdownStyledLink>
                <DropdownStyledLink textHover>
                    Create an Account
                </DropdownStyledLink>
                <DropdownStyledLink textHover>
                    Sign In
                </DropdownStyledLink>
            </Dropdown>
        </Background>
    )