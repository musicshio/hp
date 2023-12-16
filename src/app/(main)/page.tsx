'use client'
import {Stack} from "@mui/system";
import {IntroductionSection} from "@/app/(main)/sections/Introduction/IntroductionSection";
import {MusicSection} from "@/app/(main)/sections/music/MusicSection";

export default function MainPage() {
    return <Stack>
        <IntroductionSection/>
        <MusicSection/>
    </Stack>
}