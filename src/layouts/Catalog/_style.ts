import styled from 'styled-components'

export const Container = styled.div`
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background: silver;
  padding-bottom: 25px;
  @media screen and (min-width: 320px) {
    height: 200px;
    overflow: hidden;
  }
`

export const Media = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`
export const Content = styled.div`
  position: relative;
  background: #fff;
  top: -25px;
  padding: 25px 15px 15px 15px;
  border-radius: 25px 25px 0 0;
`
export const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
`
