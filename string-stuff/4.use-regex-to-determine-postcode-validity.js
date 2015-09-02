//Task Four - Use a regex to determine Postcode validity

var tombolapostcode = "SR1 1JR";

function valid_postcode(postcode) {
    postcode = postcode.replace(/\s/g, "");
    var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    return regex.test(postcode);
}

//This will check the post code
var isValid = valid_postcode(tombolapostcode);

if (isValid) {

    console.log("yey, this is a postcode man!");

}else {
    console.log("Dude, this is not correct man!");
}