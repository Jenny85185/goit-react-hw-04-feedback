import styled from '@emotion/styled';

export const CounterList = styled.ul`
  background-color: #fff;
  border: 1px solid #557b83;
  padding: 20px;
  border-radius: 10px;
  width:500px;
  margin-left:20px;
   box-shadow: 0px 5px 14px 4px rgba(94, 57, 18, 0.82);
`;

export const CounterItem = styled.li`
  display: flex;
  align-items: center;
  font-weight:bold;

  &:nth-of-type(1){
    color:#66df4edc;
  }
  &:nth-of-type(2){
    color:#93a790dc;
  }
  &:nth-of-type(3){
    color:#f10b0bdf;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
   &:nth-of-type(5){
    color:#66df4edc;
  }
`;
