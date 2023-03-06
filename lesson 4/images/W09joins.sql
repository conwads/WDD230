
USE v_art;


-- 1. What query would be used in the code here that allows the user to see these images?

SELECT image_data FROM my_table WHERE image_id = 123;

-- 2. What query would have allowed the user to get those results? 



-- 3.  List all the artists from the artist table but only the related
-- artwork from the artwork table. We need the first and last name and artwork title. 

SELECT artist.first_name, artist.last_name, artwork.title
FROM artist
JOIN artwork ON artist.artist_id = artwork.artist_id;



USE magazine;

-- 4. List all subscriptions with magazine name, last and first name and sort alphabetically by magazine name. 

SELECT magazine.name, subscriber.last_name, subscriber.first_name
FROM subscription
JOIN magazine ON subscription.magazine_id = magazine.magazine_id
JOIN subscriber ON subscription.subscriber_id = subscriber.subscriber_id
ORDER BY magazine.name ASC;

-- 5. List all the magazines that Samantha Sanders subscribes to. 
SELECT magazine.name
FROM subscription
JOIN magazine ON subscription.magazine_id = magazine.magazine_id
JOIN subscriber ON subscription.subscriber_id = subscriber.subscriber_id
WHERE subscriber.last_name = 'Sanders' AND subscriber.first_name = 'Samantha';


-- 6. List the first 5 employees from the Customer Service Department. Put them in alphabetical order by last name.

SELECT employee.first_name, employee.last_name
FROM employee
JOIN department ON employee.department_id = department.department_id
WHERE department.name = 'Customer Service'
ORDER BY employee.last_name ASC
LIMIT 5;

-- 7.  Find out the current salary and department of Berni Genin. You can use the ORDER BY and LIMIT to get just the most recent salary.

SELECT department.name AS department, salary.salary AS current_salary
FROM employee
JOIN department ON employee.department_id = department.department_id
JOIN salary ON employee.employee_id = salary.employee_id
WHERE employee.first_name = 'Berni' AND employee.last_name = 'Genin'
ORDER BY salary.from_date DESC
LIMIT 1;
