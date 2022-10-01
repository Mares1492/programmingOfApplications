import "../css/not-main.css"
import { useEffect, useState } from "react"
import { DownloadingRounded } from "@mui/icons-material"
export const NotMain = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_limit=10`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch(err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [])

    useEffect(()=>{
        console.log(data)
    },[data])

    if (error) return <div className="not-main">{error}</div>
    if(!loading) return <div className="not-main">Some kind of meme fandom ☼</div>
    return <div >loading...</div>
}