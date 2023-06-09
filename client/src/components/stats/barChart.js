import { useEffect, useState } from "react";

function BarChart({ data }) {
  const [multiplyer, setMultiplyer] = useState(1);

  useEffect(() => {
    setMultiplyer(() => {
      const top = findHighest(data);
      return 300 / top;
    });
  }, [data])

  const findHighest = (arr) => {
    let result = 0;
    for (const num of arr) {
      if (num > result) result = num;
    }

    return result;
  }

  return (
    <div className="graph">
      <h2 className="form label">{findHighest(data)}</h2>
      <div className="chart">
        {data.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${value * multiplyer}px` }}
          ></div>
        ))}
      </div>
    </div>
    
  );
}

export default BarChart;