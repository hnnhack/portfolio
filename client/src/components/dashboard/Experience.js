import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ 
  experience, 
  deleteExperience, 
}) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="DD/MM/YYYY">{moment.utc(exp.from)}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format="DD/MM/YYYY">{moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger"
        >
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  ));
        
  return (
    experience.length === 0 ? 
    <h3 className='my-2'>No experience credentials</h3> :
  <Fragment>
      <h2 className="text-primary my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
          </tr>
        </thead>
        <tbody>
          {experiences}
        </tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);