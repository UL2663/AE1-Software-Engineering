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
    

## 🚚 4. Testing

### Test-Driven Development 

### User Acceptance Testing 

### Accessibility Review using lighthouse 🚨
    

## 🔨 5. CI/CD  >
    

## 👤 6. User Documentation  >
    

## 🛠️ 7. Technical Documentation  >
    

## 📑 8. Evaluation  >
    

