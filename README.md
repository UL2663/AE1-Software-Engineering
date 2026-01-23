[![Node.js CI](https://github.com/UL2663/AE1-Software-Engineering/actions/workflows/node.js.yml/badge.svg)](https://github.com/UL2663/AE1-Software-Engineering/actions/workflows/node.js.yml)
# Trend-Tracker 🔍📉

Within a data analytics team in an Operations function of an organisation, the team is challenged to stay on top of incoming trends and developments in technology while also maintaining their large workload. To reduce the amount of time without looking through different news outlets to understand the latest technology, this tool offers a one page overview of statistics surrounding AI in the news.

This repository contains the development of this Trend-Tracker tool. This consists of a hosted application which utilises API calls to retrieve articles about "AI" and "Manufacturing and AI". This data is standardised and then analysed, and returned to the client in a chart.js format. This is rendered into some 'cards' which shows key figures; a pareto graph showing frequency of results over time and a radar ('spiderweb') diagram to review the distribution of topics. This will enable a busy data analysis team to understand key recent themes of AI usage, and as insights mature and the tool develops, allow for the team to stay on top of the most recent technologies and their subsequent impacts and issues. 

## 📝1.  Project Planning 

For the purposes of this project, I used feature-driven development (FDD) to reduce the project into small increments. To facilitate this, I concentrated heavily on initial design to ensure all essential features were accounted for, then articulated these features into tickets for GitHub project planning. When developing the application, I focused on the delivery of one functional feature at a time, prioritising the order of delivery using MoSCoW. 

<img width="1125" height="596" alt="image" src="https://github.com/user-attachments/assets/a56aef38-1fc7-4136-a152-fbeea588773e" />

_Project process flow_ 

### GitHub Project  

For project mapping, I utilised GitHub Project to plan different project buckets.     

<img width="1817" height="847" alt="image" src="https://github.com/user-attachments/assets/d239c715-21fb-4d90-be07-ee6e4d75e80d" />

_Buckets used in GitHub project_ 

#### Benefit of FDD and GitHub Projects

Using FDD allowed for adaptation in designed features of the application. 
Initially, an additional 'annual' endpoint was included (in issue #13 and #14), but once API response and request restrictions were better understood, these were descoped from the project. This impacted other features, such as the format of the graphs and the type of data on text cards. Because the decision was made to remove this from the scope of the project in this feature, no development had been begun on other features, meaning much of the code did not need to be refactored. GitHub projects enabled deprioritisation by being able to comment justification underneath, as well as editing tickets to strikethrough de-scoped components.

<img width="1818" height="1234" alt="image" src="https://github.com/user-attachments/assets/9f4bd9f5-5953-4c4c-8b90-e06fb38144eb" />

_Ticket #14 for the endpoint of AI and manufacturing, showing strikethrough-effect on daily and annual figures._

Daily figures were also removed due to not enough data being returned by API calls with short date parameters. 

#### Limitations

Although I found GitHub project incredibly useful for tracking requirements and managing process, (especially the 'Roadmap feature' throughout holiday periods so that I could structure my workload), some additional functionality for risk-tracking would have been beneficial. 

<img width="977" height="742" alt="image" src="https://github.com/user-attachments/assets/01dccc29-9bcb-4fa8-8ac7-a7527cc134b0" />

_GitHub Roadmap Feature_

By not formally tracking risks of the project, it felt like progress in building the application was slow-going , as I kept running into problems, changing course, but not considering the impact of adjusting structures on the wider timeline until impacts were being felt. 
To better and more proactively manage risks before they become problems, more formal time-mapping (such as a work breakdown structure) would have been beneficial, as well as a risk-tracker to prompt and evaluate mitigation strategies and processes. Better risk management would also preserve the predictability of Feature Driven Development, wherein features are developed in short and predictable iterations to provide value. 

## ✏️ 2. Design 

## Persona & Empathy Map 

These were both produced using figma templates, available at: https://www.figma.com/design/sBNGu3owQIOwrZ0DVliv8Z/Trend-Tracker-Project?node-id=0-1&t=rMATtgCv1oCFxkR7-1
         
I focused the user persona on a team-lead role, who would likely lead a weekly team meeting where a trend tracker would be used/cascaded to encourage discussion.
The below image depicts the profile part of this template.

<img width="730" height="482" alt="image" src="https://github.com/user-attachments/assets/58456a84-d3b0-499e-9952-a640330fa3d9" />

_User profile for persona of team lead_

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

From the user-experience mapping, I drafted an initial version of functional and user requirements to utilise as features for development.Most of these requirements were mapped into features according to the below traceability table:

| URS ID | Issue Number | Feature | Pull Req | Status | Justification |
|--------|--------------|---------|--------|--------|---------------|
| F1 | #4 |        Graphs and figures   | 39ddc7d | Closed | Sbility to interrogate api data              
| F2 | #5 |         Navigation buttons  | 11815c8 | Closed | Interaction and generate command
| F3 | #6 |        Text Cards           | Card functions d336783 | Closed | Easier interpretation for some audiences
| F4 | #13 |       Man AI endpoints | af2040c | closed/partially descoped | descope due to api limits
| F5 | #14 |       AI Endpoints | af2040c | Closed/partially descoped | descope due to api limits
| F8 | #8 |        Mobile/Desktop  | N/a  |  Descoped | Deprioritised due to time
| F9 | #15 |       Accessible online (hosting) | 76171d5 | Closed | assignment requirement/Accessibility               
| U1 | #9 |        Intuitive | N/A | Closed | ease of use 
| U2 | #10 |       Technical/Non-Technical | N/A | Closed | Widen audience
| U3 | #11 |       Accessible |N/A | Closed | Widen Audience
| U4 | #12 |       Performance | N/A| Closed | Poor performance would be inconvenient for user
| U5 | #2  |       Design principles | bbe4efa | Closed | Better visual ingestion of information
    
### Lo-Fi and Hi-Fi Designs 

Once I had a clearer understanding of the basic requirements for the application, I developed a low-fidelity design to guide the layout of the application, making sure to follow grid structures and element association so that the product was intuitive and easy to navigate.
        
<img width="525" height="800" alt="image" src="https://github.com/user-attachments/assets/8375d884-4ce0-4e8a-a7b5-b679bfdb2668" />
          
_low fidelity design_
         
After developing the low-fi design, I used company colours (purple and yellow) to recolour some royalty free imaging to use for button icons in my high-fidelity design of the application (undraw). 

Undraw Icons Viewable in this part of my repository: 
<img width="319" height="347" alt="image" src="https://github.com/user-attachments/assets/812d1e94-100e-40d3-9c1a-42b3c2e36d7f" />

Implementation into Figma: 
 
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

 1. Built basic UI navigation functions using CSS and HTML
 **2. Source API data for analysis**

The types of api data used were restricted by availability of data under free 'tiers' of various platforms. Ultimately, api's that provided the richest sources of data were the Guardian and GNews. GNews was included to consider articles from a wider variety of sources to reduce the level of bias in the data output. Unfortunately, this is in a ratio of 10:50 for GNews : Guardian, so the output figures are inherently heavily biased toward Guardian news content. 

**3. Understand limitations of API data and reconsider system diagram (version 1)**

One option to overcome this bias was to utilise pagination to retrieve more data from the GNews API. However, this API has a request limit of 100 articles per day. This would mean that if, for example, 10 pages of requests needed to be returned from this api, the website would only able to be loaded 10 times before the API key would become restricted for exceeding limits of the license.

To get around this, the system diagram was redesigned to consider an additional JSON file to act as a temporary database to retrieve data from, limiting the application to one instance of api data fetching, before fetching only from the JSON file, per day. I also considered implementing a database but this was prevented by hosting restrictions on render, and the scope of the application.

**4. Concentrate on hosting requirement**

This consisted of deploying a render service to host a server, which was selected for its appropriate scale for the use of the tool and lack of subscription required. 

 **5. Refactor away from python server (which was my only previous experience with API's) to express js server**

This technical misunderstanding led to the re-creation of the system diagram (version two). 
 
**6.  Understand limitations of hosting platform (render)**

Render facilitates json file hosting as a cache, but only stores volatile JSON files per session. This introduced issues such as concurrency should multiple users use the platform, and meant that trending data over time would not have been possible unless a database was used. 
The database offering on render is a free subscription service, limited to a one month trial period, which would be ultimately be defunct for trending, although usable for the purpose of a 6-week assignment. As this was surplus to scope, I recreated my system diagram to its final iteration (version three). 

8. Reconsider system diagram again (version 3)

9. Focus on standardisation functions using TDD
 10. Join the two api data sets together
 11. Focus on analysis functions using TDD (count and map, graph structures)
 12. Focus on Chart.JS formatting functions
** 13. Rewrite server response in the following structure:**
     
     fetch --> standardise --> count and map functions --> pareto analysis/radar analysis/card counts --> format outputs for response (focus on correct call order)

 14. Client-side graph rendering using chart.js 
 15. Deploy and test cycle to apply css formatting

## 🚚 4. Testing

### Test-Driven Development 

Where appropriate, I utilised test-driven development (TDD), specifically for standardise functions, formatting functions and analysis functions.

I wrote tests first, committed them to the branch and then wrote the corresponding functions. 
Some functions did not require much refactoring because they were relatively basic, but for analysis functions, such as the pareto function, outputs and input data required a lot of reworking. 

*Where this could be improved* 
While tests were written first and functions written subsequently, this is not clearly evidenced in commits. Clearer RED-GREEN-REFACTOR titles would have outlined what was happening at each stage of development. The below image depicts a good example of where red-green-refactor was used but not well labelled.

<img width="874" height="405" alt="image" src="https://github.com/user-attachments/assets/e7769c8e-8f92-43d9-b369-7403d78c45ed" />

_Example of a commit chain for functions where TDD was used but poorly documented and missing some key points_

When I did utilise TDD, I found it really beneficial for bug-fixing. By having the certainty that my functions themselves were passing, issues were typically in the integration of the functions in the server, such as passing in the wrong data types (objects vs arrays), or in one unfortunate case, completely missing a format/count function that was a vital step in the process. 

Further evidence of Test-Driven-Development can be seen in the standardiseTitle function: 

1. Write Test

<img width="1276" height="841" alt="image" src="https://github.com/user-attachments/assets/bb2fb1b7-4711-47ab-ab87-7aba3be70ea4" />

_Initial tests written_

2. Red Outputs

<img width="758" height="1236" alt="image" src="https://github.com/user-attachments/assets/0445d0cb-af45-4d50-9339-ef2d31148003" />

  _Failing functions_

<img width="802" height="1136" alt="image" src="https://github.com/user-attachments/assets/72781e12-f35a-48e4-bf25-b2442748e3e8" />

_Second Failed attempt_ 


4. Green Output

<img width="628" height="240" alt="image" src="https://github.com/user-attachments/assets/8c1ca3da-f4c2-4d33-b7b6-00a50db2c045" />

### User Acceptance Testing 
To test the user requirements of my solution, I built a small survey where respondents were asked to rate how much they agreed with a statement on a scale of 1 - 10.
I collected initials and role information to depict testing across a wider range of user types. 
These results were averaged and communally discussed, with closing comments attached to the box. The format of this feedback-gathering was in a working session over teams. 

<img width="785" height="759" alt="image" src="https://github.com/user-attachments/assets/1066d2e6-3597-4ea1-834d-5ca98dde4795" />

_Numerical results, mean and median average of scoring_

<img width="492" height="947" alt="image" src="https://github.com/user-attachments/assets/8246f227-84d1-4236-ac3d-dd2fb74234f7" />

_Closing comments by each interviewee_ 

#### Output of user survey:

From the user survey, the application scored particularly well in performance, but scored underwhelmingly in both accessibility categories. Feedback indicates that one of the main ways to improve this would be to better label charts, as well as ensure consistency in chart heights and categories. Comments agree that the project is structured well enough to be developed into a usable programme, but is not yet developed enough for its intended use. Additional commentary would also be useful surrounding how the data is collected and what it is displaying. 
For a better understanding of accessibility requirements and design adjustments (such as graphs), it would have been beneficial to conduct some prior in-person requirement elicitation, where feedback could have been applied to the figma drawings and modified before development.

### Accessibility Review using lighthouse 🚨

<img width="1097" height="1040" alt="image" src="https://github.com/user-attachments/assets/65c91f07-0e06-40bc-a0e9-4f9175fb99d0" />

_result of lighthouse report_ 

Lighthouse content loading scored the page well on performance and best practices, but scored accessibility for navigation 79/100. 

<img width="1148" height="652" alt="image" src="https://github.com/user-attachments/assets/e3e06786-5e58-4841-a576-e8625cd90af6" />

_Accessibility score feedback from lighthouse report_

Some of the feedback from this is buttons not having accessible names, which is not as applicable, as the buttons are images which use cursor changes and css transitions to indicate that they are able to be interacted with. Additional text in the 'explore' sections and changing the alt text of the buttons did not improve this score.

Feedback from a lighthouse report of a snapshot of the generated charts responded with the same feedback. 

<img width="2472" height="1258" alt="image" src="https://github.com/user-attachments/assets/af137763-e16a-4704-9ff0-84097651baab" />

_Snapshot Accessibility sore_ 

## 🔨 5. CI/CD 

### Node CI process setup. 
To setup a node CI action, I had to change the path for the working directory to point to my /backend file, where my package-lock.json file is held. 
Because I hadn't also redirected the cache to this directory, for the first few days of using actions, all build files failed and it looks like mthe project was very broken.
However, once I had included this line of code, the action provided a platform to run end-to-end pushes and testing, and provided better visual management of the status of my project (with badges and ticks/crosses when something failed). 

**what I would do differently:**

This should have been implemented as soon as I started doing test driven development. This would have enabled much faster troubleshooting with integration in GitHub, as well as providing a clearer timeline of development (describing red - green - refactor with more accuracy). 

## 👤 6. User Documentation 

To access the web-app, visit: https://trend-tracker-uggu.onrender.com/

The application contains the following interactive features:

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

Render address: https://trend-tracker-uggu.onrender.com/

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

Either access through https://trend-tracker-uggu.onrender.com/ OR: 

 - ensure Node and NPM is installed
 - Clone this repository
 - Make sure you're in the **backend** directory 
 - Run unit tests using npm test
 - start the server using npm start

Annotated Directory Structure and Functions in files :

<img width="662" height="475" alt="image" src="https://github.com/user-attachments/assets/ec8ef1eb-c794-4dc7-940c-9b21af4e697e" />
_Annotation of file directory_

<img width="287" height="227" alt="image" src="https://github.com/user-attachments/assets/ab8c718b-a469-4954-af10-7f4165d2fbdf" />
_Utils File Structure_ 

Standardise contains all functions required to standardise API outputs into the same format, so that they can be analysed (ie. name, publishedAt). 

<img width="1321" height="981" alt="image" src="https://github.com/user-attachments/assets/505d0840-e416-48ca-a196-4b7100bb7d8e" />

_Standardise Functions_

Analyse contains: 
 Tokenisation 
 Counting of tokens 
 Removing of Stopwords
 Mapping of Data to dates 
 Radar and Pareto functions 
 Selecting the Top token by count

Format contains: 
 formatting pareto values to chart.js compatible json  
 formatting radar values to chart.js compatible json 
 formatting count values to a small returned array of {token, count}
  
Preparation for analysis from both data calls (two calls per API, Weekly and Monthly date ranges): 
Weekly
-> API data retrieved from GN -> Standardised titles -> standardise Dates -> tokenize -> JOIN 
-> API data retrieved from Guardian ->  standardise titles -> tokenize -> JOIN

For Radar analysis: 
Joined data -> CountTokens (counts occurance of each token for all tokens)
-> RadarFunct (maps all tokens to categories, adding up a cumulative amount per category)
-> format_Radar (returns ChartJS-ready JSON) 

For Pareto Analysis: 
Joined data -> MapDates (maps the amount of articles to the published date) 
-> ParetoFunct (counts the cumulative percentage by each date count) 
-> format_Pareto (returns ChartJS ready pareto

Render Server: 
API-key secrets stored here
_Limitations_ 
- Spin Down after 15 minutes of inactivity means slight delay in load
- 750 Shared Hours of use per month
- PostgreSQL service availaable only for 30 days free 

API Technical Limitations: 
GNews: 10 responses per request, 100 requests per day
Guardian: 50 responses per request, 1 request per second, 500 requests per day


## 📑 8. Evaluation 

The project fulfills the critical requirements for the Trend Tracker as set out in the system design, but has much potential for improvement and richer metrics with some simple additions.

Some key areas to improve include earlier implementation of CI/CD pipelines - these were incredibly useful once they were implemented, which was at a very late stage in the project. 

System design was heavily restricted by API-specific vendor restrictions. The extent of this restriction prompted a lot of work-around ideating, which ultimately took more time away from actual development and led to out-of-scope requirements being added and subsequently removed/
Better risk tracking of this would have been incredibly useful here, so that I could have had a more value-add approach to testing. 

Test driven development, where used, was useful for building dependent functions but poorly documented.

Standard Software Development practices were not followed in there being multiple branches per ticket - which was mostly due to my unfamiliarity with GitHub.

Overall, the project represents a concerted attempt at fulfilling the proposal, and has produced a functioniung framework with several opportunities for expansion. Some of these opportunities include implementing stronger pagination for the api's in use and potentially standardising data from other free-to-use API's. On top of this, implementing file caching would improve performance and follow standard architecture for a type of solution like this. One of the key opportunities for improvement in the product is establishing a database, so that processed API data could be stored and trended over time. This could produce really powerful outputs for the team to understand, and potentially reduce the risk of too many api-calls being activated if many users use the app. 

Along these lines, coding 'fail-safes' (accounting for errors) are limited in my functions, increasing the likelihood for broken code in future, for example if the API output format changes without notice or the API-key expires. On demonstrating the application, the page started 'jittering', so there is likely a browser compatibility error or non-responsive styling element that is causing the stability of the app to be thrown. 
