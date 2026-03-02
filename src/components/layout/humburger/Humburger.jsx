import { CiMenuFries } from 'react-icons/ci'
import { IoClose } from 'react-icons/io5'

import styles from './Humburger.module.scss'
import Menu from '@/components/layout/humburger/Menu.jsx'
import { useOnClickOutside } from '@/hooks/useOnClickOutside.js'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	// if (import.meta.env.DEV) {
	//   debugger;
	// }

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <CiMenuFries color='white' />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
