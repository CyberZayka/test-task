import '../mocks/matchMediaMock'
import React from 'react'
import { render } from '@testing-library/react'
import { StylesProvider } from '@material-ui/core'

function getComponentClasses<T extends { classes: any }>(
  component: JSX.Element
) {
  const { useStyles } = component.type

  let classes: Record<keyof T['classes'], string>

  function MockComp() {
    classes = useStyles(component.props)

    return null
  }

  render(
    <StylesProvider generateClassName={() => ''}>
      <MockComp />
    </StylesProvider>
  )

  return classes
}

export default getComponentClasses
