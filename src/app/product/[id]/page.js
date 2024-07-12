import Image from "next/image";

export default async function Product({ params }) {

    const response = await fetch("https://fakestoreapi.com/products/" + params.id)
    const data = await response.json()
    return (
        <div>
            <p> {data.title} </p>
            <Image width={200} height={200} src={data.image} />
            <p>US{data.price}</p>
            <p>Description: {data.description}</p>
            <ul>
                <li>Category: {data.category}</li>
                <li>Rating: {data.rating.count}</li>
            </ul>
        </div>
    )
}