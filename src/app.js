let datefns = require(`date-fns`);
window.fun = (dob) => datefns.formatDistance(new Date(), new Date(dob));