import styled from 'styled-components'

export const Section = styled.div``
export const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #000000;
  padding-bottom: 20px;
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
`
export const ItemTitle = styled.div``
export const ItemPrice = styled.div``
export const Close = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 2;
`
export const Info = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #000000;
  padding: 0 0 10px 0;

  & span {
    font-size: 12px;
    margin-left: 3px;
    font-weight: 500;
  }
`
export const Desc = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #B0B0B0;
  padding-bottom: 40px;
`
