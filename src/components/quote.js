import './quote.css';

export default function Nav() {
  return (
    <header>
      <div>Math magicians</div>
      <div className="itemNav">
        <div><button className="btnNav" type="button">Calculator</button></div>
        <div><button className="btnNav" type="button">Quote</button></div>
      </div>
    </header>
  );
}
