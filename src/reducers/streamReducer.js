import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  FETCH_STREAM,
  EDIT_STREAM,
} from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STREAM || CREATE_STREAM || EDIT_STREAM:
      return { ...state, [payload.id]: payload };

    case DELETE_STREAM:
      return _.omit(state, payload);

    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, 'id') };

    default:
      return state;
  }
};
