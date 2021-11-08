import Layout from '@/components/layout'
import { API_URL } from '@/config/index'

export default function Homepage({events}) {
  console.log(events);
  return (
   <Layout>
     <h1>Homepage</h1>
     {events.length===0 && <h3>NO Evnts to show</h3>}
     {events.map(evt=>(
       <h3 key={evt.id}>{evt.name}</h3>
     ))}
   </Layout>
  )
}
export async function getServerSideProps(){
  const res = await fetch(`${API_URL}/api/events`)
  const events=await res.json()
  console.log(events);

  return{
    props:{events},
    revalidate:1
  }
}