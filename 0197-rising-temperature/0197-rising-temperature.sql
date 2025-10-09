/* Write your T-SQL query statement below */
select a.id
from weather a
join weather b
ON DATEDIFF(day, b.recordDate, a.recordDate) = 1

where a.temperature > b.temperature;
