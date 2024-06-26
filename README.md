# Project4
<h3>File Navigation</h3>
<ol>
    <li>ML.ipynb is where all the ML happened - from feature selection to model building and hyperparameter tuning.</li>
    <li>The cardiodisease folder is where the React application is located.</li>
    <li>The tfjs_model folder is the model that we uploaded in the React Web App</li>
</ol>

<h2> WebApp: (https://data-insiders.web.app/) </h2>

<p>The WebApp uses tensorflowjs so we can run ML predictions on the web. We also saved our csv file in AWS S3, uploaded it to Dynamo DB, and retrived the data using AWS API Gateway and Lambda function for data visualizations.</p>


<h2> Topic: Heart Disease ML Analysis  </h2>
 [Tableau Visualizations] (https://public.tableau.com/views/CardiovascularDiseaseViz/SmokesbyGender?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link)

<h3> Introduction </h3>
Cardiovascular Disease (CVD) remains a leading cause of mortality globally. Identifying individuals at risk of developing CVD is crucial for preventive interventions. This project focuses on implementing a combination of machine learning techniques, SQL queries, and Tableau visualizations to analyze CVD risk factors and predict individuals' risk levels.

Repository Contents:

<h3> Data </h3>

https://www.kaggle.com/datasets/sulianova/cardiovascular-disease-dataset/data

<h3> SQL Queries** </h3>

The SQL file comprises scripts for querying and preprocessing data from databases. These queries are essential for providing in depth insights of analyzig data.

<h3> Machine Learning Model </h3>

This section contains Python scripts implementing machine learning algorithms for CVD risk prediction. The models are trained on historical data and can be used to predict the likelihood of an individual developing CVD based on various features such as age, weight, height, blood pressure, cholesterol levels, glucose levels and levels of activity.

We tried many different machine learning models, including logistic regression, Random Forests, and decision trees. We finally decided to use a multilayer perceptron beause it had the highest validation accuracy.

<h3> Tableau Visualizations </h3>

The Tableau link contains visualization files showcasing insights derived from the data analysis. These interactive dashboards provide a comprehensive overview of CVD risk factors and predictions.

