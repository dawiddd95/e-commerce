import React from 'react';
// storiesOf do tworzenia story
import { storiesOf } from '@storybook/react';
// importujemy theme by móc nim tutaj operować
import styled from 'styled-components';
import { theme } from 'theme/mainTheme';
import cartWhiteIcon from 'assets/icons/cartWhite.svg';
import viewIcon from 'assets/icons/view.svg';
// Importujemy nasz Button
import { Button } from './Button';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

// Jeśli chcemy by sama ikonka nie miała tego marginu na lewo to musimy nadać ten styl w dziedziczeniu
const StyledButtonIcon = styled(ButtonIcon)`
    margin: 0;
`

// Podajemy jaki komponent w stringu oraz module
storiesOf('Atoms/Button', module)
    // Definiujemy wygląd dla Buttona primary (niebieski bez ikonki, biały color)
    .add('Primary', () => 
        // W SC mamy, że domyślnie tekst jest biały, border 0 i tło niebieskie, więc nic nie musimy tutaj wpisywać
        <Button uppercase>
            smartphones
        </Button>
    )   
    .add('Secondary', () => 
        <Button background={theme.background.secondary} > 
            Sign In
        </Button>
    )
    .add('Button Text With Icon', () =>
        <Button> 
            <ButtonIcon src={cartWhiteIcon} />
            Add to Cart
        </Button>
    )
    .add('Button Only Icon', () =>
        <Button 
            background={theme.background.transparent}
            border
            hover
        > 
            <StyledButtonIcon src={viewIcon} />
        </Button>
    )
    .add('Transparent', () =>
        <Button 
            background={theme.background.transparent}
            color={theme.color.secondary}
            uppercase
        > 
            computers & laptops
        </Button>
    )