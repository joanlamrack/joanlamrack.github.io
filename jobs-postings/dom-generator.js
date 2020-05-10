'use strict';

let joblistings = document.getElementById('joblisting');

function generateJobListing (jobListingElement, jobListingDatas) {
    let newJobListingTitle = document.getElementById("jobslistingtitle");
    newJobListingTitle.innerText = jobListingDatas.length + " Jobs Posted in Hacker News";


    for (let jobListingData of jobListingDatas) {
        generateJobItem(jobListingElement, jobListingData)
    }
}

function generateJobItem (jobListingElement, jobsData) {
    let newPostItem = document.createElement("div");   
    newPostItem.setAttribute("id", "jobsitem");

    let sideTitleDiv = document.createElement("div");
    sideTitleDiv.setAttribute("id", "titleandtime");

    newPostItem.appendChild(sideTitleDiv);

    if (jobsData.title) {
        let newElement = document.createElement("div");
        newElement.setAttribute("id", "title");

        newElement.innerText = jobsData.title;

        sideTitleDiv.appendChild(newElement);
    }

    if (jobsData.time) {
        let newElement = document.createElement("div");
        newElement.setAttribute("id", "time");

        newElement.innerText = new Date(jobsData.time * 1000).toUTCString();

        sideTitleDiv.appendChild(newElement);
    }

    if (jobsData.url) {
        let linkDiv = document.createElement("div");
        linkDiv.setAttribute("id", "sidelink")
        linkDiv.innerText = "View";

        let newElement = document.createElement("a");
        newElement.setAttribute("href", jobsData.url);
        newElement.setAttribute("id", "url");
        

        newElement.appendChild(linkDiv);
        newPostItem.appendChild(newElement);
    }

    if (jobsData.text) {
        let newElement = document.createElement("div");
        newElement.setAttribute("id", "text");
        newElement.innerHTML = jobsData.text;

        sideTitleDiv.appendChild(newElement);
    }

    jobListingElement.appendChild(newPostItem);
}

getTopHNJoBStoriesDetails().then(function (jobPostings) {
    generateJobListing(joblistings, jobPostings)
})
.catch( function (err) {
    joblistings.innerText = err;
});