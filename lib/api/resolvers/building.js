import {Buildings, Hours} from '/lib/collections';

export default {
  hours: ({_id}) => {
    return Hours.find({building: _id}).fetch()
  }
}
