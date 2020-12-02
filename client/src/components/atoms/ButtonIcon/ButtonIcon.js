import styled from 'styled-components';

export const ButtonIcon = styled.button`
   /* Jeśli chcemy używać tego komponentu jako Link, który zwraca tag 'a' to musimy dodać display: block */
   /* Ponieważ komponenty inline ('a' jest inline) nie rozumieją width i height */
   display: block;
   width: 20px;
   height: 20px;
   /* Komponent może przyjmować wiele ikonek, rodzaj ikonki jest przekazywany jako icon */
   background-image: url(${({ icon }) => icon});
   background-repeat: no-repeat;
   background-position: 50% 50%;
   background-size: 40%;
   border: none;
   /* Jeśli button jest aktywny to ma active na true */
   background-color: ${({ active }) => (active ? 'white' : 'transparent')};

   &.active {
    background-color: white;
   }
`;
