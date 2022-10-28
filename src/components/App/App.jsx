import { Component } from 'react';
import { AppContainer } from './App.styled';
import Logo from '../Logo';
import Section from 'components/Section';
import Notification from 'components/Notification';
import FeedbackOptions from 'components/FeedBack/FeedBack';
import Counter from 'components/Counter';

class App extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercent = () =>
    this.countTotalFeedback()
      ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
      : 0;

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const names = Object.keys(this.state);

    return (
      <AppContainer>
        <Logo />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={names}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics:">
          {this.countTotalFeedback() ? (
            <Counter
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercent={this.countPositiveFeedbackPercent()}
            />
          ) : (
            <Notification message="There is no feedback now!" />
          )}
        </Section>
      </AppContainer>
    );
  }
}
export default App;
