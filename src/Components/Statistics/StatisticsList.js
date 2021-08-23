import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem";
import s from "./Statistical.module.css";

const StatisticsList = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 class="title">{title}</h2>}

      <ul className={s.statList}>
        {stats.map((stat) => (
          <li className={s.item} key={stat.id}>
            <StatisticsItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default StatisticsList;
