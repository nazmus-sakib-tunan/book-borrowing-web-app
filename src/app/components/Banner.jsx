import React from 'react';



const Banner = async () => {

  const res = await fetch('https://book-borrowing-web-app.vercel.app/data.json');
  const bookData = await res.json();
  
  const firstFour = bookData.slice(0, 4);
  console.log(firstFour);
  return (
 <section className="bg-orange-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
      
        <div>
          <p className="inline-block bg-yellow-200 text-black font-semibold px-4 py-1 rounded-full text-sm mb-4">
             Your Digital Library
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find Your{" "}
            <span className="bg-linear-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Next Read
            </span>
          </h1>

          <p className="text-gray-600 mt-4 max-w-md">
            Discover thousands of books across all genres. Borrow digitally,
            read anywhere, and return with a click. Your next adventure awaits.
          </p>

          <div className="flex gap-4 mt-6 items-center">
            <button className=" btn bg-orange-500 text-white px-6 py-6 rounded-lg shadow hover:bg-orange-600 transition">
              Browse Now →
            </button>

            <button className="btn px-6 py-6 rounded-lg shadow">
              Join Free
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES (hidden below md) */}
        <div className="hidden md:grid grid-cols-2 gap-5">

          <div className="hidden md:grid grid-cols-2 gap-5">
          {firstFour.map((book, index) => (
            <div key={book.id} className="rounded-2xl overflow-hidden shadow">
              
              {/* special box for 2nd item (CC box replace করতে চাইলে) */}
              {index === 1 ? (
                <div className="bg-orange-500 flex items-center justify-center text-white text-5xl font-bold h-full">
                  CC
                </div>
              ) : (
                <img
                  src={book.image_url}
                  alt="book"
                  className="w-full h-full object-cover"
                />
              )}

            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;