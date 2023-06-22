import axios from 'axios';
import React, { createContext, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const fetchContext = createContext();

function FetchContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = useCallback(() => {
    axios.get('http://localhost:3333/tasks')
      .then((response) => setTasks(response.data));
  }, []);

  const contextValue = useMemo(() => (
    { getTasks, tasks }
  ), [getTasks, tasks]);
  return (
    <fetchContext.Provider value={ contextValue }>
      {children}
    </fetchContext.Provider>
  );
}

FetchContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export { fetchContext, FetchContextProvider };
