import PropTypes from "prop-types"
import "./css/project/projects.css";

function ContentPanel({ title, photo, descriptionPhoto, description, urlDeploy, urlGithub }) {
  return (
    <div className="container-content-panel">
      <img src={photo} alt={descriptionPhoto} className="default-container-image" />

      <div className="content-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="buttons-content-panel">
        <a href={urlDeploy} target="_blank">
          <button type="button">
            Deploy
          </button>
        </a>

        <a href={urlGithub} target="_blank">
          <button type="button">
            Github
          </button>
        </a>
      </div>
    </div >
  );
}

ContentPanel.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.string,
  descriptionPhoto: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
}.isRequired;

export default ContentPanel;