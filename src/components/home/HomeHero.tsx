import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import type { Swiper as SwiperInstance } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Stat = {
  id?: string | number
  label?: string
  value?: string
}

type HeroSlide = {
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

type HomeHeroProps = {
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

const defaultStats: Stat[] = [
  { label: 'Global Reach', value: 'Connecting opportunities worldwide' },
  { label: 'Flexible Plans', value: 'Plans designed for every journey' },
  { label: 'Trusted Process', value: 'Clear steps from registration to benefit' },
]

const HomeHero = ({
  slides,
  titleBefore = 'Connect to',
  titleHighlight = 'global opportunities.',
  titleAfter = '',
  description = 'YES TIME GLOBAL PRIVATE LIMITED creates accessible programs and partnerships that connect people, businesses, and opportunities across the world.',
  primaryAction = (
    <a
      href="#programs"
      className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-[1.4rem] py-[0.85rem] font-bold text-[#071a36] shadow-[0_10px_22px_rgba(197,150,46,0.24)] transition duration-300 ease-out hover:-translate-y-1 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2"
    >
      Explore Programs
    </a>
  ),
  secondaryAction = (
    <a
      href="#about"
      className="inline-flex items-center justify-center rounded-full border border-[#0b3b6e] bg-[#0b3b6e] px-[1.4rem] py-[0.85rem] font-semibold text-white transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#1274b8] hover:shadow-[0_10px_22px_rgba(11,59,110,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b3b6e] focus-visible:ring-offset-2"
    >
      Discover More
    </a>
  ),
  stats = defaultStats,
  imageSrc = ['/img.webp', '/variant1_square.webp', '/variant2_square.webp'],
  imageAlt = 'Yes Time Global logo connecting opportunities worldwide',
  imageFit = 'cover',
  className = '',
}: HomeHeroProps) => {
  const hasSlidesMode = Boolean(slides?.length)
  const normalizedSlides = useMemo<HeroSlide[]>(
    () =>
      hasSlidesMode
        ? slides ?? []
        : [
            {
              titleBefore,
              titleHighlight,
              titleAfter,
              description,
              primaryAction,
              secondaryAction,
              stats,
              imageAlt,
            },
          ],
    [hasSlidesMode, slides, titleBefore, titleHighlight, titleAfter, description, primaryAction, secondaryAction, stats, imageAlt],
  )

  const singleModeImages = useMemo<string[]>(() => {
    if (hasSlidesMode) return []
    return Array.isArray(imageSrc) ? imageSrc : imageSrc ? [imageSrc] : []
  }, [hasSlidesMode, imageSrc])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const swiperRef = useRef<SwiperInstance | null>(null)
  const currentSlide = normalizedSlides[currentIndex] ?? {}

  const activeImages = useMemo<string[]>(() => {
    if (!hasSlidesMode) return singleModeImages
    const slide = normalizedSlides[currentIndex] ?? {}
    if (Array.isArray(slide.imageSrc)) return slide.imageSrc
    if (slide.imageSrc) return [slide.imageSrc]
    if (slide.image) return [slide.image]
    return []
  }, [currentIndex, hasSlidesMode, normalizedSlides, singleModeImages])

  useEffect(() => {
    if (!hasSlidesMode || normalizedSlides.length <= 1) return undefined
    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % normalizedSlides.length)
    }, 5000)
    return () => window.clearInterval(interval)
  }, [hasSlidesMode, normalizedSlides.length])

  const previousSlide = () => {
    setCurrentIndex((previous) => (previous - 1 + normalizedSlides.length) % normalizedSlides.length)
  }

  const nextSlide = () => {
    setCurrentIndex((previous) => (previous + 1) % normalizedSlides.length)
  }

  const imageFitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover'

  return (
    <section className={`${className} relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fafc_58%,#eaf2fb_100%)] py-16`}>
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <div key={hasSlidesMode ? currentIndex : 'single-layout'} className="grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(280px,5fr)]">
          <div className="flex min-w-0 flex-col gap-6">
            <div>
              <h1 className="m-0 text-[clamp(2.25rem,5vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-[#071a36]">
                {currentSlide.titleBefore}
                {currentSlide.titleHighlight ? <span className="block bg-[linear-gradient(135deg,#b8860b_0%,#f0c75e_48%,#c5962e_100%)] bg-clip-text pb-[0.1em] italic leading-[1.18] text-transparent">{currentSlide.titleHighlight}</span> : null}
                {currentSlide.titleAfter}
              </h1>

              {currentSlide.description ? <p className="mt-6 max-w-[42rem] border-l-[3px] border-[#0b3b6e] pl-4 text-lg leading-[1.7] text-[#41566f]">{currentSlide.description}</p> : null}
            </div>

            {currentSlide.primaryAction || currentSlide.secondaryAction ? <div className="flex flex-wrap gap-4">{currentSlide.primaryAction}{currentSlide.secondaryAction}</div> : null}

            {currentSlide.stats?.length ? (
              <div className="grid grid-cols-3 gap-4 border-t border-[rgba(197,150,46,0.35)] pt-6">
                {currentSlide.stats.map((stat, index) => (
                  <div key={stat.id ?? index} className="group relative min-h-16 p-2">
                    {stat.label ? <div className="mb-[0.35rem] text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#a97916]">{stat.label}</div> : null}
                    {stat.value ? <div className="text-[0.85rem] font-medium leading-[1.4] text-[#0b2b52]">{stat.value}</div> : null}
                    <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,#b8860b,#f0c75e,#b8860b)] transition-[width] duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative min-w-0">
            <div className="relative h-[clamp(300px,42vw,480px)] w-full overflow-hidden rounded-2xl border border-[rgba(11,59,110,0.32)] bg-[linear-gradient(145deg,#ffffff_0%,#edf4ff_100%)] shadow-[0_20px_45px_rgba(11,59,110,0.16)]">
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
                {activeImages.map((image, index) => (
                  <SwiperSlide key={`${image}-${index}`} className="relative !h-full !w-full">
                    <img src={image} alt={index === 0 ? currentSlide.imageAlt ?? imageAlt : ''} className={`absolute inset-0 block h-full w-full ${imageFitClass}`} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {activeImages.length > 1 ? (
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
                  <button type="button" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous image" className="inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-1.5 text-[#c5962e] transition duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2">
                    <FiChevronLeft />
                  </button>
                  <div className="flex items-center gap-1.5">
                    {activeImages.map((image, index) => (
                      <button
                        type="button"
                        key={`${image}-${index}`}
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                        aria-label={`Go to image ${index + 1}`}
                        className={`h-1.5 cursor-pointer rounded-full border-0 p-0 transition-all duration-300 ${currentImageIndex === index ? 'w-6 bg-[linear-gradient(90deg,#b8860b,#f0c75e)]' : 'w-1.5 bg-[#0b3b6e]'}`}
                      />
                    ))}
                  </div>
                  <button type="button" onClick={() => swiperRef.current?.slideNext()} aria-label="Next image" className="inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-1.5 text-[#c5962e] transition duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2">
                    <FiChevronRight />
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {hasSlidesMode && normalizedSlides.length > 1 ? (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          <button type="button" onClick={previousSlide} aria-label="Previous slide" className="inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-1.5 text-[#c5962e] transition duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2">
            <FiChevronLeft />
          </button>
          <div className="flex items-center gap-1.5">
            {normalizedSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.titleHighlight ?? index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 cursor-pointer rounded-full border-0 p-0 transition-all duration-300 ${currentIndex === index ? 'w-6 bg-[linear-gradient(90deg,#b8860b,#f0c75e)]' : 'w-1.5 bg-[#0b3b6e]'}`}
              />
            ))}
          </div>
          <button type="button" onClick={nextSlide} aria-label="Next slide" className="inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-1.5 text-[#c5962e] transition duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2">
            <FiChevronRight />
          </button>
        </div>
      ) : null}
    </section>
  )
}

export default HomeHero
