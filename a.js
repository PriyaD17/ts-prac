"use strict";
function nestedfunc(fn) {
    setTimeout(fn, 1000);
}
;
nestedfunc(() => {
    console.log("hi there");
});
