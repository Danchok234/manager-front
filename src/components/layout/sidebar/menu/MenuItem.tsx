import Icon from '@/components/ui/Icon'
import Link from 'next/link'
import { IMenuItem } from './menu.interface'
import styles from "../sidebar.module.scss"

export default function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<Link
			href={item.link}
		>
			<Icon className={styles.icon} width={26} height={26} name={item.icon} />
			<span>{item.name}</span>
		</Link>
	)
}
