import { useEffect, useState } from "react";

function BarChart({data, users}) {
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
      <div className="y_axsis">
      <h2 className="form label">{findHighest(data)}</h2>
      <h2 className="form label">{findHighest(data) / 2}</h2>
      <h2 className="form label">0</h2>
      </div>
      <div className="chart">
        {data.map((value, index) => (
          <div key={index}>
          <div
            className="bar"
            style={{ height: `${value * multiplyer}px` }}
          ></div>
          <p className="form">{users[index].username}</p>
          </div>
        ))}
        <div className="line"></div>
      </div>
    </div>
  );
}

export default BarChart;