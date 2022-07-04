const {
  default: TreeDisplayEnum,
} = require("utils/constants/enums/TreeDisplayEnum");
const { default: formationData } = require("utils/data/formationsData");
const { suffleOrderOfSolutions } = require("../solutionsHelper");

const label = "Util functions: solutions helper => ";

describe(label + "suffleOrderOfSolutions", () => {
  it("should return the same array if it's empty or contain only one element", () => {
    const hydratedSolutionTest1 = {
      formations: [formationData.data.f024],
      suggestions: [],
    };

    suffleOrderOfSolutions(hydratedSolutionTest1, TreeDisplayEnum.formations);

    suffleOrderOfSolutions(hydratedSolutionTest1, TreeDisplayEnum.suggestions);

    expect(
      hydratedSolutionTest1.formations.includes(formationData.data.f024)
    ).toBeTruthy();

    expect(hydratedSolutionTest1.formations.length).toEqual(1);

    expect(hydratedSolutionTest1.suggestions.length).toEqual(0);
  });

  it("should keep the shuffled solutions in the hydrated Solutions", () => {
    const hydratedSolutionTest1 = {
      formations: [
        formationData.data.f024,
        formationData.data.f004,
        formationData.data.f001,
        formationData.data.f029,
        formationData.data.f032,
        formationData.data.f010,
      ],
      suggestions: [
        formationData.data.f003,
        formationData.data.f029,
        formationData.data.f032,
      ],
    };

    suffleOrderOfSolutions(hydratedSolutionTest1, TreeDisplayEnum.formations);

    suffleOrderOfSolutions(hydratedSolutionTest1, TreeDisplayEnum.suggestions);

    [
      formationData.data.f024,
      formationData.data.f004,
      formationData.data.f001,
      formationData.data.f029,
      formationData.data.f032,
      formationData.data.f010,
    ].forEach((s) => {
      expect(hydratedSolutionTest1.formations.includes(s)).toBeTruthy();
    });

    [
      formationData.data.f003,
      formationData.data.f029,
      formationData.data.f032,
    ].forEach((s) => {
      expect(hydratedSolutionTest1.suggestions.includes(s)).toBeTruthy();
    });
  });
});
