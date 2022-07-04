import TreeDisplayEnum from "utils/constants/enums/TreeDisplayEnum";

/**
 * Getting Value from the filter by key (sectors , searchable , branches ... )
 *
 * @param {string} filter the property filter of the solution
 * @param {enum: SolutionsFilterEnum} key specify the type of filter applied
 * @returns {string} the value of the filter defined in solution  by the key SolutionsFilterEnum
 */
export function getSolutionFilterValue(filter, key) {
  let valueFilter = null;
  filter?.split("&")?.forEach((elementFilter) => {
    const arrayFilter = elementFilter.split(key + ":");
    if (arrayFilter.length > 1 && arrayFilter[1].includes(",")) {
      valueFilter = arrayFilter[1].split(",");
    } else if (arrayFilter.length > 1) {
      valueFilter = arrayFilter[1];
    }
  });
  return valueFilter;
}

/**
 * Helper to insert Solutions in solutions Results
 *
 * @param {*} solutions the extra solutions we get from sectorsData
 * @param {object} hydratedSolutions {formations : array, suggestions: array} the final result expected to show in the solution page
 * @param {number} position the position where we want to add the list of solutions defined in sectorsData
 * @param {enum: formations || suggestions} key to specify either suggestions or solutions we want to add
 *
 */
export function insertSolutionsInSolutionsResultsByPosition(
  solutions,
  hydratedSolutions,
  position,
  key = TreeDisplayEnum.formations
) {
  if (key === null || key === undefined) {
    return;
  }
  hydratedSolutions[key] = [
    // part of the solutionsResults before the specified position
    ...hydratedSolutions[key].slice(0, position),
    // inserted solutions
    ...(solutions || []),
    // part of the solutionsResults after the specified position
    ...hydratedSolutions[key].slice(position),
  ];
}

/**
 * Helper to suffle the order of each solution
 *
 * @param {object} hydratedSolutions {formations : array, suggestions: array} the final result expected to show in the solution page
 * @param {enum: formations || suggestions} key to specify either suggestions or solutions we want to suffle
 *
 * ? Note : we use the algorithm called Fisher-Yates shuffle
 */
export function suffleOrderOfSolutions(
  hydratedSolutions,
  key = TreeDisplayEnum.formations
) {
  const solutions = hydratedSolutions[key];
  if (solutions?.length < 1) {
    return;
  }
  for (let i = solutions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements solutions[i] and solutions[j]
    [solutions[i], solutions[j]] = [solutions[j], solutions[i]];
  }
}
