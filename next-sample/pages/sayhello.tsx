import { useEffect, useState } from 'react';

const Sayhello = () => {
  const [data, setData] = useState({ name: '' });

  useEffect(() => {
    fetch('api/hello')
      .then((res) => res.json())
      .then((profile) => {
        console.log(profile);
        setData(profile);
      });
  }, []);

  return <div>hello {data.name}</div>;
};

export default Sayhello;
