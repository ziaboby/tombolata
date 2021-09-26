import { h } from "preact";
import { useMemo } from "preact/hooks";
import View from "./view";

const Card = ({ dispatch, numbers, isSelected, orderIndex }) => {
  const final = useMemo(() => {
    const res = new Array(27).fill(0);
    numbers.forEach((row, index) => {
      row.forEach((number) => {
        const index2 =
          index * 9 + (number < 10 ? 0 : number == 90 ? 8 : `number`[0]);
        res[index2] = number;
      });
    });
    return res;
  }, [numbers]);

  return (
    <div
      className="card__container"
      role="grid"
      aria-label={`Card #${orderIndex}`}
      aria-multiselectable="true"
      //   aria-activedescendant
    >
      <ul className="card">
        <View numbers={final} dispatch={dispatch} isSelected={isSelected} />
      </ul>
    </div>
  );
};

export default Card;
