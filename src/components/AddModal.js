import React from 'react';
import styled from 'styled-components'
import { theme } from '../theme/mainTheme'

const BackgroundOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
  z-index: 1000;
`
const ModalWrapper = styled.div`
  background-color: ${theme.primary};
  position: fixed;
  top: 50%;
  width: 100%;
  box-shadow: 0 20px 40px -10px rgba(black, .3);
  transform: translateY(-50%);
  z-index: 1000;
`
const AddModal = ({children}) => {
    return (
        <>
            <BackgroundOverlay />
            <ModalWrapper>{children}</ModalWrapper>
        </>
    );
};

export default AddModal;