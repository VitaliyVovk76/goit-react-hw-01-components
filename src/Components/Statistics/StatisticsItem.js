import PropTypes from "prop-types";
import s from "./Statistical.module.css";

const StatisticsItem = ({ label, percentage }) => {
  return (
    <div className={s.itemWrapper}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </div>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
