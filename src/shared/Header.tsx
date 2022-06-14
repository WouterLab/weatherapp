import React from 'react'
import { GlobalSvgSelector } from '../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}><GlobalSvgSelector id='header-logo' /></div>
            <div className={s.name}>Weather ReactTS</div>
        </div>
        <div className={s.wrapper}>
        <ul className={s.ul}>
          <li className={s.li}><a href='https://github.com/WouterLab/weatherapp'>GitHub</a></li>
          <li className={s.li}><a href='https://ru.reactjs.org/'>About</a></li>
        </ul>
        </div>
    </header>
  )
}

export default Header;