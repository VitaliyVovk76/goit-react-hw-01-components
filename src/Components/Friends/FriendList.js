import Friend from "./Friend";
import PropTypes from "prop-types";
import s from "./Friend.module.css";

const FriendList = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <li className={s.item} key={item.id}>
          <Friend
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
