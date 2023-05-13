import React from 'react'
import axios from 'axios'
import Layout from '@/components/Layout'
const UserId = ({user}) => {
  return (
    <Layout>
        <div className='container'>
            <h1>Users Details page</h1>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Nmae</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>{user.phone}</td>
    </tr>
  </tbody>
</table>

        </div>
      
    </Layout>
  )
}

export default UserId

export async function getServerSideProps(context){
    try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        return {
            props:{
                user: data
            }
        }
    } catch (error) {
        console.log(error)
        
    }
}