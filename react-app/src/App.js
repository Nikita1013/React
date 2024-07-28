import './App.css';
// import {useRef} from "react";
// import {useEffect, useReducer, useState} from "react";
import { useEffect, useState } from 'react';


const tahoe_peaks = [
  {name: "Freel", elevation: 10891},
  {name: "Monument", elevation: 10067},
  {name: "Pyramid", elevation: 9983},
  {name: "Tallac", elevation: 9735}
];

function List({data, renderItem, renderEmpty}) {
  return !data.length ? (
     renderEmpty 
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List
      data={tahoe_peaks}
      renderempty={<p>This list is empty</p>}
      renderItem={(item) => (
      <>
        {item.name} -- {item.elevation} ft.
      </>
    )}
    />
  );
}


export default App;



//------4-------------
// function App() {
//   const [checked, setChecked] = useReducer(
//     checked => !checked, 
//     false
//   );
//   return(
//     <div className="App">
//       <input 
//         type="checkbox" 
//         value={checked} 
//         onChange={setChecked}
//       />
//       <label>{checked ? "checked" : "not checked"}</label>
//     </div>
//   );
// }








//----------------1,2,3-----------------

// function App() {
//   const [emotion, setEmotion] = useState("happy");
//   const [secondary, setSecondary] = useState("tired");

//   useEffect(()=> {
//     console.log(`It's ${emotion} right now`);
//   }, [emotion]);

//   useEffect(() => {
//     console.log(`It's ${secondary} around`);
//   }, [secondary]);

//   return (
//     <div className="App">
//       <h1>Current emotion is {emotion}</h1>
//       <button onClick={() => setEmotion("Sad")}>
//        Sad</button>

//        <button onClick={() => setEmotion("Angry")}>
//         Angry
//        </button>

//        <button onClick={() => setEmotion("Excited")}>
//         Excited
//        </button>

// <h2>Current Secondary emotion is {secondary}</h2>
//        <button onClick={() => setSecondary("Grateful")}>
//         Grateful
//        </button>
//     </div>
//   );
// }

//--------------------------
//Custom hook
// function useInput(initialValue){
//   const [value, setValue] = 
//     useState(initialValue);
//   return [
//     {
//       value, 
//       onChange: e => setValue(e.target.value)
//     },
//     () => setValue(initialValue)
//   ];
// }

// function App() {
//   const [titleProps, resetTitle] =useInput("");
//   const [colorProps, resetColor] = useState("#000000");
  
//   const submit =(e) =>{
//     e.preventDefault();
//     alert(
//       `${titleProps.value}, ${colorProps.value}`
//     );
//     resetTitle();
//     resetColor();
//   };
//   return(
//     <form onSubmit={submit}>
//       <input
//         {...titleProps}
//         onChange={(event )=>
//           resetTitle(event.target.value)
//         }
//           type="text"
//           placeholder="color title..."
//       />
//       <input 
//         {...colorProps}
//         type="color" 
//         onChange={(event)=>
//           resetColor(event.target.value)
//         }
//       />
//       <button>ADD</button>
//     </form>
//   )
// }

//------------GITHUB-----API----------------------------
// function GithubUser({name, location, avatar}){
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{location}</p>
//       <img src={avatar} height={150} alt={name} />
//     </div>
//   )
// }

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(null);
  
//   useEffect(() => {
//     setLoading(true);
//     fetch(
//       `https://api.github.com/users/moonhighway`
//     )
//     .then((response) => response.json())
//     .then(setData)
//     .then(() => setLoading(false))
//     .catch(setError);
//   }, []);

//   if(loading)
//     return <h1>Loading...</h1>;

//   if(error)
//     return <pre>{JSON.stringify(error)}</pre>
//   if(!data)
//     return null;
//   return (
//     <GithubUser 
//     name={data.name} 
//     location={data.location}
//     avatar= {data.avatar_url}
//     />
//   );
// }

//----------------------Fetching--data--with--GraphQL---------------------
// const query = `
// query{
//  allLifts {
//   name
//   elevationGain
//   status
// } 
// }
// `;

// const opts = {
//   method: "POST",
//   headers: { "content-Type": "application/json"},
//   body: JSON.stringify({query})
// };

// function Lift({name, elevationGain, status}){
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{elevationGain} {status}</p>
//     </div>
//   )
// }

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
  
//   useEffect(() => {
//     setLoading(true);
//     fetch(
//       `https://snowtooth.moonhighway.com/`,
//       opts
//     )
//     .then((response) => response.json())
//     .then(setData)
//     .then(() => setLoading(false))
//     .catch(setError);
//   }, []);

//   if(loading)
//     return <h1>Loading...</h1>;

//   if(error)
//     return <pre>{JSON.stringify(error)}</pre>
//   if(!data)
//     return null;
//   return (
//     <div>
//       {data.data.allLifts.map((lift)=> (
//         <Lift 
//         name={lift.name} 
//         elevationGain={lift.elevationGain} 
//         status={lift.status} 
//         />
//       ))}
//     </div>
//   );
// }
