import { useState } from 'react'
import Layout from '../common/Layout';
const Home = () => {
    const students = [
  { id: 1, name: "Dk", age: 22, marks: 80, course: "Java" },
  { id: 2, name: "Rahul", age: 21, marks: 55, course: "React" },
  { id: 3, name: "Amit", age: 23, marks: 90, course: "Node" },
  { id: 4, name: "Neha", age: 20, marks: 40, course: "Java" },
  { id: 5, name: "Simran", age: 24, marks: 70, course: "React" }
];
const [data,setData]=useState(students);
 const handleFilter=()=>{
 const result=students.filter((i)=>i.marks >60);
setData(result);
 }

  return (
    <>
    <Layout   typehshsh="[]"  hahahahahh={'ahababhjabhjabj'}>
  <button onClick={handleFilter}>marks</button>
   <div>
        
        
          {data.map((i)=>{
           return <p key={i.id}>{i.name}</p>
          })}
        
        
   </div>
   </Layout>
    </>
  )
}

export default Home
