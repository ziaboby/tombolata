import { h } from "preact";
import { useCallback, useMemo, useState } from "preact/hooks";
import View from "./view";

const MAP_EVENT_KEYARROW = {
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: -9,
  ArrowDown: 9,
};

function getIndexNextFocusableNumberInCard(iCurrentNumber, diffByKey, aList) {
  const iNextNumber =
      iCurrentNumber + diffByKey > aList.length - 1
        ? iCurrentNumber + diffByKey - aList.length - 1
        : iCurrentNumber + diffByKey,
    nextNumber = aList.at(iNextNumber);

  return nextNumber
    ? iNextNumber
    : getIndexNextFocusableNumberInCard(
        iNextNumber,
        diffByKey > 0 ? 1 : -1,
        aList
      );
}

const Card = ({ dispatch, numbers, isSelected, orderIndex }) => {
  const final = useMemo(() => {
    const res = new Array(27).fill(0);
    numbers.forEach((row, index) => {
      row.forEach((number) => {
        const index2 =
          index * 9 + (number < 10 ? 0 : number == 90 ? 8 : +`${number}`[0]);
        res[index2] = number;
      });
    });
    return res;
  }, [numbers]);
  const [activeDescendant, setActiveDescendant] = useState(undefined);

  const onKeyArrowDown = useCallback(
    (event) => {
      const diffByKey = MAP_EVENT_KEYARROW[event.code];
      if (!diffByKey) {
        return;
      }
      const currentNumber = event.target.id,
        iCurrentNumber = final.indexOf(currentNumber),
        iNextNumber = getIndexNextFocusableNumberInCard(
          iCurrentNumber,
          diffByKey,
          final
        );

      document.getElementById(`${final.at(iNextNumber)}`).focus();
    },
    [final]
  );

  return (
    <div
      className="card__container"
      role="grid"
      aria-label={`Card #${orderIndex}`}
      aria-multiselectable="true"
      aria-activedescendant={activeDescendant}
    >
      <div className="card" role="row">
        <View
          numbers={final}
          dispatch={dispatch}
          isSelected={isSelected}
          setActiveDescendant={setActiveDescendant}
          onKeyArrowDown={onKeyArrowDown}
        />
      </div>
    </div>
  );
};

export default Card;
