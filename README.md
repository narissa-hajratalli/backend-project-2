# Project Proposal - Backend Development

## Live Website
https://thecolorofcare.netlify.app/

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Complete

## Project Description
The purpose of this project is to create a full CRUD application to review different healthcare providers. The user will have the opportunity to report acts of discrimination they've experienced from providers through comments and those comments will be stored in a database and mapped to each provider. The inspiration for this appliaction is that people of color are, statistically, overlooked by providers and experience discrimination in the healthcare industry.

For the backend application, I plan to have two Mongoose models, one for providers and one for comments, and connect them through a referenced relationship.

## Time/Priority Matrix 
- [Graphic](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1596211308/Project%202%20-%20CRUD%20Application/IMG_1037_xcl0mo.jpg)

|Deliverable	| Status	| Time Spent |
| --- | :---: |  :---: | 
| Day 1: Thurs, July 30th | Project Proposal | Complete | 8hr |
| Day 2: Fri, July 31st, 2020 | Research & Development	| Incomplete	| 2 hrs |
| Day 3: Sat, August 1st, 2020 | Backend: Build server & create Mongoose models | Complete | 6 hrs |
| Day 4: Sun, August 2nd, 2020 | Backend: Complete backend, deployment, and test with Postman | Complete | 8 hrs |
| Day 5: Mon, August 3rd, 2020 | Backend: Basic frontend build & have frontend consume API | Complete | 10 hrs |
| Day 6: Tues, August 4th, 2020 | Frontend: Frontend build (mobile first) | Complete | 9 hrs |
| Day 7: Wed, August 5th, 2020 | Frontend: Hamburger menu and deploy | Complete | 3 hrs |
| Day 8: Tues, August 6th, 2020 | Frontend: Cross-browser testing and final touches  | Complete | 4 hrs |
| Day 9: Tues, August 7th, 2020 | Presentation | Complete | - |


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
| Research and Development| H | 4 hrs | 4 hrs | 4 hrs |
| Create functionality (create a new provider and add a comment) | H | 1.5 hrs | 3 hrs | 3 hrs |
| Read functionality (display all the providers and their comments) | H | 1.5 hr | 2 hrs| 2 hrs |
| Update functionality (update provider information, not previous comments) | H | 2 hrs | 2 hrs | 2 hrs |
| Destroy funcionality (delete previous comments) | H | 2 hrs | 1.5 hrs | 1.5 hrs |
| Make Mongoose model for provider | H | 1.5 hr | 1.5 hrs | 1.5 hrs |
| Make Mongoose model for comments | H | 1.5 hrs | 2 hr | 2 hrs |
| Connect provider and comments through a referenced relationship | H | 1.5 hrs | 5 hrs | 5 hrs |
| Test CRUD functionality in Postman| H | 2 hrs | 3 hrs | 3 hrs |
| Debugging| H | 4 hrs | 4 hrs | 4 hrs |
| Deployment| H | 2 hrs | 2 hrs | 2 hrs |
| Total | - | 23.5 hrs | 30 hrs | 30 hrs |


#### Post MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Make Mongoose model for Medicaid | L | 1.5 hr | -hr | -hr |
| Connect Medicaid Mongoose model to provider's model | L | 1.5 hr | -hr | -hr |
| Make Mongoose model for providers / mental health providers of color in different locations | L | 1.5 hr | -hr | -hr |
| Total | 3 hrs | -hr | -hr | -hr |

## Additional Libraries
 
 - Express: For creating the backend server
 
 - MongoDB: For creating my database that holds provider and comment information
 
 - Mongoose: For data modeling and creating schemas 
 
 - Morgan: For logging and testing
 
 - Cors: For security purposes
 
## JSON Data Example
```
    {
        "comments": [
            {
                "_id": "5f2cd1fd9d8e3b0017822b43",
                "providerid": "5f2ca3186519a800172e82fd",
                "comment": "New Comment",
                "commenterName": "Anon",
                "createdAt": "2020-08-07T04:01:01.511Z",
                "updatedAt": "2020-08-07T04:01:01.511Z",
                "__v": 0
            },
            {
                "_id": "5f2cd2679d8e3b0017822b45",
                "providerid": "5f2ca3186519a800172e82fd",
                "comment": "Another New Comment",
                "commenterName": "Anon",
                "createdAt": "2020-08-07T04:02:47.348Z",
                "updatedAt": "2020-08-07T04:02:47.348Z",
                "__v": 0
            }
        ],
        "_id": "5f2ca3186519a800172e82fd",
        "firstName": "May",
        "lastName": "Smith",
        "providerType": "MD",
        "specialty": "Psychiatry",
        "createdAt": "2020-08-07T00:40:56.753Z",
        "updatedAt": "2020-08-07T04:02:47.365Z",
        "__v": 2
    }
 ```

## Code Snippets

#### Creating both a read all and read one function for the providers model
It was necessary to have both a read one and a read all function because in order to list one provider's information, I needed to get the provider by its individual object ID.

```
// READ - list all providers
const index = async (req, res) => {
    try {
        //This queries for all the providers, waits until the query is over
        const allProviders = await Provider.find({}).populate('comments'); 
        
        //This stores the queried data as a variable, and returns it as JSON data
        res.status(200).json(allProviders);
    } 
    catch(error) {
        res.status(400).send(error);
    }
}

//READ - list one provider 
const getById = async (req, res) => {
    try {
        const oneProvider = await Provider.findById(req.params.providerid).populate('comments');
        res.status(200).json(oneProvider);
    }
    catch(error) {
        res.status(400).send(error);
    }
}
```


## Issues and Resolutions
 
#### 
Issue: Connecting my provider scheme and my comment schema so when the user creates a comment, it is correctly mapped to the right provider. My biggest issue was that although the comments were mapped correctly, they were populating with their object ID in the provider model, instead of as a string.

Resolution: I had to use objectify to turn the body of the request into an object so it could properly populate into my provider model. 

```
const objectify = mongoose.Types.ObjectId;

//CREATE - create a new comment
const create = async (req, res) => {
    try {
        
        //This turns the request body into an object
        req.body.providerid = objectify(req.body.providerid);
        
        //This waits for the user to input their comment and it is added to the body of the request
        const newComment = await Comment.create(req.body);

        //This queries for the provider's entry in the collection
        let currentProvider = await Provider.findOne({_id: req.body.providerid}).populate('comments'); 

        //This pushes the new comment into the "comments" property in the provider schema
        await currentProvider.comments.push(newComment._id);

        //This saves the comment to that provider
        await currentProvider.save();

        res.status(200).json(newComment) 
    }
    catch(error){
        res.status(400).send(error)
    }
}

```
