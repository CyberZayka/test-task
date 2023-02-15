/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/system'

const HeaderBox = styled('div')({
  height: '120px',
  width: '100%',
  backgroundColor: '#0D81D0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export default function Header({ children }: { children: any }) {
  return <HeaderBox>{children}</HeaderBox>
}
