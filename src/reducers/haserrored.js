import { HAS_ERRORED } from '../actions/index';

export default function hasErrored(state = false, action) {
  switch (action.type) {
    case HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}
