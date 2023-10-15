import React from 'react';
import styles from './App.module.scss';

import Header from './components/header/header';
import TodoList from './components/header/todo-list/todo-list';

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
