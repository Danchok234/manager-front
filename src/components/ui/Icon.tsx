import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

export type TIconName = keyof typeof dynamicIconImports

interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports
}

const Icon = ({ name, ...props }: IconProps) => {
	const LucideIcon = dynamic(dynamicIconImports[name])

	return <LucideIcon {...props} />
}

export default Icon
