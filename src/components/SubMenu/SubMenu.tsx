import React, { useState } from 'react'
import { List } from '@material-ui/core'
import MenuItem from '../MenuItem'
import { SubMenuElem, SubMenuProps } from './types'

function SubMenu({ data }: SubMenuProps) {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(-1)

  const handleClick = (index: React.SetStateAction<number>) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? -1 : index)
  }

  const renderSubMenuItems = (subMenu: SubMenuElem[]) => {
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
