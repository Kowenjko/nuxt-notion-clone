const { y: scrollY } = useWindowScroll()

export const useScrollTop = (threshold: number = 10) => {
	const scrolled = computed<boolean>(() =>
		scrollY.value > threshold ? true : false
	)

	return scrolled
}
