import Modal from 'components/molecules/Modal/Modal'
import useModal from 'hooks/useModal'
import PropTypes from 'prop-types'
import React from 'react'

let ModalContext
const { Provider } = (ModalContext = React.createContext(null))

const ModalProvider = ({ children }) => {
  const { isModalOpen, handleModal, modalContent } = useModal()
  return (
    <Provider value={{ isModalOpen, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.any
}

export { ModalContext, ModalProvider }
