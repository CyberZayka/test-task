type MenuItem = {
  url?: string
  submenu?: MenuItem[]
  title: string
}

export interface MenuItemProps {
  item: MenuItem
  index: number
  openSubMenuIndex: number
  handleClick: (index: number) => void
}
