'use strict';

let joblistings = document.getElementById('joblisting');

function getJobsItemByIndex(index) {
    return document.getElementById("joblisting").children[index];
}

function hideShowText(index) {
    let jobsItemElement = getJobsItemByIndex(index);
    if (jobsItemElement) {
        let textElement = jobsItemElement.querySelector("#text");
        let textComputedStyle = getComputedStyle(textElement);
        let textDisplayValue = textComputedStyle.display;

        if (textElement) {
            if (textDisplayValue === "none" || textElement.style.display === "none") {
                textElement.style.display = "block";
            } else if (textDisplayValue === "block") {
                textElement.style.display = "none";
            }
        }
        
    }
    else {
        console.log('not found')
    }
    
}

function generateJobListing (jobListingElement, jobListingDatas) {
    let newJobListingTitle = document.getElementById("jobslistingtitle");
    newJobListingTitle.innerText = jobListingDatas.length + " Jobs Posted in Hacker News";


    for (let rowIndexing = 0; rowIndexing < jobListingDatas.length; rowIndexing++) {
        generateJobItem(jobListingElement, jobListingDatas[rowIndexing], rowIndexing)
    }
}

function generateJobItem (jobListingElement, jobsData, index) {
    let newPostItem = document.createElement("div");   
    newPostItem.setAttribute("id", "jobsitem");

    let sideTitleDiv = document.createElement("div");
    sideTitleDiv.setAttribute("id", "titleandtime");

    newPostItem.appendChild(sideTitleDiv);

    if (jobsData) {
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
            let textElement = document.createElement("div");
            textElement.setAttribute("id", "text");
            textElement.innerHTML = jobsData.text;

            let newElement = document.createElement("div");
            newElement.setAttribute("id", "showtext");

            let link = document.createElement("a");
            link.innerText = "View";

            newElement.onclick = function () {hideShowText(index)};
    
            newElement.appendChild(link);
            sideTitleDiv.appendChild(textElement);
            newPostItem.appendChild(newElement);
        }
    
        jobListingElement.appendChild(newPostItem);
    }
}

getTopHNJoBStoriesDetails().then(function (jobPostings) {
    generateJobListing(joblistings, jobPostings)
})
.catch( function (err) {
    joblistings.innerText = err;
});