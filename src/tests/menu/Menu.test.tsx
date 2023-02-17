/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { MenuProps } from '../../components/common/menu/types'
import Menu from '../../components/common/menu'

const queryClient = new QueryClient()

const props: MenuProps = {
  data: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Services',
      submenu: [
        {
          title: 'first service',
          url: 'services/first-service',
        },
        {
          title: 'second service',
          submenu: [
            {
              title: 'Nested service',
              url: 'services/nested-service',
            },
            {
              title: 'Nested service',
              url: 'services/nested-service',
            },
          ],
        },
      ],
    },
    {
      title: 'About',
      url: '/about',
    },
  ],
}

describe('Menu unit tests', () => {
  test('Menu component renders properly', () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Menu data={props.data} />
        </Router>
      </QueryClientProvider>
    )

    const menu = getByTestId('menu')

    expect(menu).toBeInTheDocument()
  })
})
