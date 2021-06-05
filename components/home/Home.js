import LandingPage from './LandingPage'
import LatestItems from '../LatestItems'
import Subscribe from './Subscribe'
import WhyUs from './WhyUs'
export default function Home({data}) {
    return (
        <>
            <LandingPage />
            <LatestItems data={data} />
            <Subscribe />
            <WhyUs />

        </>
    )
}