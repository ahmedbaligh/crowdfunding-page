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

  const onBookmark = () =>
    setData(prevData => ({ ...prevData, bookmarked: !prevData.bookmarked }));

  const onPledge = (amount, index) =>
    setData(prev => {
      const stands = prev.stands;

      if (index > -1) --stands[index].left;

      return {
        ...prev,
        backers: ++prev.backers,
        backed: { ...prev.backed, current: prev.backed.current + amount },
        stands
      };
    });

  return (
    <div>
      <Header />
      <Monitor data={data} onBookmark={onBookmark} onPledge={onPledge} />
    </div>
  );
};

export default App;
