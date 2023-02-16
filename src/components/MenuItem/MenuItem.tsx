/* eslint-disable no-nested-ternary */
import React from 'react'
import { ListItem, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'
import SubMenu from '../SubMenu'
import { MenuItemProps } from './types'

const ListItemText = styled('div')({
  flex: '1 1 auto',
  minWidth: 0,
  marginTop: '4px',
  marginBottom: '4px',
})

const Text = styled('span')({
  fontSize: '1rem',
  fontWeight: 500,
  color: 'black',
})

function MenuItem({
  item,
  index,
  openSubMenuIndex,
  handleClick,
}: MenuItemProps) {
  return (
    <Link style={{ textDecoration: 'none' }} to={item.url || '#'} key={index}>
      <ListItem button onClick={() => handleClick(index)}>
        <ListItemText>
          <Text>{item.title}</Text>
        </ListItemText>
        {item && item.submenu && item.submenu?.length > 0 ? (
          openSubMenuIndex === index ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )
        ) : null}
      </ListItem>
      {item.submenu && item.submenu.length > 0 ? (
        <Collapse in={openSubMenuIndex === index} timeout="auto" unmountOnExit>
          <SubMenu data={item.submenu} />
        </Collapse>
      ) : null}
    </Link>
  )
}

export default MenuItem
