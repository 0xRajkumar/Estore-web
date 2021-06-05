import Item from './Item'



export default function LatestItems({ data }) {
  
    return (
        <>

            <section className="p-4 max-w-screen-2xl m-auto" id="latestitem">
                <div className="my-20">
                    <h1 className="text-center text-4xl sm:text-5xl md:text-7xl font-Bebas antialiased underline ">Latest Products</h1>
                </div>
                <div className=" grid grid-cols-cards justify-items-center items-start gap-4">
                    { data.map((data)=>{
                        return <Item {...data} key={data.id}/>
                    })}

                </div>
            </section>

        </>
    )
}
