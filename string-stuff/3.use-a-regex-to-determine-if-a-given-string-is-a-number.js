'use strict';

var queryNumber = function(query) {
    query = query.replace(/\s/g, ""); //gets rid of white space
    var regex = /[0-9]+/i;
    return regex.test(query);
}
