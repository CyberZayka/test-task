import React, { useState } from 'react'
import { Drawer, List, ListItem, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'
import MenuItem from './MenuItem'
import { MenuElem, MenuProps } from './types'

const drawerWidth = 240

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#0D81D0',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    textDecoration: 'none',
    textUnderline: 'none',
  },
}))

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

function Menu({ data }: MenuProps) {
  const classes = useStyles()
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(-1)

  const handleClick = (index: React.SetStateAction<number>) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? -1 : index)
  }

  const renderMenuItems = (menuData: MenuElem[]) => {
    return menuData.map((item, index) => {
      if (item && item.submenu && item.submenu.length > 0) {
        return (
          <MenuItem
            item={item}
            index={index}
            openSubMenuIndex={openSubMenuIndex}
            handleClick={handleClick}
          />
        )
      }
      return (
        <Link className={classes.link} to={item.url || '#'}>
          <ListItem button key={item.title + Math.floor(Math.random() * 10)}>
            <ListItemText>
              <Text data-testid="item-title">{item.title}</Text>
            </ListItemText>
          </ListItem>
        </Link>
      )
    })
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      data-testid="menu"
    >
      <List>{renderMenuItems(data)}</List>
    </Drawer>
  )
}

export default Menu
