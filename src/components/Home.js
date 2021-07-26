import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilter from './ExpenseListFilter.js';
const Home = (props) => (
    <div>
        <h1>Page Home</h1>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);
export default Home;