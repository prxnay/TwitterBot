//This is a twitter bot that tweets a "number" as the lucky number
var Twit= require('twit');//importing the twit package

//linking the configuration(all private and Auth Keys of the user)
var config= require('./config');
var T = new Twit(config);  //console.debug(dir);

setInterval(tweetIt,1000*86400)  //re-running every 24h 

//this function tweets the tweet
function tweetIt(){
    var r=Math.floor(Math.random()*100);
    var tweet={
        status:r+' is todays lucky number.'//adding a random number so tweets again
    }
    T.post('statuses/update', tweet, tweeted); //tweeted is a callback function if ther is an error
    function tweeted(err,data,response){
        //dont really need a callback here as just tweeting but just for testing incase there is an error
        if(err){
            console.log('something went wrong');
        }
        else{
            //if successful
            console.log('Tweet Tweeted!');
        }    
    }
}