// import React, { useEffect, useState } from 'react'

// const Fake = () => {

//   const [post,setPost] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then ((response) =>response.json())
//     .then ((data)=> setPost(data) )
//     .catch((error)=> console.log("Error API LOADING...", error ));

//   },[]);


//   return (
//     <div>
//       <h1 className='text-4xl text-center text-gray-100 bg-amber-800'> Posts...</h1>
//       {post.length === 0? (
//         <p>Please wait...</p>
//       ):(
//         <ul>
//           {post.map((post)=>(
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       )
//     }



//     </div>
//   )
// }

// export default Fake