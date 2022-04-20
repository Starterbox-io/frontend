import { FC } from 'react'
import * as S from './_style'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg'

const Navbar: FC = () => {
  return <S.Container>
        <Logo/>
        <InfoIcon/>
    </S.Container>
}
export default Navbar
