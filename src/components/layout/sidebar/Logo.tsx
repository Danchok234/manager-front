import Icon from '@/components/ui/Icon'
import styles from './sidebar.module.scss'

export default function Logo() {
	return (
		<div className={styles.logo}>
			<Icon
				name='target'
				className='text-purple_basic min-w-[32px] min-h-[32px]'
				width={32}
				height={32}
			/>
			<span className='overflow-visible whitespace-nowrap'>
				<p className='font-medium'>Manager</p>
				<p className='text-xs font-light text-grey_basic'>Created by D.Oliinyk</p>
			</span>
		</div>
	)
}
