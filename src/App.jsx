import { useEffect, useState } from "react";
import cities from "./component/data/cities";
import Timings from "./component/timings/Timings";

function App() {

  const [date, setDate] = useState("")
  const [city, setCity] = useState("Cairo")
  const [fajr, setFajr] = useState("")
  const [dhuhr, setDhuhr] = useState("")
  const [asr, setAsr] = useState("")
  const [maghreb, setMaghrep] = useState("")
  const [isha, setIsha] = useState("")

  useEffect(() => {
    fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=2`)
    .then( res => res.json())
    .then( data => {
      setDate(data.data.date.gregorian.date);
      setFajr(data.data.timings.Fajr)
      setDhuhr(data.data.timings.Dhuhr)
      setAsr(data.data.timings.Asr)
      setMaghrep(data.data.timings.Maghrib)
      setIsha(data.data.timings.Isha)
    })
  }, [city])
  return(
    <div className="app">
      <div className="container">
        <div className="top-section">
          <div className="city">
            <h2>المدينة</h2>
            <select name="" id="" onChange={e => setCity(e.target.value)}>
              {
                cities.map((el, index) => {
                  return(
                    <option key={index} value={el.value}>{el.name}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="date">
            <h2>التاريخ</h2>
            <div className="now-date">{date}</div>
          </div>
        </div>
        <div className="timings">
          <Timings name="الفجر:" date={fajr} />
          <Timings name="الظهر:" date={dhuhr} />
          <Timings name="العصر:" date={asr} />
          <Timings name="المغرب:" date={maghreb} />
          <Timings name="العشاء:" date={isha} />
        </div>
      </div>
    </div>
  )
}

export default App;