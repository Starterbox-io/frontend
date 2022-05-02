import {
    createContext,
    FC,
    PropsWithChildren,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react'
import {Modal} from '../../components'
import _ from 'lodash'

export const MODEL_TYPE_INFO = 'MODEL_TYPE_INFO'

export type TModelType = typeof MODEL_TYPE_INFO

export type TModal = {
    name: any,
    state: boolean,
    content: ReactNode
    type?: TModelType,
    index?: number
}

type TModalContext = {
    modals: TModal[]
    setModals: any,
}

export const ModalContext = createContext<TModalContext>({
    modals: [],
    setModals: {}
})

export const ModalProvider: FC<PropsWithChildren<any>> = ({children}) => {
    const [modals, setModals] = useState<TModal[]>([])
    return <ModalContext.Provider value={{
        modals,
        setModals
    }}>
        <ModalContext.Consumer>
            {({modals}: any) => {
                return <>
                    {children}
                    {modals?.map((modal: TModal, k: number) => {
                        return modal && <Modal key={`modal-item-${k}`}{...modal}/>
                    })}
                </>
            }}
        </ModalContext.Consumer>
    </ModalContext.Provider>
}

export const useModal = (modal: TModal) => {
    const {modals, setModals} = useContext(ModalContext)

    useEffect(() => {
        const index = _.findIndex(modals, (m) => m?.name === modal?.name)
        if (index === -1) {
            setModals([...modals, modal])
        }
    }, [modals])

    const state = useMemo(() => modals.filter((m: any) => m.name === modal?.name)[0]?.state, [modals])
    const toggle = useCallback((state: boolean) => {
        const copyArr = [...modals]
        copyArr.map((m: any) => {
            if (m.name === modal?.name) {
                m.state = state
            }
        })
        setModals(copyArr)
    }, [modals])

    return {
        state,
        toggle
    }
}
