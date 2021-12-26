import { h } from "preact";
import View from './view'

export default ({ dispatch, numbers, isSelected }) => (<ul className="card card--tombolone">
    <View numbers={numbers} dispatch={dispatch} isSelected={isSelected} />
</ul>)