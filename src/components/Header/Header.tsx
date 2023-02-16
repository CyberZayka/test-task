import { styled } from '@mui/system'
import React, { ReactElement } from 'react'

const HeaderBox = styled('div')({
  height: '80px',
  width: '100%',
  boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

type HeaderProps = {
  children: ReactElement | ReactElement[] | string
}

export default function Header({ children }: HeaderProps) {
  return <HeaderBox>{children}</HeaderBox>
}
