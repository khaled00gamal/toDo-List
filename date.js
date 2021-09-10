
exports.getDate = getDate;
function getDate(){
    let date = new Date();
    let dayOptions = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day= date.toLocaleDateString("en-US",dayOptions);
    return day;
}

 
 