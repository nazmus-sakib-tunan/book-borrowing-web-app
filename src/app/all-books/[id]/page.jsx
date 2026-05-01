import React from 'react';

const BookDetailsPage = async({ params }) => {
  const { id } = await
    params;
  const res = await fetch('https://book-borrowing-web-app.vercel.app/data.json');
  const AllData = await res.json();
  const data = AllData.find(p => p.id == id);

  console.log(data);
  return (
    <div>
      <h1>{data.title }</h1>
    </div>
  );
};

export default BookDetailsPage;