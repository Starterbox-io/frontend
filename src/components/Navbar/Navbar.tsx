import { FC } from 'react'
import * as S from './_style'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg'
import { Link } from 'react-router-dom'
import { ROUTER_PATH } from '../../router/Router'

const Navbar: FC = () => {
  return <S.Container>
        <Logo/>
      <Link to={ROUTER_PATH.catalog_info.path}>
        <InfoIcon/>
      </Link>
    </S.Container>
}
export default Navbar
