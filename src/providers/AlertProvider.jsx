// import { createContext, useState } from 'react'
//
// import Alert from '@/components/ui/alert/Alert.jsx'
//
// export const AlertContext = createContext()
//
// const AlertProvider = ({ children }) => {
// 	const [alert, setAlert] = useState(null)
//
// 	const showAlert = (type = 'success', text, duration = 3000) => {
// 		setAlert({ type, text }) // сюда может прийти 'success' или 'error'
//
// 		setTimeout(() => {
// 			setAlert(null)
// 		}, duration)
// 	}
//
// 	return (
// 		<AlertContext.Provider value={{ showAlert }}>
// 			{children}
// 			{alert && <Alert text={alert.text} type={alert.type} />}
// 		</AlertContext.Provider>
// 	)
// }
// export default AlertProvider
