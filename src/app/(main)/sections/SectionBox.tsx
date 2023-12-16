import {Box} from "@mui/system";

interface SectionBoxProps {
    children: React.ReactNode
}
export const SectionBox = ({
        children,
                           }: SectionBoxProps) => {
    return <section>
        <Box width={"100%"} height={"100vh"}>
            {children}
        </Box>
    </section>
}