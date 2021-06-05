
import WhyUsCard from './WhyUsCard'

export default function WhyUs(){
    return (
        <>
        <section className="w-11/12 max-w-screen-lg m-auto my-20">
            <div className="grid grid-cols-whyus justify-items-center gap-4">

        <WhyUsCard/>
        <WhyUsCard/>
        <WhyUsCard/>
            </div>
        </section>
        </>
    )
}