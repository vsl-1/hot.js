
// one way

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

//usage

var first = getUrlVars()["id"];
var second = getUrlVars()["page"];
 
alert(first);
alert(second);

// second way


function getURLParameter(name) {
    return decodeURIComponent(
        (location.search.match(RegExp("[?|&]"+name+'=(.+?)(&|$)'))||[,null])[1]
    );  
}

//usage

alert(getURLParameter('id'));