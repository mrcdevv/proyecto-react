import { Link } from 'react-router-dom';

function MainCard(props) {
  return (
    <Link to='/' className="block bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
      <img src={props.image} alt={props.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{props.title}</h3>
        <p className="text-sm text-gray-700">{props.description}</p>
      </div>
    </Link>
  );
}


export default MainCard