"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  }
]

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

ReactDOM.render(
  (
    <TradingCard
      name="Balloonicorn"
      skill="video games"
      imgUrl="/static/img/balloonicorn.jpg"
    />
  ),
  document.querySelector('#balloonicorn')
);

ReactDOM.render(
  (
    <TradingCard
      name="Float"
      skill="baking pretzels"
      imgUrl="/static/img/float.jpg"
    />
  ),
  document.querySelector('#float')
);

ReactDOM.render(
  (
    <TradingCard
      name="Seedpy"
      skill="baking cookies"
      imgUrl="/static/img/seedpy.jpg"
    />
  ),
  document.querySelector('#seedpy')
);

ReactDOM.render(
  (
    <TradingCard
      name="Merge"
      skill="eating ice cream"
      imgUrl="/static/img/merge.jpg"
    />
  ),
  document.querySelector('#merge')
);

