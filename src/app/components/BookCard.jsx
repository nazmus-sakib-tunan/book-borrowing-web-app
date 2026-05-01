import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ bookData }) => {
  
  
  return (
    <Card className='shadow-2xl  '>
      <div className='relative  aspect-square overflow-hidden rounded-2xl group cursor-pointer  '>
        <Image src={bookData.image_url} fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={bookData.title} className='  rounded-xl -full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110' />
        <Chip className='absolute right-2 top-2 px-5 bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white'>{bookData.category }</Chip>
      </div>
      <div>
        <h2 className='font-medium'>{bookData.title }</h2>
      </div>
      <div>
        
        <h2>Available Quantity:{ bookData.available_quantity}</h2>
      </div>
      <Link href={`/all-books/${bookData.id}`}>
        <button className={" btn btn-outline border-gray-300 rounded-2xl  w-full"}>View</button>
      </Link>
      
   </Card>
  );
};

export default BookCard;