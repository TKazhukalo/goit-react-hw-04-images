import styled from '@emotion/styled';


export const ListImages = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(330px, max-content));
  grid-gap: 20px;
  margin: 0 auto;
  padding: 84px 0 0 0;
  list-style: none;
`;