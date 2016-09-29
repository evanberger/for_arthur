import {Buildings, Hours} from '../../collections';

export default {
  buildings: () => {
    return Buildings.find().fetch()
  },
  building: (root, {id}) => {
    return Buildings.findOne(id)
  }
}
