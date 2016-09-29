import Building from './building'

const Query = `
  type Query {
    buildings: [Building]
    building(id: String): Building
  }
`;

export default () => [Query, Building];
