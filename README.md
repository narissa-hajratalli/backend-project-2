# Project Proposal - Backend Development

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Incomplete
|Day 2| Working RestAPI | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches and Present | Incomplete

## Project Description
The purpose of this project is to create a full CRUD application to review different healthcare providers. The user will have the opportunity to report acts of discrimination they've experienced from providers through comments and those comments will be stored in a database and mapped to each provider. The inspiration for this appliaction is that people of color are, statistically, overlooked by providers and experience discrimination in the healthcare industry.

For the backend application, I plan to have two Mongoose models, one for providers and one for comments, and connect them through a referenced relationship.

## Time/Priority Matrix 
- [Graphic](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1596211308/Project%202%20-%20CRUD%20Application/IMG_1037_xcl0mo.jpg)

|Deliverable	| Status	| Time Spent |
| --- | :---: |  :---: | 
| Day 1: Thurs, July 30th | Project Proposal | Complete | 8hr |
| Day 2: Fri, July 31st, 2020 | Research & Development	| Incomplete	| 2 hrs |
| Day 3: Sat, August 1st, 2020 | Backend: Build server & create Mongoose models | Complete | 2 hrs |
| Day 4: Sun, August 2nd, 2020 | Backend: Complete backend, deployment, and test with Postman | Incomplete | |
| Day 5: Mon, August 3rd, 2020 | Backend: Basic frontend build & have frontend consume API | Incomplete | |
| Day 6: Tues, August 4th, 2020 | Frontend: Frontend build (mobile first) | Incomplete | |
| Day 7: Wed, August 5th, 2020 | Frontend: Hamburger menu and deploy | Incomplete | |
| Day 8: Tues, August 6th, 2020 | Frontend: Cross-browser testing and final touches  | Incomplete | |
| Day 9: Tues, August 7th, 2020 | Presentation | Incomplete | |


## MVP/Post MVP

#### MVP
- Create 2 Mongoose models for provider and comments
- Implement one relationship between provider and comments
- Create CRUD functionality (Create, Read, Update, and Destroy)
- Testing CRUD in Postman

#### Post MVP
- Create backend database for providers that accept Medicaid
- Create a database that lists providers of color and providers that speak certain languages.

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Research and Development| H | 4 hrs | -hr | -hr|
| Create functionality (create a new provider and add a comment) | H | 1.5 hrs | 3 hrs | -hr|
| Read functionality (display all the providers and their comments) | H | 1.5 hr | 2 hrs| -hr|
| Update functionality (update provider information, not previous comments) | H | 2 hrs | 2 hrs | -hr|
| Destroy funcionality (delete previous comments) | H | 2 hrs | 1.5 hrs | -hr|
| Make Mongoose model for provider | H | 1.5 hr | 1.5 hrs | -hr|
| Make Mongoose model for comments | H | 1.5 hrs | 2 hr | -hr|
| Connect provider and comments through a referenced relationship | H | 1.5 hrs | 3 hrs | -hr|
| Test CRUD functionality in Postman| H | 2 hrs | 1 hr | -hr|
| Debugging| H | 4 hrs | 2 hr | -hr|
| Deployment| H | 2 hrs | 45 mins | -hr|
| Total | 23.5 hrs | -hr | -hr | -hr |


#### Post MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Make Mongoose model for Medicaid | L | 1.5 hr | -hr | -hr |
| Connect Medicaid Mongoose model to provider's model | L | 1.5 hr | -hr | -hr |
| Make Mongoose model for providers / mental health providers of color in different locations | L | 1.5 hr | -hr | -hr |
| Total | 3 hrs | -hr | -hr | -hr |
