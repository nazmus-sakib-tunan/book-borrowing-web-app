import BookCard from "./BookCard";



const TopBooks = async () => {
  const res = await fetch('https://book-borrowing-web-app.vercel.app/data.json');

  const data = await res.json();
  const topBook = data.slice(0, 6);
 
  return (
    <div className="py-15">

      <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold">Featured Books</h1>
          <p className="text-gray-400">Hand-picked selections from our librarians. Start your reading journey with these amazing titles.</p>
        </div>
      <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto  ">
        
        
         {

        topBook.map(bookData => <BookCard  key={ bookData.id}  bookData={bookData} />)

      }
     </div>
    </div>
  );
};

export default TopBooks;