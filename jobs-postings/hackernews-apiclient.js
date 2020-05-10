'use strict'

function getJobHNStories () {
    return new Promise( function (resolve, reject) {
        const data = "{}";

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            console.log(this.response);
            resolve(JSON.parse(this.response));
        })


        xhr.addEventListener("error", function () {
            console.log(this.response);
            reject(this.response);
        })

        xhr.open("GET", "https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty");

        xhr.send(data);
    });
}

function getItemById (itemId) {
    return new Promise( function (resolve, reject) {
        const data = "{}";

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            console.log(this.response);
            resolve(JSON.parse(this.response));
        })


        xhr.addEventListener("error", function () {
            console.log(this.response);
            reject(this.response);
        })

        xhr.open("GET", "https://hacker-news.firebaseio.com/v0/item/" + itemId + ".json?print=pretty");

        xhr.send(data);
    });
}

function getUserById (userId) {
    return new Promise( function (resolve, reject) {
        const data = "{}";

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            console.log(this.response);
            resolve(JSON.parse(this.response));
        })


        xhr.addEventListener("error", function () {
            console.log(this.response);
            reject(this.response);
        })

        xhr.open("GET", "https://hacker-news.firebaseio.com/v0/user/" + itemId + ".json?print=pretty");

        xhr.send(data);
    });
}