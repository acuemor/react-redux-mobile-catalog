import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Filter:
    {" "}
    <FilterLink filter="SHOW_ALL">
      Todos
    </FilterLink>
    {" / "}
    <FilterLink filter="SHOW_IN_STOCK">
      En stock
    </FilterLink>
    {" / "}
    <FilterLink filter="SHOW_SOLD_OUT">
      Agotados
    </FilterLink>
  </p>
)

export default Footer