import React, { useEffect, useState } from "react";
// firebase
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/configFirebase";

export const geratePostsContext = React.createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isPosts, setIsPosts] = useState(false);

    const dataPostsAll = collection(db, 'posts');  

    const submitDataPost = async (displayName, description, title, profile, imagePost, lastName) => {
        try {
            setLoading(true);

            const docRef = await addDoc(collection(db, "posts"), {
                displayName,
                title,
                description,    
                imagePost,
                lastName,
                datePost: new Date().toLocaleString(), 
                profile: profile
            });

            const addMore = await docRef; 
            setPosts((dataCopleted) => [...dataCopleted, addMore]); 

            // window.location.href = '/posts'

            console.log("Document written with ID: ", docRef.id);
            setMessage('Salvo com sucesso!');
            setPosts(posts)
            setLoading(false);
        } catch (e) {
            console.error("Error adding document: ", e);
            setMessage('Um erro inesperado ocorreu ao tentar enviar os dados.')
        }
    }

    // get data db
    useEffect(() => {
        const getDataFireStore = async () => {
            setIsPosts(true)
            const data = await getDocs(dataPostsAll); 
            const dataAllPosts = data.docs.map((doc) => ({...doc.data(), id: doc.id})); 
            console.log(dataAllPosts); 

            setPosts(dataAllPosts); 
            setIsPosts(false)
        }
        getDataFireStore();
    }, [])

    return (
        <geratePostsContext.Provider value={{ submitDataPost, message, setMessage, loading, posts, isPosts}}>
            {children}
        </geratePostsContext.Provider>
    )
}

export const UsePostsGerate = () => React.useContext(geratePostsContext); 