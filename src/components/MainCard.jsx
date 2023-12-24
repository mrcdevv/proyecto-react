import { Link } from 'react-router-dom';

function MainCard(props) {
  return (
    <div className='inline-block mx-[2%] my-[2%] p-1 text-center max-w-[18.4%]'>
      <Link to='/'>
        <div className='relative'>
          <img src={props.image} alt={props.title} className='rounded-md' />
          <span className='absolute bottom-0 right-0 bg-[#248dea] px-[6px] py-[2px] rounded-[4px]'>2023</span>
        </div>
        <span className='text-sm'>{props.title}</span>
      </Link>
    </div>
  );
}


export default MainCard