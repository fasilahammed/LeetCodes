# Write your MySQL query statement below
select tweet_id 
from tweets
WHERE CHAR_LENGTH(content) > 15;