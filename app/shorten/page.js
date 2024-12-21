"use client"
import Link from "next/link"
import { useState } from "react"
import React from 'react'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState(false);

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl,
        });
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
                setUrl("");
                setShorturl("");
                console.log(result)
                alert(result.message)
            })
            .catch((error) => {
                console.error('error', error)
                alert("URL already exist")
            });
    }


    return (
        <>
            <div className='mx-3 md:mx-auto max-w-lg bg-purple-300 mt-20 md:mt-16 p-3 md:p-8 rounded-lg'>
                <h1 className="font-bold text-3xl text-center mb-4">Generate your short URLs</h1>
                <div className="flex flex-col gap-3">
                    <input type="text"
                        className="p-3 focus:outline-purple-600 rounded-lg"
                        placeholder="Enter your URL"
                        onChange={e => { setUrl(e.target.value) }}
                        value={url}
                        name='URL' />

                    <input type="text"
                        className="p-3 focus:outline-purple-600 rounded-lg"
                        placeholder='Enter your preferred short URL text'
                        onChange={e => { setShorturl(e.target.value) }}
                        value={shorturl}
                        name='shorturl' />
                    <button onClick={generate} className="p-3 my-3 bg-purple-500 rounded-lg font-bold text-white">Generate</button>
                    {generated && <>
                        <span className="font-bold">Your Link</span><code><Link target="_blank" href={generated}>{generated}</Link></code>
                    </>}

                </div>
            </div>
        </>
    )
}

export default Shorten
