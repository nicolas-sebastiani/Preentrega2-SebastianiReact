import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function ItemDetail({}) {

    const params = useParams()
    
    const [producto, setProds] = useState('')

    useEffect (() => {
        fetch(`https://api.mercadolibre.com/items/${params.id}`)
        .then(response => response.json())
        .then(data => {setProds(data); console.log(data)})
        .catch(error => console.error(error))
    },[])

    return (
            <>
            {producto && <div className="flex min-h-full">
                    <div className="max-w-full mx-auto">
                        <div className="block mb-4 mx-auto pb-2 max-w-full">
                    </div>
                        <div className="relative flex flex-col w-full text-gray-300 bg-gray-800 shadow-md bg-clip-border rounded-xl">
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-500 bg-clip-border rounded-xl h-96">
                                <img
                                    src={producto.thumbnail.slice(0, -5) + "O.jpg"}
                                    alt="card-image" className="object-cover object-top w-full h-full transition-all hover:scale-105" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="block font-mono text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
                                        {producto.title}
                                    </p>
                                </div>
                                <p className="block font-mono text-center antialiased font-medium text-lg leading-relaxed text-blue-gray-900">
                                        Precio: ${producto.price}
                                </p>
                            </div>
                            <div className="p-6 pt-0 place-items-end h-full">
                                <Link to={`/cart`}>
                                    <button
                                        className="align-middle select-none border-gray-600 font-mono font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-m py-3 px-6 rounded-lg shadow-gray-600 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        type="button">
                                        Agregar al Carrito
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>}
            </>
        )
}