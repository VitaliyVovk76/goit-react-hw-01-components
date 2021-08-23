import PropTypes from "prop-types";
import s from "./Friend.module.css";

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.card}>
      {isOnline ? (
        <span className={s.isOnline}></span>
      ) : (
        <span className={s.isOffline}></span>
      )}

      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default Friend;
