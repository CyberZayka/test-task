/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/system'

const HeaderBox = styled('div')({
  height: '80px',
  width: '100%',
  boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export default function Header({ children }: { children: any }) {
  return <HeaderBox>{children}</HeaderBox>
}
