import React from 'react'
import Layout from '@/components/Layout'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Index = ({users}) => {
    const router = useRouter()
  return (
    <Layout>
        <div className="container">
        <h1>All usr list</h1>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      
    </tr>
  </thead>
  <tbody>
        {users.map(user => (
            <tr key={user.id}>
                <td onClick ={() => {router.push(`/users/${user.id}`)}}>
                    {user.name}
                </td>
            </tr>
        ))}
  </tbody>
</table>
        </div>
      
    </Layout>
  )
}

export default Index

export async function getStaticProps(){
    try{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        return {
            props :{
                users:data
            }
        }
    }
    catch(error){

    }
}
