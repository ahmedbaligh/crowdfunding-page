import React, { useEffect, useState } from 'react';

import { Header, Monitor } from './components';
import initialData from './utils/data.json';

const App = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (sessionStorage.getItem('crowdfundData'))
      setData(JSON.parse(sessionStorage.getItem('crowdfundData')));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('crowdfundData', JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <Header />
      <Monitor data={data} />
    </div>
  );
};

export default App;
