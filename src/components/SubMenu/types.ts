export type SubMenuElem = {
  url?: string
  submenu?: SubMenuElem[]
  title: string
}

export interface SubMenuProps {
  data: SubMenuElem[]
}
