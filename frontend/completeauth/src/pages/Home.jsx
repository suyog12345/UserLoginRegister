import React from 'react'
import './Home.css'; 

const Home = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', age: 28, email: 'jane.smith@example.com' },
        { id: 3, name: 'Bob Johnson', age: 35, email: 'bob.johnson@example.com' },
        { id: 4, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
        { id: 5, name: 'Jane Smith', age: 28, email: 'jane.smith@example.com' },
        { id: 6, name: 'Bob Johnson', age: 35, email: 'bob.johnson@example.com' },
        { id: 7, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
        { id: 8, name: 'Jane Smith', age: 28, email: 'jane.smith@example.com' },
        { id: 9, name: 'Bob Johnson', age: 35, email: 'bob.johnson@example.com' },
      ];
  return (
    
    <div className="table-container">
        <h1>Table </h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home