-- Create table containing all the features
CREATE TABLE cardio_features (
	id INT NOT NULL,
	age INT NOT NULL,
	gender INT NOT NULL,
	height INT NOT NULL,
	weight FLOAT NOT NULL,
	ap_hi INT NOT NULL,
	ap_lo INT NOT NULL,
	cholesterol INT NOT NULL,
	gluc INT NOT NULL,
	smoke INT NOT NULL,
	alco INT NOT NULL,
	active INT NOT NULL,
	cardio INT NOT NULL
);

-- To view created table
SELECT * from cardio_features;


-- Convert age (days) to age (years).
SELECT *, age / 365 AS age_in_years
FROM cardio_features;

-- Calculate the average age of all the patients.
SELECT CAST(AVG(age / 365) AS INTEGER) AS Average_Age
FROM cardio_features;

-- Convert gender values of 1 and 2 to gender categories of women and men. 
SELECT
CASE gender
WHEN 1 THEN 'women'
WHEN 2 THEN 'men'   
END AS gender_category
FROM cardio_features;

-- Determine the count of male patients.
SELECT COUNT(*) AS num_male_patients
FROM cardio_features
WHERE gender = 2; 

--Determine the count of female patients.
SELECT COUNT(*) AS num_female_patients
FROM cardio_features
WHERE gender = 1; 

-- Determine the sum of active and inactive female patients.
SELECT CASE 
WHEN active = 0 THEN 'inactive_female_patients'
WHEN active = 1 THEN 'active_female_patients'       
END AS status,
COUNT(*) AS patients_count
FROM cardio_features
WHERE gender = 1  
GROUP BY status;

-- Convert cholesterol values of 1, 2 and 3 to 'normal', 'above normal', 'well above normal'.
SELECT
CASE cholesterol
WHEN 1 THEN 'normal'
WHEN 2 THEN 'above normal' 
WHEN 3 THEN 'well above normal'
END AS cholesterol_category
FROM cardio_features;

-- Determine the cholesterol level for each gender by count. 
SELECT CASE 
WHEN gender = 1 THEN 'women'
WHEN gender = 2 THEN 'men'
END AS gender_category, CASE 
WHEN cholesterol = 1 THEN 'Normal'
WHEN cholesterol = 2 THEN 'Above Normal'
WHEN cholesterol = 3 THEN 'Well Above Normal'
END AS cholesterol_category,
COUNT(*) AS count
FROM cardio_features
GROUP BY gender_category, cholesterol_category;

-- Determine the total number and percentage of men and women who smoke.
SELECT CASE 
WHEN gender = 1 THEN 'women'
WHEN gender = 2 THEN 'men'
END AS gender_category,
COUNT(*) AS total_count,
SUM(CASE WHEN smoke = 1 THEN 1 ELSE 0 END) AS smoking_count,
ROUND((SUM(CASE WHEN smoke = 1 THEN 1 ELSE 0 END) * 100.0) / COUNT(*), 2) AS smoking_percentage
FROM cardio_features
GROUP BY gender_category;

-- Determine which gender has the highest occurence of heart disease.
SELECT CASE 
WHEN gender = 1 THEN 'Female'
WHEN gender = 2 THEN 'Male'
END AS gender_category,
SUM(CASE WHEN cardio = 1 THEN 1 ELSE 0 END) AS number_cardio_cases
FROM cardio_features
GROUP BY gender_category
ORDER BY number_cardio_cases DESC
LIMIT 1;

-- Determine the average weight (kg) of female and male patients with cardio disease.
SELECT CASE 
WHEN gender = 1 THEN 'Female'
WHEN gender = 2 THEN 'Male'  
END AS gender_category,
AVG(weight) AS avg_weight
FROM cardio_features
WHERE cardio = 1
GROUP BY gender_category;

-- Determine the average height (kg) of female and male patients with cardio disease.
SELECT CASE 
WHEN gender = 1 THEN 'Female'
WHEN gender = 2 THEN 'Male'  
END AS gender_category,
AVG(height) AS avg_height
FROM cardio_features
WHERE cardio = 1
GROUP BY gender_category;
