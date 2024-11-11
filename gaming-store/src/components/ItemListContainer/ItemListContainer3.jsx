// version con API Mercado Libre

import { useParams } from "react-router-dom";
import Item3 from "./Item3";

export default function ItemListContainer2() {
    const params = useParams()
    console.log(params)
    return (
    <>
        {/* <h2 className="mt-5 font-mono text-4xl text-gray-300 text-center">Todos los Productos</h2> */}
        <div className="flex flex-wrap w-full gap-4 justify-around">
            <Item3 id={params.id}/>
        </div>
    </>
    )
}