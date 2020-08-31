# Twitter_Bot
This project is an introduction into using APIs specifically twitter in this case.
The goal of this is to mimic an automated Twitter bot that can produce a tweet
on it's own, utilizing popular words gathered from tweets containing a specific keyword.
How this program works is you first provide the link to local host 5000 which is the port
that listens for output from the program. Enter the link as such: http://localhost:5000/<keyword>
with the <keyword> field being replaced by any word of your choice. Once the bot recieves the keyword,
it utilizes the Twitter API to gather live Tweet data. It searches for the keyword and produces a map 
containing the 50 most popular words that appear along with the number of times that they appear. Using this data, the 
tweet is then produced, outputing only enough characters to not exceed the length of a tweet. This functionality mimics
real life bots that can appear as real accounts on twitter. With some additional linguistic restrictions to the words
being produced, a comprehensive twitter bot can be produced that many people might even mistake for a regular Twitter user.  