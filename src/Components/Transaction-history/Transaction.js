import PropTypes from "prop-types";
import s from "./Transaction.module.css";

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <td className={s.bodyItem}>{type}</td>
      <td className={s.bodyItem}>{amount}</td>
      <td className={s.bodyItem}>{currency}</td>
    </>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
