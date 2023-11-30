function Button(props) {
  return (
    <button className={`${props.bgcolor} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} onClick={props.onClick}> {props.name}</button >
  )
}

export default Button