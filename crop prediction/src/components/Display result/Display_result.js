import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Display_result = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://127.0.0.1:8000/predictions/predict/');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {Object.keys(data).length ? <p>{JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Display_result;
