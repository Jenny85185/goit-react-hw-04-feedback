import styled from '@emotion/styled';

export const FeedbackMain = styled.div`
  display: flex;
`;

export const FeedbackButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 20px 20px 40px;
  background-color: #fff;
  color: brown;
  font-weight: bold;
  border: 1px solid #030e1845;
  border-radius: 10px;

  &:nth-of-type(1):hover,
  &:nth-of-type(1):focus {
    background-color: #66df4edc;
    color: #fff;
  }
  &:nth-of-type(2):hover,
  &:nth-of-type(2):focus {
    background-color: #93a790dc;
    color: #fff;
  }
  &:nth-of-type(3):hover,
  &:nth-of-type(3):focus {
    background-color: #f10b0bdf;
    color: #fff;
  }
`;
