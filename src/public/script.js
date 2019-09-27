var CONTAINER_KEY = "container_key";
var API_KEY = "api_key";
var CONTAINER_ID = "container-id";
var API_KEY_ID = "apikey";

function getItem(key) {
    return localStorage.getItem(key);
}

function setItem(key, value) {
    localStorage.setItem(key, value);
}

function displayItem(id, value) {
    document.getElementById(id).innerText = value;
}

function createNewContainer() {
    var baseURL = window.location.origin + window.location.pathname;
    axios.post(
        baseURL + 'container',
        {}
    ).then(function (response) {
        var container = response.data;
        setItem(CONTAINER_KEY, container._container);
        displayItem(CONTAINER_ID, container._container);
        setItem(API_KEY, container._apikey);
        displayItem(API_KEY_ID, container._apikey);
    }).then(function (error) {
        //TODO: Error handling
    });
}

function init() {
    const containerId = getItem(CONTAINER_KEY);
    const apikey = getItem(API_KEY);
    if (containerId && apikey) {
        displayItem(CONTAINER_ID, containerId);
        displayItem(API_KEY_ID, apikey);
    } else {
        createNewContainer();
    }
}

init();