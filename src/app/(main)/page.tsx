'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import { IntroductionSection } from '@/app/(main)/sections/Introduction/IntroductionSection'
import { MusicSection } from '@/app/(main)/sections/music/MusicSection'

export default function MainPage() {
  return (
    <Box width={'100vw'} height={'100vh'}>
      <Swiper
        direction={'vertical'}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Keyboard, Pagination, Navigation]}
        className="main-swiper"
      >
        <SwiperSlide>
          <IntroductionSection />
        </SwiperSlide>
        <SwiperSlide>
          <MusicSection />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
