export type MenuElem = {
  url?: string
  submenu?: MenuElem[]
  title: string
}

export interface MenuProps {
  data: MenuElem[]
}

export interface MenuItemProps {
  item: MenuElem
  index: number
  openSubMenuIndex: number
  handleClick: (index: number) => void
}
