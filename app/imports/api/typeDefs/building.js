const BuildingInput = `
  input HoursInput {
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

  input BuildingInput {
    name: String
    existingRate: Int
    iceStorageRate: Int
    chillerType: String
    chillerTonnage: Int
    chillerEfficiency: Int
    ddChillerEfficiency: Int
    iceMakingEfficiency: Int
    monthsCooling: Int
    downsizeDuctSavings: Int
    downsizePipeSavings: Int
    roundDuctSavings: Int
    additionalCostsIceStorageInstallation: Int
    rebate: Int
    template: String
    standardChillerEfficiency: Int
    nonIceChillerCost: Int
    icemakingChillerCost: Int
    icebankCost: Int
    hxCost: Int
    hours: HoursInput
  }
`;

const Building = `
  type Hours {
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

  type Building {
    _id: ID
    name: String
    createdAt: String
    chillerType: String
    template: String
    standardChillerEfficiency: Int
    nonIceChillerCost: Int
    icemakingChillerCost: Int
    icebankCost: Int
    hxCost: Int
    hours: Hours
    existingRate: Int
    iceStorageRate: Int
    airCooled: Boolean
    chillerTonnage: Int
    chillerEfficiency: Int
    ddChillerEfficiency: Int
    iceMakingEfficiency: Int
    monthsCooling: Int
    downsizeDuctSavings: Int
    downsizePipeSavings: Int
    roundDuctSavings: Int
    additionalCostsIceStorageInstallation: Int
    user: String
  }
`;

export default () => [Building, BuildingInput];
