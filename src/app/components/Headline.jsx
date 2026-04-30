import Marquee from "react-fast-marquee";



const Headline = async() => {
  const res = await fetch("https://book-borrowing-web-app.vercel.app/category.json");

  const data = await res.json();
  return (
    <div className="flex justify-between gap-1 items-center bg-gray-200  mt-15 ">
      <button className="btn bg-red-500">Latest Books</button>
      <Marquee>
        {
          data.map(d => {

          
            return <span key={d.id}>
              {d.icon}{d.title} {d.description }</span>
          })
        }
      </Marquee>

    </div>
  );
};

export default Headline;