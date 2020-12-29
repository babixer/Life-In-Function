/* Let's use a basic function to receive a data and to out put that data in different forms */

function lifeInWeeks(a) {

    /* First I'm declaring a variable and using prompt to receive a persons age  */

    var a = prompt("Put down .your age");

    /* Let's assume that person is going to live upto the age of 90 */

    var x = 90 - a;
    var y = (90 * 52) - (a * 52);
    var z = (90 * 365) - (a * 365);


    /* At last I'm using alert to send a reply, adding a string to the variables output*/

    alert("You have " + x + " years " + y + " weeks " + z + " days left to live");



}

lifeInWeeks();