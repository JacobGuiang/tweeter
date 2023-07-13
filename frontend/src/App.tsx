import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState<string>();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/ping');
      setData(response.data as string);
    };

    void getData();
  }, []);

  return (
    <>
      <div>{data}</div>
    </>
  );
}

export default App;
