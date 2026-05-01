import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const AllBooksPage = async () => {
  const res = await fetch('https://book-borrowing-web-app.vercel.app/data.json');

  const data = await res.json();
  return (
    <div className=" py-15">
      <h1 className="text-center text-5xl font-bold">All Books</h1>
      <div className="grid grid-cols-2  justify-between gap-5  mx-auto  md:grid-cols-4 md:w-5xl ">
        {data.map(b =>  <Card className='shadow-2xl  ' key={b.id}>
              <div className='relative  aspect-square overflow-hidden rounded-2xl group cursor-pointer '>
                <Image src={b.image_url} fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={b.title} className='  rounded-xl -full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110' />
                <Chip className='absolute right-2 top-2 px-5 bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white'>{b.category }</Chip>
              </div>
              <div>
                <h2 className='font-medium'>{b.title }</h2>
              </div>
              <div>
                
                <h2>Available Quantity:{ b.available_quantity}</h2>
              </div>
          <Link href={ `/all-books/${b.id}`}>
            <button  className={" btn btn-outline border-gray-300 rounded-2xl  w-full" }>View</button>
          </Link>
              
           </Card>)}
      </div>
    </div>
  );
};

export default AllBooksPage;