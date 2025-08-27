import React from 'react';
import './ContentBox.css';

const ReadContentBox = ({ content }) => {
  const [record, setRecord] = React.useState(content);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  return (
    <div className="content-box">
      <p>Item: {record.exercise}</p>
      <p>amount: {record.weight} KSH</p>
      <p>time: {formatDate(record.date)}</p>
    </div>
  );
};

export default ReadContentBox;
