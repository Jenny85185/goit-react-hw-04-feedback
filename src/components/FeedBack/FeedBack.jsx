import PropTypes from "prop-types";

import { FeedbackMain, FeedbackButton } from './FeedBack.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackMain>
    {options.map((option, index) => (
      <FeedbackButton
        key={index}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </FeedbackButton>
    ))}
  </FeedbackMain>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;







