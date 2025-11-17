import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filter, setFilter }) => {
  const handleFilterChange = (name, value) => {
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilter({
      status: '',
      priority: '',
      sortBy: 'createdAt'
    });
  };

  return (
    <div className="filter-bar">
      <h3>Filter & Sort</h3>
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="filter-status">Status:</label>
          <select
            id="filter-status"
            value={filter.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filter-priority">Priority:</label>
          <select
            id="filter-priority"
            value={filter.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
          >
            <option value="">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filter-sort">Sort By:</label>
          <select
            id="filter-sort"
            value={filter.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          >
            <option value="createdAt">Date Created</option>
            <option value="dueDate">Due Date</option>
            <option value="priority">Priority</option>
          </select>
        </div>

        <button onClick={clearFilters} className="btn btn-clear">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
