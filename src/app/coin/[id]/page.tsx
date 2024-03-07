import React from "react"

const Page = ({params}: {params: {id: string}}) => {

    return(
        <div>
            <p>{params.id}</p>
        </div>
    )
}

export default Page;