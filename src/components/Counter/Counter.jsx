import PropTypes from "prop-types";

import { CounterList, CounterItem } from "./Counter.styled";

const Counter = ({good, neutral, bad, total, positivePercent}) => (
    <CounterList>
        <CounterItem>
            <span>good : {good}</span>
        </CounterItem>
        <CounterItem>
            <span>neutral : {neutral}</span>
        </CounterItem>
        <CounterItem>
            <span>bad : {bad}</span>
        </CounterItem>
        <CounterItem>
            <span>total: {total}</span>
        </CounterItem>
        <CounterItem>
            <span>Positive feedback : {positivePercent}</span> %
        </CounterItem>
    </CounterList>);

Counter.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercent: PropTypes.number.isRequired,
};
export default Counter;

    