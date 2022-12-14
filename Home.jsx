import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const getPostUrl = `http://localhost:5000/api/posts/`
    const { search } = useLocation();


    useEffect(() => {

        const fetchPosts = async () => {
            const res = await axios.get(getPostUrl + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );

}
