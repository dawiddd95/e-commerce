import styled from 'styled-components';

export const ButtonIcon = styled.img`
   width: 22px;
   height: 22px;
   margin: 0 10px 0 0;
   /* Komponent może przyjmować wiele ikonek, rodzaj ikonki jest przekazywany jako icon */
   background-image: url(${({ icon }) => icon});
   background-repeat: no-repeat;
   background-position: 50% 50%;
   background-size: 50%;
   border: none;
   outline: 0;
   cursor: pointer;
`;