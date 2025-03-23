import { useState, useEffect } from 'react'

// Хук для проверки мобильного устройства
const useIsMobile = (): boolean => {
	const [isMobile, setIsMobile] = useState(false)

	const checkMobile = () => {
		setIsMobile(window.innerWidth <= 768)
	}

	useEffect(() => {
		checkMobile() // Проверяем размер окна при монтировании компонента
		window.addEventListener('resize', checkMobile) // Добавляем слушатель на изменение размера окна

		return () => {
			window.removeEventListener('resize', checkMobile) // Убираем слушатель при размонтировании
		}
	}, [])

	return isMobile
}

export default useIsMobile
