import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  border: none;
  outline: none;
  color: white;
  background-color: ${({ theme }) => theme.primary1};
  width: 100%;

  :hover,
  :focus {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)}
  }

  :active {
    background-color: ${({ theme }) => darken(0.1, theme.primary1)}
  }
`;
