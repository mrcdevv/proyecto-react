import { Link } from 'react-router-dom';

function MainCard({ id, image, title, year }) {

  return (
    <div className='block mr-[2%] mb-[2%] text-center w-[18%] overflow-hidden '>
      <Link to={`/pelicula/${id}`}>
        <div className='relative overflow-hidden'>
          <img src={image} alt={title} className='rounded-md w-full transition-transform transform-gpu duration-300 ease-in-out hover:scale-105 ' />
          <span className='absolute bottom-2 left-2 bg-[#248dea] px-[6px] py-[2px] rounded-[4px]'>{year}</span>
        </div>
        <p className='text-[0.8125em]'>{title}</p>
      </Link>
    </div>
  );
}


export default MainCard