import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState({}); // use object, not empty string

  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // you can inspect it
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
      });
  }, []);

  return (
    <>
    <div className="text-white bg-gray-800 p-4 text-xl">
      GitHub Followers: {data.followers} 
    </div>
    <img src={data.avatar_url} alt="" />
    </>
    
  );
}

export default Github;
