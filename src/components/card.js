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
      iCurrentNumber == -1
        ? aList.findIndex((item) => item > 0)
        : iCurrentNumber + diffByKey > aList.length - 1
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

      const currentNumber = event.target.id ? +event.target.id : -1,
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
      aria-label={`Card num. ${orderIndex + 1}`}
      aria-multiselectable="true"
      aria-activedescendant={activeDescendant}
      tabindex="0"
      onKeyDown={onKeyArrowDown}
    >
      <div className="card">
        <div className="card__row" role="row">
          <View
            numbers={final.slice(0, 9)}
            dispatch={dispatch}
            isSelected={isSelected}
            setActiveDescendant={setActiveDescendant}
          />
        </div>
        <div className="card__row" role="row">
          <View
            numbers={final.slice(9, 18)}
            dispatch={dispatch}
            isSelected={isSelected}
            setActiveDescendant={setActiveDescendant}
          />
        </div>
        <div className="card__row" role="row">
          <View
            numbers={final.slice(18, 27)}
            dispatch={dispatch}
            isSelected={isSelected}
            setActiveDescendant={setActiveDescendant}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
