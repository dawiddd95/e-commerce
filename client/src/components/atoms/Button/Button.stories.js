import React from 'react';
// storiesOf do tworzenia story
import { storiesOf } from '@storybook/react';
// importujemy theme by móc nim tutaj operować
import { theme } from 'theme/mainTheme';
// Importujemy nasz Button
import { Button } from './Button';

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
        <Button 
            background={theme.background.secondary}
        > 
            Sign In
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