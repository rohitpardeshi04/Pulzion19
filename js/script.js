function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { Component, Fragment } = React;

class CountDown extends Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      remaining: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0 },

      isExpired: false });_defineProperty(this, "timer", void 0);_defineProperty(this, "distance", void 0);_defineProperty(this, "setDate",











    () => {
      const { targetDate, targetTime } = this.props,
      // Get todays date and time
      now = new Date().getTime(),
      // Set the date we're counting down to
      countDownDate = new Date(targetDate + " " + targetTime).getTime();

      // Find the distance between now and the count down date
      this.distance = countDownDate - now;

      // target date and time is less than current date and time
      if (this.distance < 0) {
        clearInterval(this.timer);
        this.setState({ isExpired: true });
      } else {
        this.setState({
          remaining: {
            days: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
            this.distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),

            minutes: Math.floor(this.distance % (1000 * 60 * 60) / (1000 * 60)),
            seconds: Math.floor(this.distance % (1000 * 60) / 1000) },

          isExpired: false });

      }
    });_defineProperty(this, "counter",

    () => {
      this.timer = setInterval(() => {
        this.setDate();
      }, 1000);
    });}componentDidMount() {this.setDate();this.counter();}

  render() {
    const { remaining, isExpired } = this.state,
    { targetDate, targetTime } = this.props;

    return (
      React.createElement(Fragment, null,
      !isExpired && targetDate && targetTime ?
      React.createElement("div", { className: "counter" },
      Object.entries(remaining).map((el, i) =>
      React.createElement("div", { key: i, className: "entry" },
      React.createElement("div", { key: el[1], className: "entry-value" },
      React.createElement("span", { className: "count top curr flipTop" }, el[1] + 1),
      React.createElement("span", { className: "count top next" }, el[1]),
      React.createElement("span", { className: "count bottom next flipBottom" }, el[1]),
      React.createElement("span", { className: "count bottom curr" }, el[1] + 1)),

      React.createElement("div", { className: "entry-title" }, el[0].toUpperCase())))) :




      React.createElement("p", { className: "alert-danger" }, "Expired")));



  }}


const app = React.createElement(CountDown, { targetDate: "Oct 25, 2021", targetTime: "18:00:00" });

ReactDOM.render(app, document.querySelector("#app"));