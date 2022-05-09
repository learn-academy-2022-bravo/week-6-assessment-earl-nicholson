# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: 
  There are a couple options. As a developer I can start over and add everything up front, or make a new migration to update the attributes with a change column. I would also ensure to add belongs_to to the student model.

  Researched answer:
  As a developer I can use a command to add/change/remove a column. I would use an add column to add a foreign key to the student model called cohort_id:integer



2. Which RESTful routes must always be passed params? Why?

  Your answer: 
  The .find has to have a param. The param is part of the url route that is also the unique id 

  Researched answer:
  when referring to one specific primary key you need a param. That param is apart of the route to the data for the key that is part of the url. For example .find needs a param of (params[:id]) and when there is a number passed in the url will take you to that primary keys data



3. Name three rails generator commands. What is created by each?

  Your answer: 
  There is a generate for model, resource, and migration. Also generate can be written with g. The Model will create a table, Migration will solidify everything to that point and input it to the schema, Resource will create the model and all the routes associated with it.

  Researched answer:
  There is a generate for model, resource, and migration. The Model will create an active record with the columns that is also passed with line. 
  The Migration will solidify everything to that point and input it to the schema, and with that to update the schema further i will have to migrate again.  
  The Resource will create the model and all the routes associated with it.




4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
Index, show the entire dataset 
action: "POST"   location: /students       
Create, create a new primary key with associated data
action: "GET"    location: /students/new
New, preps the active record to have a new primary key be created 
action: "GET"    location: /students/2  
Show, show one primary key and data
action: "GET"    location: /students/2/edit    
Edit, preps a primary key to be updated be declaring a var to equal a primary key
action: "PATCH"  location: /students/2      
Update, change a specific data in the the primary key being called
action: "DELETE" location: /students/2      
Destroy, will remove a primary key and its data completely 


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


1 As a developer I can create a rails app
2 Create a database to work in
3 Run migrate
4 Generate a model called To Do List with task and status
5 Add 10 things to do model with a status of incomplete
6 Run migrate and view the schema to verify the changes
7 As a developer I can view the whole table and specific tasks
8 As a developer I can update the status as they are completed 
9 Run migrate 
10 View the updated table to verify the changes are made