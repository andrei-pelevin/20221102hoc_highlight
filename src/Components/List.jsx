import React from "react";
import { WithUpdatedDisplay } from "./WithUpdatedDisplay";
import PropTypes from 'prop-types';

function List(props) {
    return props.list.map((item, i) => {
      switch (item.type) {
        case 'video':
          return (
            <WithUpdatedDisplay {...item} key={i} />
          );
  
        case 'article':
          return (
            <WithUpdatedDisplay {...item} key={i} />
          );
        default:
          return '';
      }
    });
  };

  List.propTypes = {
    list: PropTypes.array
  };

  export default List;