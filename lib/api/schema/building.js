import Hour from './hour'

const Building = `
  type Building {
    name: String
    createdAt: String
    existingRate: Int
    iceStorageRate: Int
    airCooled: Boolean
    chillerTonnage: Int
    chillerEfficiency: Int
    dualDutyCoolingChillerEfficiency: Int
    dualDutyIceMakingEfficiency: Int
    monthsCooling: Int
    savingsDownsizingPipes: Int
    savingsDownsizingPumps: Int
    savingsRoundDuctwork: Int
    additionalCostsIceStorageInstallation: Int
    user: String,
    hours(building: String): [Hour]
  }
`;

export default () => [Building];
