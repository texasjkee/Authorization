import { FC } from 'react'

import style from './Layout.module.scss'

interface LayoutProps {
  children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={style.layout}>{children}</div>
}
