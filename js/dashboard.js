const host = "https://demo.57-house.org"
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("token") !== null) {
        sessionStorage.setItem("cinqSeptToken",urlParams.get("token"))
    } 
    getSitesList()
}


function getSitesList() {
    xmlRequest(`${host}/api/feedback-get-user-websites`, "", "GET", (result) => {
        console.log(result)
    })
}



function xmlRequest(url, data, method, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Authorization', 'Bearer '+ sessionStorage.getItem("cinqSeptToken"));
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('accept', 'application/json');
    xhr.onload = (result) => {
        callback(result)
    }
    xhr.send();
}