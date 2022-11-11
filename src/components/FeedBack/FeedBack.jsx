import PropTypes from "prop-types";

import { FeedbackMain, FeedbackButton } from './FeedBack.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionNames = Object.keys(options);

  return (
  <FeedbackMain>
    {optionNames.map((option, index) => (
      <FeedbackButton
        key={index}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackButton>
    ))}
  </FeedbackMain>
);
    };
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;







