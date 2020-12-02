import React from 'react';
import { storiesOf } from '@storybook/react';
import cartIcon from 'assets/icons/cart.svg';
import compareIcon from 'assets/icons/compare.svg';
import loveIcon from 'assets/icons/love.svg';
import searchIcon from 'assets/icons/search.svg';
import viewIcon from 'assets/icons/view.svg';

import { ButtonIcon } from './ButtonIcon';

// Jak wyglądają nasze ikonki
// Atoms/ButtonIcon oznacza, że wydzielimy sobie sekcję Atoms i tam będzie zakładka ButtonIcon
storiesOf('Atoms/ButtonIcon', module)
  .add('Cart', () => <ButtonIcon icon={cartIcon} />)
   // Przykład aktywnej ikonki z propsem active   
  .add('Active', () => <ButtonIcon active icon={compareIcon} />)
  .add('Compare', () => <ButtonIcon icon={compareIcon} />)
  .add('Love', () => <ButtonIcon icon={loveIcon} />)
  .add('Search', () => <ButtonIcon icon={searchIcon} />)
  .add('View', () => <ButtonIcon icon={viewIcon} />)
