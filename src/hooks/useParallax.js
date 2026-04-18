import { useEffect, useRef } from 'react'

export function useParallax(speed = 0.5) {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const handleScroll = () => {
            const scrolled = window.pageYOffset
            const rect = element.getBoundingClientRect()
            const elementTop = rect.top + scrolled
            const elementHeight = rect.height
            const windowHeight = window.innerHeight

            // Only apply parallax when element is in viewport
            if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
                const yPos = (scrolled - elementTop) * speed
                element.style.transform = `translate3d(0, ${yPos}px, 0)`
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial position

        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed])

    return ref
}
