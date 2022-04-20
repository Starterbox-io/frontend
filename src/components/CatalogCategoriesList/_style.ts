import styled from 'styled-components'

export const Container = styled.div`
  overflow: auto;
  display: flex;
  width: 100%;
  padding: 15px;
`

export const Item = styled.div`
  font-family: 'SF Pro';
  border-radius: 100px;
  color: #B0B0B0;
  margin-right: 30px;
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;

  &.--active {
    color: #000000;
    font-weight: 700;
  }
`
