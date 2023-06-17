import styled from '@emotion/styled';

export const ButtonLoadMore = styled.button`
  width: 170px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  background-color: #28d03e;
  &:hover,
  &:focus {
   
    background-color: #2fe247;
     box-shadow: 0 0 0 1px #76f752, 0 0 10px #333;
  }
`;