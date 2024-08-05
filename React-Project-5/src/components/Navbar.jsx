import React from 'react'

const Navbar = () => {
  return ( 
    <div className="my-4 h-[60px] rounded-lg flex justify-center items-center bg-white gap-2 text-xl font-medium">
        <img src="/firebase.svg" alt="Firebase Logo" />
        <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar