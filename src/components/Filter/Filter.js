import React from 'react';
// import propTypes from 'prop-types';
import './Filter.css';

const Filter = ({ value, onChange }) => (
  <label className="filter__label">
    <h3 className="filter__title">Find contacts by name</h3>
    <input
      className="filter__input"
      type="text"
      name="filter"
      value={value}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={onChange}
    />
  </label>
);

// class Filter extends Component {
//   state = {
//     filter: '',
//   };

//   handleChenge = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });

//     console.log(this.state.filter);
//   };

//   render() {
//     return (
//       <label className="filter__label">
//         <h3 className="filter__title">Find contacts by name</h3>
//         <input
//           className="filter__input"
//           type="text"
//           name="filter"
//           value={this.state.filter}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={this.handleChenge}
//         />
//       </label>
//     );
//   }
// }

export default Filter;

// Filter.propTypes = {};
