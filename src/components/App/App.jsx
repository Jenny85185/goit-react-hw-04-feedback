import { useState } from 'react';
import { AppContainer } from './App.styled';
import Logo from '../Logo';
import Section from 'components/Section';
import Notification from 'components/Notification';
import FeedbackOptions from 'components/FeedBack/FeedBack';
import Counter from 'components/Counter';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const [total, setTotal] = useState(0);
  // const [positiveFeedBack, setPositiveFeedback] = useState(0);
  // const countTotalFeedback = () => {
  //   setTotal(good + neutral + bad);
  // };
  // const countPositiveFeedbackPercent=() =>
  //   setPositiveFeedback(Number(((good / total) * 100).toFixed(0)));
  // useEffect(() => {
  //   countTotalFeedback();
  //   countPositiveFeedbackPercent();
  // });

  function totalFeedback() {
    return good + neutral + bad;
  }

  function positiveFeedbackPercent() {
    return parseInt((good / totalFeedback()) * 100);
  }

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        return;
      case 'neutral':
        setNeutral(state => state + 1);
        return;
      case 'bad':
        setBad(state => state + 1);
        return;
      default:
        return;
    }
  };

  const options = { good: 'good', neutral: 'neutral', bad: 'bad' };

  return (
    <AppContainer>
      <Logo />
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics:">
        {totalFeedback() !== 0 ? (
          <Counter
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercent={positiveFeedbackPercent()}
          />
        ) : (
          <Notification message="There is no feedback now!" />
        )}
      </Section>
    </AppContainer>
  );
}

export default App;
