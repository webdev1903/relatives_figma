import { CryptoData } from "../configs/data";
import "./components.css";

interface childProps {
  data: CryptoData[];
}

export default function Display({ data }: childProps) {
  return (
    <div className="container">
      {data.map((e, i) => (
        <div className="parent" key={i}>
          <div className="logo_p">
            <div className="logo">
              <img src={e.logo} />
            </div>
          </div>
          <div className="info_div">
            <p className="title">{e.title}</p>
            <div className="price_div">
              <p className="price">${e.price}</p>
              <p className={e.change.includes("+") ? "green" : "red"}>
                {e.change}
              </p>
            </div>
            <p className="title">Price</p>
            <div className="price_div">
              <p className="price">${e.TVL}</p>
            </div>
            <p className="title">TVL</p>
            <div className="pairs">
              {e.pairLogos.map((e) => (
                <img src={e} className="logos" />
              ))}
            </div>
            <p className="title">Popular pairs</p>
          </div>
        </div>
      ))}
    </div>
  );
}
