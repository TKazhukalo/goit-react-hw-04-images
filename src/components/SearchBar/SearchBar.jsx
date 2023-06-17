import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  
 // const [searchName, setSearchName] = useState('');
  const [inputValue, setInputValue] = useState('');



  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.searchName.value.trim();
    onSubmit(searchQuery);
    e.target.reset();
  };


  return (
    <header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton>
          <BsSearch />
        </SearchButton>
        <SearchInput
          name="searchName"
          type="text"
          id="search"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </header>
  );
};


// class SearchBar extends Component {
//   state = {
//     searchName: '', 
//     inputValue: '',
//   };

//   handleChange = e => {
//     this.setState({ inputValue: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const searchQuery = e.target.searchName.value.trim(); 
//         this.props.onSubmit(searchQuery); 
//     e.target.reset(); 
//   };

//   render() {
//     return (
//       <header>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchButton>
//             <BsSearch />
//           </SearchButton>
//           <SearchInput
//             name="searchName"
//             type="text"
//             id="search"
//             value={this.state.inputValue}
//             onChange={this.handleChange}
//           />
//         </SearchForm>
//       </header>
//     );
//   }
// }

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//export default SearchBar;