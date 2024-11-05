import "./timings.css"

function Timings(props) {
  return(
    <div className="timing">
      <div className="name">{props.name}</div>
      <div className="date">{props.date}</div>
    </div>
  )
}

export default Timings;