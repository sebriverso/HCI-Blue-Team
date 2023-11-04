import React, { useState, ChangeEvent } from 'react';

const SearchBar: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex border-2 rounded p-3">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        className="flex-grow outline-none"
      />
    </div>
  );
};

export default SearchBar;
