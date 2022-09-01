'use strict';

function getTopHNJoBStoriesDetails () {
    return new Promise( function (resolve, reject) {
        getJobHNStories()
        .then(function (arrayOfStoryIds) {
            const arrayOfPendingRequest = arrayOfStoryIds.map( function (storyId) {
                return getItemById(storyId);
            });
            return Promise.all(arrayOfPendingRequest);
        })
        .then(resolve)
        .catch(reject);
    })
}