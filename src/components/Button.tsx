
interface buttonValues {
    value: string,
    className: string,
}

const Button = function({value, className}: buttonValues) {
  return (
    <button className={className}>{value}</button>
  )
}

export default Button;
