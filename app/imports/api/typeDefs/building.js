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
    existingRate: String
    iceStorageRate: String
    chillerType: String
    chillerTonnage: String
    chillerEfficiency: Float
    ddChillerEfficiency: Float
    iceMakingEfficiency: Float
    monthsCooling: Float
    downsizeDuctSavings: Float
    downsizePipeSavings: Float
    roundDuctSavings: Float
    additionalCostsIceStorageInstallation: Float
    rebate: Float
    template: String
    standardChillerEfficiency: Float
    nonIceChillerCost: Float
    icemakingChillerCost: Float
    icebankCost: Float
    hxCost: Float
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
    standardChillerEfficiency: Float
    nonIceChillerCost: Float
    icemakingChillerCost: Float
    icebankCost: Float
    hxCost: Float
    hours: Hours
    rebate: Float
    existingRate: String
    iceStorageRate: String
    airCooled: Boolean
    chillerTonnage: String
    chillerEfficiency: Float
    ddChillerEfficiency: Float
    iceMakingEfficiency: Float
    monthsCooling: Float
    downsizeDuctSavings: Float
    downsizePipeSavings: Float
    roundDuctSavings: Float
    additionalCostsIceStorageInstallation: Float
    user: String
  }
`;

export default () => [Building, BuildingInput];
