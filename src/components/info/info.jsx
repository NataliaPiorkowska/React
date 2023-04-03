import "./info.css";
import {
  ArrowDownward,
  ArrowUpward,
  AccessTime,
  AccountBalanceWallet,
  CreditCard,
} from "@material-ui/icons";
import chart from '../../assets/report.png';
import revenue from '../../assets/revenue.png';

export default function Info() {
  return (
    <>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Profit</span>
          <AccessTime className="typeIcon" />
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$12,628</span>
            <span className="featuredMoneyRate">
              72,80 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <AccountBalanceWallet className="typeIcon" />
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">
              -1.4 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Payments</span>
          <CreditCard className="typeIcon" />
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">
              +2.4 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="featuredItem-chart">
          <img src={chart} className="img"></img>
        </div>
        <div className="featuredItem-chart">
          <img src={revenue} className="img"></img>
        </div>
      </div>
    </>
  );
}
