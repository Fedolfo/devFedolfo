import PropTypes from "prop-types"
import "./css/project/projects.css";

function Panels({ title, onClick, photo, descriptionPhoto }) {
  return (
    <div className="control-panel">
      <ul onClick={onClick} >
        <h3>{title}</h3>
        <li>
          <img src={photo} alt={descriptionPhoto} className="default-container-image" />
        </li>
      </ul>
    </div>
  );
}

Panels.propTypes = {
  descriptionPhoto: PropTypes.string,
  photo: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}.isRequired;

export default Panels;