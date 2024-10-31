import "./style.css";

export const Star = ({ value, onSelect, glowing }) => {
  const starClass = glowing ? "rating__star rating__star--on" : "rating__star";

  const clickHandler = () => {
    onSelect(value);
  };

  return <div className={starClass} onClick={clickHandler}></div>;
};
