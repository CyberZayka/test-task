export type MenuElem = {
  url?: string
  submenu?: MenuElem[]
  title: string
}

export interface MenuProps {
  data: MenuElem[]
}
