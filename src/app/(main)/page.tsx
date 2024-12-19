'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import { IntroductionSection } from '@/app/(main)/sections/Introduction/IntroductionSection'
import { MusicCompositionSection } from '@/app/(main)/sections/music/MusicCompositionSection'
import { AcapellaSection } from '@/app/(main)/sections/acapella/AcapellaSection'
import { DesignSection } from '@/app/(main)/sections/design/DesignSection'
import { EngineeringSection } from '@/app/(main)/sections/engineering/EngineeringSection'

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
          <EngineeringSection />
        </SwiperSlide>
        <SwiperSlide>
          <MusicCompositionSection />
        </SwiperSlide>
        <SwiperSlide>
          <AcapellaSection />
        </SwiperSlide>
        <SwiperSlide>
          <DesignSection />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
