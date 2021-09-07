import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!"; 
  } else {
      try {
      const seasons = ["winter",
                    "spring",
                    "summer",
                    "autumn"];
      let month = date.getMonth();
      if (month < 5 && month > 1 ) {
        return seasons[1];
        } else if (month < 8 && month > 4 ) {
          return seasons[2];
        } else if (month < 11 && month > 7 ) {
          return seasons[3];
        } else return seasons[0];
      
      // if(!Date.parse(date)) {
      //   throw new Error("Invalid date!");
      // }
    }
    catch (error) {
      error.message = "Invalid date!";
      throw error;
    }
  }
}
