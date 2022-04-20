import styled from 'styled-components'

export const Container = styled.div``
export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: #000000;
  padding: 0 0 20px 0;
  text-transform: capitalize;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  overflow: hidden;
  @media screen and (min-width: 320px) {
    height: 375px;
  }
`

export const Media = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  //border-radius: 25px 25px 0 0;
  overflow: hidden;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
export const Content = styled.div`
  position: relative;
  background: #fff;
  padding: 20px 15px;

`
export const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
`
