import react from "react";

export default function PostPage({params}){
    console.log(params)
    return  <div>POST {params.post}</div>
}