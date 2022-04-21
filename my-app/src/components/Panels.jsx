import PropTypes from "prop-types"
import "./css/project/projects.css";

function Panels({ title, url, photo, descriptionPhoto }) {
  return (
      <div className="control-panel">
        <ul>
            <h3>{ title }</h3>
          <li>
            <a href={ url }target="_blank" rel="noreferrer">
              <img src={ photo } alt={ descriptionPhoto }  className="default-container-image"/>
            </a>
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