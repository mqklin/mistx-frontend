import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from 'rebass'
import { CloseIcon } from '../../theme/components'
import { RowBetween } from '../Row'
import { AutoColumn } from '../Column'
import { ButtonYellow } from '../Button'
import Modal from '../Modal'

const Wrapper = styled.div`
  width: 100%;
`
const Section = styled(AutoColumn)`
  padding: 24px;
`

const BottomSection = styled(Section)`
  background-color: ${({ theme }) => theme.bg1};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const Button = styled(ButtonYellow)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text4};
  font-weight: 700;
`

interface HardwareWalletModalProps {
  metaMaskConnected: boolean
}

export default function HardwareWalletModal({ metaMaskConnected }: HardwareWalletModalProps) {
  const hideWHardwareWalletWarningModalPerference = localStorage.getItem('hideHardwareWarningModal') === 'true'
  const [localModalOpen, setModalOpen] = useState<boolean>(false)
  const [dirtyModal, setDirtyModal] = useState<boolean>(false)

  if (metaMaskConnected && !hideWHardwareWalletWarningModalPerference && !dirtyModal) {
    setModalOpen(true)
    setDirtyModal(true)
  }

  const hideModal = () => {
    setModalOpen(false)
    setDirtyModal(true)
  }

  const cta = () => {
    localStorage.setItem('hideHardwareWarningModal', 'true')
    setModalOpen(false)
    setDirtyModal(true)
  }

  return (
    <Modal isOpen={localModalOpen} onDismiss={hideModal}>
      <Wrapper>
        <Section>
          <RowBetween>
            <Text fontWeight={500} fontSize={20}>
              MetaMask Hardware Support
            </Text>
            <CloseIcon onClick={hideModal} />
          </RowBetween>
          <RowBetween margin="0.5rem 0 0" flexDirection="column">
            <Text fontWeight={300} fontSize={16}>
              mistX will not work with hardware wallets connected with MetaMask due to their lack of support for
              eth_signTransaction. Use a standard MetaMask wallet instead. We are pushing MetaMask to fix the issue{' '}
              <a
                href="https://github.com/MetaMask/metamask-extension/issues/10914"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{' '}
              ( Show your support and leave a comment! )
            </Text>
          </RowBetween>
        </Section>
        <BottomSection gap="12px">
          <Button onClick={cta}>I understand</Button>
        </BottomSection>
      </Wrapper>
    </Modal>
  )
}
