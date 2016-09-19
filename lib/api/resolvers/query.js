import {Buildings, Hours} from '/lib/collections';

export default {
  buildings: () => {
    return Buildings.find().fetch()
  },
  building: (root, {id}) => {
    return Buildings.findOne(id)
  }
}
