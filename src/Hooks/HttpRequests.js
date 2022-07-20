import { useEffect, useState } from 'react'
import axios from 'axios'

export function useAxiosGet(url) {
    const [Products, fetchProducts] = useState({
        data: null,
        error: false
    })
    let content = null;

    useEffect(() => {
        fetchProducts({
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                fetchProducts({
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                fetchProducts({
                    data: null,
                    error: true
                })
            })
    }, [url])

    return Products;



    // const [request, setRequest] = useState({
    //     loading: false,
    //     data: null,
    //     error: false
    // })

    // useEffect(() => {
    //     setRequest({
    //         loading: true,
    //         data: null,
    //         error: false
    //     })
    //     axios.get(url)
    //         .then(response => {
    //             setRequest({
    //                 loading: false,
    //                 data: response.data,
    //                 error: false
    //             })
    //         })
    //         .catch(() => {
    //             setRequest({
    //                 loading: false,
    //                 data: null,
    //                 error: true
    //             })
    //         })
    // }, [url])

    // return request
}
