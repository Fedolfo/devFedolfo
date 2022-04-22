import PropTypes from 'prop-types';
import './css/project/projects.css';

function Panels({ onClick, photo, descriptionPhoto }) {
  return (
    <div className="panel" onClick={onClick}>
      <img src={photo} alt={descriptionPhoto} />
    </div>
  );
}

Panels.propTypes = {
  descriptionPhoto: PropTypes.string,
  onClick: PropTypes.func,
  photo: PropTypes.string,
}.isRequired;

export default Panels;
