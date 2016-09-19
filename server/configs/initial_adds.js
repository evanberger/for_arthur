import {Buildings, Hours} from '/lib/collections';

export default function () {
  if (!Buildings.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const name = `This is the building: ${lc}`;
      const createdAt = new Date();
      Buildings.insert({name, createdAt});
    }
  }

  if (!Hours.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const name = `This is the hour: ${lc}`;
      const createdAt = new Date();
      Hours.insert({name, createdAt});
    }
  }
}
