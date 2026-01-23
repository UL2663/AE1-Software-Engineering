[![Node.js CI](https://github.com/UL2663/AE1-Software-Engineering/actions/workflows/node.js.yml/badge.svg)](https://github.com/UL2663/AE1-Software-Engineering/actions/workflows/node.js.yml)
# Trend-Tracker 🔍📉

A repository for the development of a Trend-Tracker tool. This consists of a hosted application which utilises API calls to retrieve articles about "AI" and "Manufacturing and AI". This data is standardised and then analysed, and returned to the client in a chart.js format. This is rendered into some 'cards' which shows key figures; a pareto graph showing frequency of results over time and a radar ('spiderweb') diagram to review the distribution of topics. This will enable a busy data analysis team to understand key recent themes of AI usage, and as insights mature and the tool develops, allow for the team to stay on top of the most recent technologies and their subsequent impacts and issues. 

## 📝1.  Project Planning 

For the purposes of this project, I used feature-driven development to reduce the project into small increments. To facilitate this, I concentrated heavily on initial design to ensure all esssential features were accounted for, then articulated these features into tickets for github project planning. When developing the application, I focused on the delivery of one functional feature at a time, prioritising the order of delivery using MoSCoW. 

<img width="1125" height="596" alt="image" src="https://github.com/user-attachments/assets/a56aef38-1fc7-4136-a152-fbeea588773e" />

_Project process flow_ 

### Github Project  

For project mapping, I utilised Github Project to plan different project buckets.     

<img width="1817" height="847" alt="image" src="https://github.com/user-attachments/assets/d239c715-21fb-4d90-be07-ee6e4d75e80d" />

_Buckets used in github project_ 

#### Limitations

Although I found github project incredibly useful for tracking requirements and managing process, (especially the time tracker throughout holiday periods so that I could structure my workload, see below), some additional functionality for risk-tracking would have been really useful. 

I found the transition to using a more structured documented way of working to take up more time in the first instance than the ways of working I'm used to in my workplace (which is typically dynamic and consists of a lot of excel spreadsheets and word documents). By not formally tracking risks of the project, it felt like progress in building the application was slow-going , as I kept running into problems, changing course, but not considering the impact of adjusting structures on the wider timeline until impacts were being felt. 
To better and more proactively manage risks before they bnecome problems, more formal time-mapping (such as a WBS) would have been beneficial, as well as a risk-tracker to prompt and evaluate mitigation strategies and processes. 
    
### (Dynamic Risk Tracking)

## ✏️ 2. Design 

## Persona & Empathy Map 

These were both produced using figma templates, available at: https://www.figma.com/design/sBNGu3owQIOwrZ0DVliv8Z/Trend-Tracker-Project?node-id=0-1&t=rMATtgCv1oCFxkR7-1
         
I focused the user persona on a team-lead role, who would likely lead a weekly team meeting where a trend tracker would be used/cascaded to encourage discussion.
The below image depicts the profile part of this template.

<img width="730" height="482" alt="image" src="https://github.com/user-attachments/assets/58456a84-d3b0-499e-9952-a640330fa3d9" />

_user profile for persona of team lead__

I focused the user empathy map on a team-member role, who would be receiving the information in a weekly team meeting. Again, the below image depicts the profile part of this template.

<img width="555" height="521" alt="image" src="https://github.com/user-attachments/assets/3adc7998-6f0f-435f-98cb-6b0bd2cf10e0" />

 _User profile of a 'team member' for the empathy map_ 

By focussing on two different types of personas, I was able to better understand the elements of the tool and how they needed to satisfy different learning styles and ways of ingesting information. Understanding the scope of usage of the tool (i.e., in a 10 minute slot in a team meeting), I was able to ensure information was condensed enough to be read quickly, but still produce a meaningful result. 
I directly used the outputs of this analysis (especially the post-its) to influence what my user requirements looked like. An example of this is the output of the 'thinks and feels' part of my empathy map, which prompted ideas for future scope and emphasised simplicity in the design. 

<img width="633" height="465" alt="image" src="https://github.com/user-attachments/assets/a825fdfd-541a-4741-9702-0a13d9c73106" />

 _'Thinks and Feels' Section of the empathy map for the team member role_
     
### Draft User Requirements 
         
<img width="657" height="508" alt="image" src="https://github.com/user-attachments/assets/658ff84b-a72d-46e7-96f2-3676a1e4d1c8" />
    
_First draft of user requirements_
    
### Lo-Fi and Hi-Fi Designs 

Once I had a clearer understanding of the basic requirements for the application, I developed a low-fidelity design to guide the layout of the application, making sure to follow grid structures and element association so that the product was intuitive and easy to navigate.
        
<img width="525" height="800" alt="image" src="https://github.com/user-attachments/assets/8375d884-4ce0-4e8a-a7b5-b679bfdb2668" />
          
_low fidelity design_
         
After developing the low-fi design, I used company colours (purple and yellow) to recolour some royalty free imaging to use for button icons in my high-fidelity design of the application.  (ref) 

<img width="422" height="555" alt="image" src="https://github.com/user-attachments/assets/12ff8260-c9db-4ed1-a037-e49092c70e14" />

 _hi-fidelity design_

From this design, a third row is included to consider annualised trending for AI news, however, due to architectural limitations of the project, this was reduced to two rows of figures. 
    
### System Design 
The system design for this application was adjusted multiple times in the development process, which will be discussed in more depth along the narration of the MVP build. The initial system design was used to inform features, which were then translated into tickets. As the system design evolved and reduced over time, this meant that some details of the issues became outdated or not relevant to the final product. 

<img width="701" height="500" alt="image" src="https://github.com/user-attachments/assets/d2306b4d-d986-4d93-9c74-1c00677d0940" />

_first system diagram iteration one_
    
<img width="582" height="401" alt="image" src="https://github.com/user-attachments/assets/58fa2cf5-3426-4dae-9af6-8319d951dc1f" />

_functional system diagram iteration two_

<img width="845" height="809" alt="image" src="https://github.com/user-attachments/assets/4fe511e2-d382-470f-a799-64ebd2022e20" />

_final system diagram_    

## 🗣️ 3. MVP Build Narration

 1. Basic UI navigation functions using CSS and HTML  
 2. Source API data for feature
 3. Understand limitations of API data and reconsider system diagram (version 2) 
 4. Concentrate on hosting requirement
 5. Refactor away from python server (only previous experience with API's) to express js server
 6. Understand limitations of hosting platform (render)
 7. Reconsider system diagram again (version 3)
 8. Focus on standardisation functions using TDD
 9. Join the two api data sets together
 10. Focus on analysis functions using TDD (count and map, graph structures)
 11. Focus on Chart.JS formatting functions
 12. Rewrite server response in the following structure:
     
     fetch --> standardise --> count and map functions --> pareto analysis/radar analysis/card counts --> format outputs for response (focus on correct call order)

 13. Client-side graph rendering using chart.js 
 14. Deploy and test cycle to apply css formatting

## 🚚 4. Testing

### Test-Driven Development 

Where appropriate, I utilised test-driven develoment (TDD), specifically for standardise functions, formatting functions and analysis functions.

I wrote tests first, committed them to the branch and then wrote the corresponding functions. 
Some functions did not require much refactoring because they were relatively basic, but for analysis functions, such as the pareto function, outputs and input data required a lot of reworking. 

*Where this could be improved* 
While tests were written first and functions written subsequently, this is not clearly evidenced in commits. Clearer RED-GREEN-REFACTOR titles would have outlined what was happening at each stage of development. The below image depicts a good example of where red-green-refactor was used but not well labelled.

<img width="874" height="405" alt="image" src="https://github.com/user-attachments/assets/e7769c8e-8f92-43d9-b369-7403d78c45ed" />

_Example of a commit chain for functions where TDD was used but poorly documented and missing some key points_

When I did utilise TDD, I found it really beneficial for bug-fixing. By having the certainty that my functions themselves were passing, issues were typically in the integration of the functions in the server, such as passing in the wrong data types (objects vs arrays), or in one unfortunate case, completely missing a format/count function that was a vital step in the process. 

### User Acceptance Testing 
To test the user requirements of my solution, I built a small survey where respondents were asked to rate how much they agreed with a statement on a scale of 1 - 10.
I collected initials and role information to depict testing across a wider range of user types. 
These results were averaged and communally discussed, with closing comments attached to the box. The format of this feedback gathering was in a working time sesison.


_Output of user survey_

From the user survey, this went well, this needs to be improved. 

### Accessibility Review using lighthouse 🚨

### Unit Testing 🚨

## 🔨 5. CI/CD 

### Node CI process setup. 
To setup a node CI action, I had to change the path for the working directory to point to my /backend file, where my package-lock.json file is held. 
Because I hadn't also redirected the cache to this directory, for the first few days of using actions, all build files failed and it looks like mthe project was very broken.
However, once I had included this line of code, the action provided a platform to run end-to-end pushes and testing, and provided better visual management of the status of my project (with badges and ticks/crosses when something failed). 

**what I would do differently:**

This should have been implemented as soon as I started doing test driven development. This would have enabled much faster troubleshooting with integration in github, as well as providing a clearer timeline of development (describing red - green - refactor with more accuracy). 


## 👤 6. User Documentation 

The application contains the following interactive features:
- 
- An 'Explore AI and Manufacturing' button and an 'Explore AI' button
- Graphs that can be hovered over

**Clicking the 'Explore' buttons**

The page will scroll down to some charts that are generated. 

**Hovering over graphs**
Figures will appear corresponding to the data point your cursor is hovering over.
 
1. Select an 'explore button' 
    
    <img width="625" height="350" alt="image" src="https://github.com/user-attachments/assets/2ebdc1aa-7bec-47bd-a5e3-7ed6923bfcdc" />
    _Intial load screen_
    
2. Explore charts from the past week and past month 
    
    <img width="625" height="350" alt="image" src="https://github.com/user-attachments/assets/9b7cffd1-1ff9-4f0d-aae8-a626980544c5" />
    _Graph screen_


## 🛠️ 7. Technical Documentation  >

Technical Requirements: 

 - Server hosting platform 
 - Server side processing of data
 - Client side rendering of graphs 

Critical Node Packages: 
 
 - Express for server responses
 - Jest for testing  
 - Chart.js for client side rendering of graphs

(Optional) Dependencies: 

- Nodemon for testing initial server setup

To run the application: 

 - ensure Node and NPM is installed
 - Clone this repository
 - Make sure you're in the **backend** directory 
 - Run unit tests using npm test
 - start the server using npm start

Directory structure:

Render Server: 
API-key secrets 
Technical limitations 

API Limitations: 


## 📑 8. Evaluation 

The project fulfills the critical requirements for the Trend Tracker as set out in the system design, but has much potential for improvement and richer metrics with some simple additions.

Some key areas to improve include earlier implementation of CI/CD pipelines - these were incredibly useful once they were implemented, which was at a very late stage in the project. 

System design was heavily restricted by API-specific vendor restrictions. The extent of this restriction prompted a lot of work-around ideating, which ultimately took more time away from actual deevelopment and led to out-of-scope requirements being added and subsequently removed/
Better risk tracking of this would have been incredibly useful here, so that I could have had a more value-add approach to testing. 

Test driven development, where used, was useful for building dependent functions but poorly documented.

Standard Software Development practices were not followed in there being multiple branches per ticket - which was mostly due to my unfamiliarity with github.

Overall, the project represents a concerted attempt at fulfilling the proposal, and has produced a functioniung framework with several opportunities for expansion, by implementing stronger pagination for the api's in use and potentially standardising data from other free-to-use API's. On top of this, implementing file caching would improve performance and follow standard architecture for a type of solution like this. One of the key oppotunities for improvement in the product is establishing a database, so that processed API data could be stored and trended over time. This could produce really powerful outputs for the team to understand, and potentially reduce the risk of too many api-calls being activated if many users use the app. 

Along these lines, coding 'fail-safes' (accounting for errors) are limited in my functions, increasing the likelihood for broken code in future, for example if the API output format changes without notice or the API-key expires. 
