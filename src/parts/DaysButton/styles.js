import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 30px;
  margin-top: -20px;
`;

export const ButtonWrapper = styled.View`
  border-radius: 25px;
  background-color: ${(props) =>
    props.isActive ? 'rgba(93, 80, 254, 0.1)' : 'transparent'};
  padding: 10px 15px;
`;
