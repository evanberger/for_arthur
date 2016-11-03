const HourTemplate = `
  type HourTemplate {
    hour1: Float
    hour2: Float
    hour3: Float
    hour4: Float
    hour5: Float
    hour6: Float
    hour7: Float
    hour8: Float
    hour9: Float
    hour10: Float
    hour11: Float
    hour12: Float
    hour13: Float
    hour14: Float
    hour15: Float
    hour16: Float
    hour17: Float
    hour18: Float
    hour19: Float
    hour20: Float
    hour21: Float
    hour22: Float
    hour23: Float
    hour24: Float
  }
`;

const Template = `
  type Template {
    _id: ID
    name: String
    hours: HourTemplate
    createdAt: String
    user: String
  }
`;

export default () => [Template, HourTemplate];
