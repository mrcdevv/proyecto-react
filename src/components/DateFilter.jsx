import { Link } from "react-router-dom"

function DateFilter(props) {
  return (
    <Link className="border-[1px] border-[#505d9e] text-[0.6875em] px-[13.5px] py-[4px] mr-[4px] mb-[4px] rounded-[4px]" to='/'>
      {props.year}
    </Link>

  )
}

export default DateFilter