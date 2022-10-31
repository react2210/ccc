import Layout from "../common/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Popup from "../common/Popup";

export default function Youtube() {

    const [Vids, setVids] = useState([]);
    const [Open, setOpen] = useState(false);
    const [Index, setIndex] = useState(0);

    useEffect(() => {
        const key = 'AIzaSyAKqZ1Dx9awi1lCS84qziASeQYZJqLxLSM';
        const playlist = "PLtt429gshWMp4G-VhNTFhBzBTd7GOEz-G";
        const num = 6;
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

        axios.get(url).then((json) => {
            //console.log(json.data);
            setVids(json.data.items);
        })
    }, []);

    return (
        <>
            <Layout name={"Youtube"}>

                {Vids.map((data, index) => {

                    const tit = data.snippet.title;
                    const desc = data.snippet.description;
                    const date = data.snippet.publishedAt;

                    return (
                        <article key={index}>
                            <h3>{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}</h3>
                            <div className="txt">
                                <p>{desc.length > 100 ? desc.substr(0, 100) : desc}</p>
                                <span>{date.split('T')[0]}</span>
                            </div>
                            <div className="pic" onClick={() => {
                                setOpen(true)
                                setIndex(index)
                            }}>
                                <img
                                    src={data.snippet.thumbnails.standard.url}
                                    alt={data.snippet.title} />
                            </div>
                        </article>
                    );
                })}

            </Layout>

            {Open && <Popup setOpen={setOpen}>
                <iframe src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`} frameBorder='0'></iframe>
            </Popup>}
        </>

    );
}