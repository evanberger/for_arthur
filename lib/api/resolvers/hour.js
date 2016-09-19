import {Buildings, Hours} from '/lib/collections';

export default {
  building: ({building}) => {
    return Buildings.findOne({_id: building}).fetch()
  }
}
