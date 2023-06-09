import { createContext, useState, useContext } from "react"

export const activeSlideContext = createContext()

export const useActiveSlide = () => {
  const context = useContext(activeSlideContext)
  if (!context) throw new Error('There is no active slide provider')
  return context
}

export const ActiveSlideProvider = ({ children }) => {

  const [activeSlide, setActiveSlide] = useState(0)
  const [slides, setSlides] = useState([])

  const changeActiveSlide = (index) => {
    setActiveSlide(index)
  }

  const changeSlides = (slide) => {
    setSlides(slide)
    setActiveSlide(0)
  }

  const nextActiveSlide = () => {
    const nextSlide = activeSlide + 1 === slides.length ? 0 : activeSlide + 1
    setActiveSlide(nextSlide)
  }

  const backActiveSlide = () => {
    const nextSlide = activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1
    setActiveSlide(nextSlide)
  }

  return(
    <activeSlideContext.Provider value={{ activeSlide, slides, changeActiveSlide, changeSlides, nextActiveSlide, backActiveSlide }}>
      {children}
    </activeSlideContext.Provider>
  )
}