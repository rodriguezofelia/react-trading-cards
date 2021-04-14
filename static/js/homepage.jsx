"use strict";

function Homepage() {
  return (
    <div>
      <p>Welcome to the trading card site!</p>
      <a href="/cards">Click here to go to the cards page.</a>
      <img src="/static/img/balloonicorn.jpg"/>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
