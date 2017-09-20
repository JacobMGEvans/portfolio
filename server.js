const EXPRESS = require('express');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static('public'));

APP.listen(PORT, function() {
  console.log(`Express server currently running on port ${PORT}`);
})
