import Hour from './hour'

const BuildingInput = `
  input BuildingInput {
    name: String
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
  }
`;

const Building = `
  type Building {
    _id: ID
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
    user: String
    hours: [Hour]
  }
`;

export default () => [Building, Hour, BuildingInput];
