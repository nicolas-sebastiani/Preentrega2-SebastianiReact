import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function ItemDetail2({}) {

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
            {producto && <div class="flex min-h-screen items-center justify-center">
            <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={producto.thumbnail.slice(0, -5) + "O.jpg"}
                    alt="image"
                    class="h-full w-full object-cover"
                />
                </div>
                <div class="p-6">
                <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    Precio: ${producto.price}
                </h6>
                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {producto.title}
                </h4>
                <a class="inline-block" href="#">
                    <button
                    class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    >
                    Agregar al carrito
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4"
                        >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
                </svg>
            </button>
            </a>
        </div>
        </div>
        <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
        />
        </div>}
        </>
    )
}