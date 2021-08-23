import PropTypes from "prop-types";
import s from "./Social-profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.card}>
      <div className={s.description}>
        <img
          className={s.img}
          src={avatar}
          alt="Аватар пользователя"
          class="avatar"
          width="270"
          height="260"
        />
        <p className={s.name}>{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span class="label">Followers </span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views </span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes </span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;
