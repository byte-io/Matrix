import { useEffect, useState } from "react";

export const Board = () => {
  const [clickedBox, setClickedBox] = useState([]);
  const [counter, setCounter] = useState(0);
  const config = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
    [13, 14, 15, 16],
  ];

  useEffect(() => {
    if (counter === 15) {
      const timeoutId = setTimeout(() => {
        const clickedBoxClone = [...clickedBox];
        clickedBoxClone.pop();
        setClickedBox([...clickedBoxClone]);
      }, 1000);
      if (!clickedBox.length) {
        clearTimeout(timeoutId);
      }
    }
  }, [clickedBox]);

  const flattenedArray = config.flat();
  const handleClick = (index) => {
    if (!clickedBox.includes(index)) {
      setCounter((prevState) => prevState + 1);
      setClickedBox((prevState) => [...prevState, index]);
    }
  };

  return (
    <div className="board" style={{ "--matrixSize": config.length }}>
      {flattenedArray.map((item, index) => {
        if (item === 6) {
          return (
            <div key={index} className={"box beforeClicked"}>
              {item}
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className={
                clickedBox.includes(index)
                  ? "box afterClicked"
                  : "box beforeClicked"
              }
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          );
        }
      })}
    </div>
  );
};
