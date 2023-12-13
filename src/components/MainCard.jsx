import { Link } from 'react-router-dom';

function MainCard(props) {
  return (
    <Link to='/' className='inline-block w-1/5 mx-1.5 my-4 p-1 bg-[#080f28] text-white text-center'>
      <img src={props.image} alt={props.title} className='rounded-md' />
      <span>{props.title}</span>
    </Link>
  );
}


export default MainCard