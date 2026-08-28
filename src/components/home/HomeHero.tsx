import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import type { Swiper as SwiperInstance } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'

export type Stat = {
  id?: string | number
  label?: string
  value?: string
}

export type HeroSlide = {
  id?: string | number
  titleBefore?: string
  titleHighlight?: string
  titleAfter?: string
  description?: string
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
  stats?: Stat[]
  imageSrc?: string | string[]
  image?: string
  imageAlt?: string
}

export type HomeHeroProps = {
  slides?: HeroSlide[]
  titleBefore?: string
  titleHighlight?: string
  titleAfter?: string
  description?: string
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
  stats?: Stat[]
  imageSrc?: string | string[]
  imageAlt?: string
  imageFit?: 'cover' | 'contain'
  className?: string
}

const DEFAULT_STATS: Stat[] = [
  { id: '1', label: 'Global Reach', value: 'Connecting opportunities worldwide' },
  { id: '2', label: 'Flexible Plans', value: 'Plans designed for every journey' },
  { id: '3', label: 'Trusted Process', value: 'Clear steps from registration to benefit' },
]

export const HomeHero = ({
  slides,
  titleBefore = 'Connect to',
  titleHighlight = 'Global Opportunities.',
  titleAfter = '',
  description = 'YES TIME GLOBAL PRIVATE LIMITED creates accessible programs and partnerships that connect people, businesses, and opportunities across the world.',
  primaryAction = (
    <a
      href="#programs"
      className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-6 py-3.5 text-xs font-bold tracking-wider text-[#071a36] shadow-[0_10px_22px_rgba(197,150,46,0.24)] transition duration-300 ease-out hover:-translate-y-1 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2"
    >
      Explore Programs
    </a>
  ),
  secondaryAction = (
    <a
      href="#about"
      className="inline-flex items-center justify-center rounded-full border border-[#0b3b6e] bg-[#0b3b6e] px-6 py-3.5 text-xs font-bold tracking-wider text-white transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(11,59,110,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b3b6e] focus-visible:ring-offset-2"
    >
      Discover More
    </a>
  ),
  stats = DEFAULT_STATS,
  imageSrc = ['/hero-yes.png', '/variant2_square.webp', '/variant1_square.webp'],
  imageAlt = 'Yes Time Global logo connecting opportunities worldwide',
  imageFit = 'contain',
  className = '',
}: HomeHeroProps) => {
  const hasSlidesMode = Boolean(slides && slides.length > 0)
  
  const normalizedSlides = useMemo<HeroSlide[]>(() => {
    if (hasSlidesMode && slides) return slides
    return [
      {
        id: 'default-slide',
        titleBefore,
        titleHighlight,
        titleAfter,
        description,
        primaryAction,
        secondaryAction,
        stats,
        imageSrc,
        imageAlt,
      },
    ]
  }, [hasSlidesMode, slides, titleBefore, titleHighlight, titleAfter, description, primaryAction, secondaryAction, stats, imageSrc, imageAlt])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const swiperRef = useRef<SwiperInstance | null>(null)

  const currentSlide = normalizedSlides[currentIndex] ?? normalizedSlides[0]

  const activeImages = useMemo<string[]>(() => {
    const src = currentSlide.imageSrc ?? currentSlide.image
    if (Array.isArray(src)) return src
    if (typeof src === 'string') return [src]
    return []
  }, [currentSlide])

  // Reset image Swiper index when main slide changes
  useEffect(() => {
    setCurrentImageIndex(0)
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0)
    }
  }, [currentIndex])

  // Main slide autorotation
  useEffect(() => {
    if (!hasSlidesMode || normalizedSlides.length <= 1) return undefined
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % normalizedSlides.length)
    }, 6000)
    return () => window.clearInterval(interval)
  }, [hasSlidesMode, normalizedSlides.length])

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + normalizedSlides.length) % normalizedSlides.length)
  }

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % normalizedSlides.length)
  }

  return (
    <section className={`relative flex min-h-[calc(100vh-5rem)] items-center bg-[linear-gradient(135deg,#ffffff_0%,#f7fafc_58%,#eaf2fb_100%)] py-12 lg:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Content Column */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-[#071a36] sm:text-5xl lg:text-6xl">
                {currentSlide.titleBefore}{' '}
                {currentSlide.titleHighlight && (
                  <span className="block text-[#c5962e]">{currentSlide.titleHighlight}</span>
                )}
                {currentSlide.titleAfter}
              </h1>

              {currentSlide.description && (
                <p className="max-w-xl border-l-4 border-[#0b3b6e] pl-4 text-base leading-relaxed text-[#41566f] sm:text-lg">
                  {currentSlide.description}
                </p>
              )}
            </div>

            {(currentSlide.primaryAction || currentSlide.secondaryAction) && (
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {currentSlide.primaryAction}
                {currentSlide.secondaryAction}
              </div>
            )}

            {currentSlide.stats && currentSlide.stats.length > 0 && (
              <div className="mt-4 grid grid-cols-1 gap-4 border-t border-[rgba(197,150,46,0.35)] pt-6 sm:grid-cols-3">
                {currentSlide.stats.map((stat, idx) => (
                  <div key={stat.id ?? idx} className="group relative p-2 transition-colors">
                    {stat.label && (
                      <div className="text-xs font-bold uppercase tracking-wider text-[#a97916]">
                        {stat.label}
                      </div>
                    )}
                    {stat.value && (
                      <div className="mt-1 text-sm font-medium text-[#0b2b52]">
                        {stat.value}
                      </div>
                    )}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-0.5 w-0 bg-[linear-gradient(90deg,#b8860b,#f0c75e)] transition-all duration-300 group-hover:w-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Media Slider Column */}
          <div className="relative min-w-0 lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#0b3b6e]/30 bg-[#071a36] shadow-2xl">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={700}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={activeImages.length > 1}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
                className="h-full w-full"
              >
                {activeImages.map((imgSrc, index) => (
                  <SwiperSlide key={`${imgSrc}-${index}`} className="relative h-full w-full bg-[#071a36]">
                    <img
                      src={imgSrc}
                      alt={index === 0 ? currentSlide.imageAlt ?? imageAlt : ''}
                      className={`h-full w-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper Controls */}
              {activeImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#071a36]/60 px-3 py-1.5 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous image"
                    className="p-1 text-[#c5962e] transition hover:scale-110 focus-visible:outline-none"
                  >
                    <FiChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-1.5">
                    {activeImages.map((_, index) => (
                      <button
                        type="button"
                        key={`image-dot-${index}`}
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                        aria-label={`Go to image ${index + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentImageIndex === index ? 'w-5 bg-[#f0c75e]' : 'w-1.5 bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next image"
                    className="p-1 text-[#c5962e] transition hover:scale-110 focus-visible:outline-none"
                  >
                    <FiChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Global Slide Navigation */}
      {hasSlidesMode && normalizedSlides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/80 px-4 py-2 shadow-md backdrop-blur-md">
          <button
            type="button"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            className="text-[#071a36] transition hover:scale-110"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {normalizedSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.id ?? `slide-dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-6 bg-[#c5962e]' : 'w-2 bg-[#0b3b6e]/30'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleNextSlide}
            aria-label="Next slide"
            className="text-[#071a36] transition hover:scale-110"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  )
}

export default HomeHero