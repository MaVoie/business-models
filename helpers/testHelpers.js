import TreeDisplayEnum from "utils/constants/enums/TreeDisplayEnum";
import MapLabelBranchEnum from "utils/constants/enums/MapLabelBranchEnum";
import SectorsDataNameEnum from "utils/constants/enums/SectorsDataNameEnum";
import {
  initializeSolutionsByBranchIdAndHasCPFFormations,
  addMaVoieSolutionsFromSectorsReferentialByBranch,
} from "domain/solution/solutionServices";
import { getDisplayRules } from "domain/solution/rules";
import sectorsData from "utils/data/sectorsData";

/**
 * Testing if current solution IS found in the current branch WITHOUT sectors
 *
 * @param {string} labelSolution Testing solution ID
 * @param {ArrayofString} branchesIds Array of branchesIds should be found with testing solution
 * @param {Object} formation Solution informations
 * @param {Enum} key
 *
 * @returns {void}
 */
export const executeShouldFindSolutionTestCaseWithoutSectors = (
  labelSolution,
  branchesIds,
  formation,
  key = TreeDisplayEnum.formations
) => {
  branchesIds.forEach((branchId) => {
    describe(labelSolution + MapLabelBranchEnum[branchId], () => {
      it(`should display the solution as a ${key} for ${branchId}`, () => {
        const hydratedSolutions =
          initializeSolutionsByBranchIdAndHasCPFFormations(branchId, true);
        expect(hydratedSolutions[key].includes(formation)).toBeTruthy();
      });
    });
  });
};

/**
 * Testing if current solution ISN'T found in the current branch WITHOUT sectors
 *
 * @param {string} labelSolution // Testing solution ID
 * @param {ArrayofString} branchesIds // Array of branchesIds should NOT be found with testing solution
 * @param {Object} formation // Solution informations
 *
 * @returns {void}
 */
export const executeShouldNotFindSolutionTestCaseWithoutSectors = (
  labelSolution,
  branchesIds,
  formation
) => {
  branchesIds.forEach((branchId) => {
    describe(labelSolution + "Branch " + MapLabelBranchEnum[branchId], () => {
      it(`should NOT find the solution as ${TreeDisplayEnum.formations}, ${TreeDisplayEnum.suggestions} and ${TreeDisplayEnum.publicServices} in other branches`, () => {
        const hydratedSolutions =
          initializeSolutionsByBranchIdAndHasCPFFormations(branchId, true);
        expect(hydratedSolutions.formations.includes(formation)).toBeFalsy();
        expect(hydratedSolutions.suggestions.includes(formation)).toBeFalsy();
        expect(
          hydratedSolutions.publicServices.includes(formation)
        ).toBeFalsy();
      });
    });
  });
};

/**
 * Testing if current solution IS found in the current branch WITH sectors
 *
 * @param {string} labelSolution // Testing solution ID
 * @param {ArrayofString} branchesIds // Array of branchesIds should NOT be found with testing solution
 * @param {Object} formation // Solution informations
 * @param {Enum} key
 *
 * @returns {void}
 */
export const executeSolutionTestCaseWithSectors = (
  labelSolution,
  labelBranches,
  branchesIds,
  formation,
  key,
  inSectors, // true if solution should be found in sectors, false if solution should not be found in sectors
  ...sectors
) => {
  branchesIds?.forEach((branchId) => {
    sectors?.forEach((sector) => {
      describe(
        labelSolution +
          labelBranches +
          "Sector " +
          sector +
          ": " +
          SectorsDataNameEnum[sector],
        () => {
          it(`should display the solution as a ${key} for ${MapLabelBranchEnum[branchId]}`, () => {
            const hydratedSolutionsTest =
              initializeSolutionsByBranchIdAndHasCPFFormations(branchId, true);
            addMaVoieSolutionsFromSectorsReferentialByBranch(
              hydratedSolutionsTest,
              [{ aid: sector }],
              branchId,
              true // hasCPFFormations is hard coded as true
            );
            if (inSectors) {
              expect(
                hydratedSolutionsTest[key].includes(formation)
              ).toBeTruthy();
            } else {
              expect(
                hydratedSolutionsTest[key].includes(formation)
              ).toBeFalsy();
            }
          });
        }
      );
    });
  });
};

/**
 * Testing if the solutions in sectors data match with the display rules
 *
 * @param {string} labelSolution // Testing solution ID
 * @param {ArrayofString} branchesIds // Array of branchesIds should NOT be found with testing solution
 * @param {Object} formation // Solution informations
 * @param {Enum} key
 *
 * @returns {void}
 */
export const executeMatchSectorsDataWithDisplayRulesTestCase = (
  labelBranches,
  branchesIds,
  ...sectors
) => {
  branchesIds?.forEach((branchId) => {
    sectors?.forEach((sectorId) => {
      describe(
        "Match Display Rules with Sectors : " +
          labelBranches +
          "Sector " +
          sectorId +
          ": " +
          SectorsDataNameEnum[sectorId],
        () => {
          it(`the number of solutions in sectors data should match with display rules for ${MapLabelBranchEnum[branchId]}`, () => {
            const rule = getDisplayRules(branchId, sectorId);
            const { solutions } = sectorsData[sectorId];

            expect(rule.length).toEqual(solutions.length);
          });
        }
      );
    });
  });
};
