
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // First check if window is defined (this prevents SSR issues)
  const isClient = typeof window === 'object'
  
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Only run this effect on the client side
    if (!isClient) return
    
    const updateSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Set size initially
    updateSize()
    
    // Add event listener
    window.addEventListener('resize', updateSize)
    
    // Return cleanup function
    return () => window.removeEventListener('resize', updateSize)
  }, [isClient])

  return isMobile
}
