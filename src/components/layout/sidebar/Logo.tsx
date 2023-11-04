import Icon from '@/components/ui/Icon'
import styles from './sidebar.module.scss'

export default function Logo() {
	return (
		<div className={styles.logo}>
			<Icon name='target' className='text-purple_basic min-w-[32px] min-h-[32px]' width={32} height={32} />
			<span className='font-medium'>Manager</span>
		</div>
	)
}
