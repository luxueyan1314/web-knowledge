export const defaultEquals = function (a, b) {
  return a === b
}

export const Compare = { 
  LESS_THAN: -1, 
  BIGGER_THAN: 1 
};
export const defaultCompare = function(a, b) { 
  if (a === b) { // {1} 
  return 0; 
  } 
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2} 
 }