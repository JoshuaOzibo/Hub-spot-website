
interface buttonValues {
    value: string,
    className: string,
}

const Button = function({value, className}: buttonValues) {
  return (
    <button className= {`${className} rounded-lg transition-all duration-300 border-2 border-[#ff5c35] text-sm`}>{value}</button>
  )
}

export default Button;
