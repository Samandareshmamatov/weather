import React from 'react'

const Header = ({handleChanger, mockLoc, submitted}) => {
  return (
    <div className="header-box">
      <h2 className="title">Weather App</h2>
      <form onSubmit={submitted} className="app-form">
        <input
          onChange={handleChanger}
          value={mockLoc}
          className="header-input"
          type="text"
          placeholder="Search location..."
        />
        <button className="btn">Search</button>
      </form>
    </div>
  );
}

export default Header;