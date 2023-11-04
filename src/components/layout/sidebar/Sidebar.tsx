import Logo from './Logo'
import Menu from './menu/Menu'
import styles from './sidebar.module.scss'

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Logo />
			<Menu />
		</aside>
	)
}
