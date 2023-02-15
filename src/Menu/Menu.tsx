/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/system'
import React from 'react'

const NavigationWrapper = styled('nav')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  position: 'relative',
})

const CustomButton = styled('button')({
  padding: '15px',
  boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
  color: 'white',
  fontSize: '12px',
  backgroundColor: '#5F9EA0',
  border: 'none',
  borderRadius: '5px',
  margin: '0 10px',
})

export default function Menu({ data }: any) {
  return (
    <NavigationWrapper>
      {data.map(
        (el: {
          title:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined
        }) => (
          <CustomButton>{el.title}</CustomButton>
        )
      )}
    </NavigationWrapper>
  )
}
