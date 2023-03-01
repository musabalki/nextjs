import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "../styles/Home.module.css"


export default function Home({users}) {
  const number=5
  const router = useRouter(); 
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <h1 className='title'>INDEX</h1>
       <style jsx>
        {
          `
          .title{
            background:${number>2? 'blue' :'red'}
          }
          `
        }
       </style>
       
       {users?.map((user)=>(<div>
        <h4 key={user.id} onClick={()=>router.push('user/'+user.id)}>
          {user.name}
        </h4>
       </div>))}
      </main>
    </>
  )
}
export const getStaticPaths  = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const users = await res.json();
  const ids = users.map(user=>user.id)
  const path = ids.map((id)=>({params:{id:id.toString()}}))
  console.log(path)
  return {
    props:{
      path,
      fallback:false
    } 
  }
}
export const getStaticProps   = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/'+`${context.params.id})`);
  const users = await res.json();
  return {
    props:{
      users
    } 
  }
}


/*
export const getServerSideProps  = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return {
    props:{
      users
    } 
  }
}*/

/*
export const getStaticProps=async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props:{
      users
    }
  }
}*/