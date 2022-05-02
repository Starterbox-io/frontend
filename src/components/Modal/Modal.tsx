import {FC} from 'react'
import {MODEL_TYPE_INFO} from '../../context/Modal/ModalContext'
import * as S from './_style'
import cn from 'classnames'

const Modal: FC<any> = ({state, type = MODEL_TYPE_INFO}) => {
  if (type === MODEL_TYPE_INFO) {
    return <S.Container className={cn({
      '--active': state
    })}>model type info</S.Container>
  } else {
    return <>NO MODULE</>
  }
}

export default Modal
