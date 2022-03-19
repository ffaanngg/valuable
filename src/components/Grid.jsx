export default function Grid(props){
    return <div className="m-auto grid w-full grid-cols-7 grid-rows-6">
        {
            Array.from(Array(6)).map(() => (
                <div>
                    {
                        Array.from(Array(7)).map(() => (
                            <div className="bg-neutral-700 rounded opacity-75 h-16 w-16 mt-4">A</div>   
                        ))
                    }
                </div>
            ))
        }
    </div>
}