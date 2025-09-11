// import React, { useEffect, useState } from "react";

// const Time = () => {
//   const [time, setTime] = useState(
//     new Date().toLocaleTimeString("en-us", { hour12: true })
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString("en-US", { hour12: true }));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <div className="text-center p-8 rounded-3xl shadow-2xl bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 transform transition-all hover:scale-105">
//         <h1 className="text-7xl font-bold text-purple-400 via-indigo-400 text-shadow-gray-700  font-mono tracking-tighter mb-4 text-shadow-lg">
//           {time}
//         </h1>
//         <div className="flex justify-center space-x-3 mt-6">
//           {[1, 2, 3].map((dot) => (
//             <span 
//               key={dot} 
//               className="h-3 w-3 bg-white rounded-full opacity-70 animate-pulse"
//               style={{ animationDelay: `${dot * 0.2}s` }}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Time;