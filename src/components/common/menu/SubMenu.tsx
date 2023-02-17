import React, { useState } from 'react'
import { List } from '@material-ui/core'
import MenuItem from './MenuItem'
import { MenuElem, MenuProps } from './types'

function SubMenu({ data }: MenuProps) {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(-1)

  const handleClick = (index: React.SetStateAction<number>) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? -1 : index)
  }

  const renderSubMenuItems = (subMenu: MenuElem[]) => {
    return subMenu.map((item, index) => (
      <MenuItem
        item={item}
        index={index}
        openSubMenuIndex={openSubMenuIndex}
        handleClick={handleClick}
      />
    ))
  }

  return (
    <List component="div" disablePadding>
      {renderSubMenuItems(data)}
    </List>
  )
}

export default SubMenu
