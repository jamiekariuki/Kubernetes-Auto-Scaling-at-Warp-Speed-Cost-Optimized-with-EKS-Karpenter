import React from 'react';
import './ContentBox.css';

const DeleteContentBox = ({ onSubmit, content }) => {
  const [record, setRecord] = React.useState(content);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const handleSubmit = () => {
    onSubmit(record.id);
  };

  return (
    <div className="content-box">
      <p>Item: {record.exercise}</p>
      <p>amount: {record.weight} KSH</p>
      <p>time: {formatDate(record.date)}</p>
      <button onClick={handleSubmit}>Delete</button>
    </div>
  );
};

export default DeleteContentBox;

