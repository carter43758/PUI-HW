**FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 

## Part 1: Website Description

Describe your website (300 words).

My website is a navigation super app designed to provide more accurate walking directions to buildings on CMU’s campus from your current location. The target audience is new students to CMU, regardless of where they live, whether that’s on campus, just off campus, or fairly far away. I do default to walking directions so in the case of someone like me (who lives up 5th Ave), the app would be less useful, as the minimum walking time to campus is 25 mins.

The super app was born out of my frustrations figuring out where buildings are once I got to campus as well as not knowing what floors I entered buildings on. Getting to class the first few weeks took longer than expected because I had to take stairs/elevators once I got inside a building. The default campus map was overly cluttered and confusing to me and Google/Apple maps led me to weird locations that weren’t accessible (like the bottom of Wean or the back of Scaife).

My website conveys the following information: your current location, the location of the most popular buildings on campus, relevant building info for the building you click, more accurate estimated walking times, and a customized link to step by step directions to the building’s coordinates in Google Maps. 

My website is interesting and engaging because it breaks down a complicated user flow into a simpler one. Seeing a map with pins of every building relative to your location helps decrease the cognitive load to create a mental model of your POIs (points of interest) on campus. Moreover, step by step directions mapped onto each POI (when you click on it) will reduce the stress and anxiety students feel about getting to class so they can focus more on doing well in class.

## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. Read the homepage description to learn more about the super app.
2. Click on start to enter the Google Maps API
3. Click on the location button to fetch your current location and receive its coordinates
4. Click on the open campus map button to enter the campus map with your current location saved
5. Click on a pin or name of the building you’d like to go to
6. Scroll to read more about the building
7. Click on “step by step directions” to launch walking directions in Google Maps

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.


1. Google Maps Geolocator API
- I chose this API to easily determine your location on screen 2. I used it as part of my javascript code (new.js) and manually recreated it from a solution in Google Maps’ platform library since a premade solution doesn’t exist for it.
- I manually coded the ability for your location coords to be saved to local storage after determining them, the popup telling you your location, and the “open campus map” button and its functionality to move you to the next screen (cited in my code).

2. Google Maps Neighborhood Discovery API
- This API served as the backbone for my site’s UI. It allowed me to store pre-made places from Google Maps using their placeID on a map with a start location and display the info about them on a click.
- I made a pre-made solution in the Maps Platform webkit and generated an API key for it, then copied that into my js and made tons of edits to allow for more visible markers in blue and red, mapping your current location, showing walking directions instead of driving, and more (all cited.
- I deleted the pre-filled info from them like photos, URLs, reviews, and descriptions of the building type from js and manually added Building Info for each building myself (seen below).

![image](https://github.com/user-attachments/assets/f6f4041c-44e0-4ea0-a697-857c5f45f51b)# 

## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Tool1 | Usage | Yes/No | Yes/No | Yes/No | Yes/No | Yes/No |
| Tool1 | Productivity | 1~7 | 1~7 | 1~7 | 1~7 | 1~7 |
| Tool2| Usage | Yes/No | Yes/No | Yes/No | Yes/No | Yes/No |
| Tool2 | Productivity | 1~7 | 1~7 | 1~7 | 1~7 | 1~7 |


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: 
  2. Tool2:
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: 
  2. Tool2:
* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. Tool1: 
  2. Tool2:

> Use patterns
* I accepted the generations when …  For example, 
  1. Tool1: this tool once suggested … and I adjusted my design according to the suggestion because … 
  2. Tool2: 
* I critiqued/evaluated the generated suggestions by … For example, 
  1. Tool1: this tool once suggested … but I modified/rejected the suggestion because … 
  2. Tool2: 


> Pros and cons of using GenAI tools
* Pros
  1. Tool1: 
  2. Tool2:
* Cons
  1. Tool1: 
  2. Tool2:


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. [ChatGPT](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) / [Gemini](https://support.google.com/gemini/answer/13743730?hl=en&co=GENIE.Platform%3DDesktop): share the anonymous link to all of your chat histories relevant to this project
2. [GitHub Copilot (VSCode)](https://code.visualstudio.com/docs/copilot/copilot-chat#:~:text=You%20can%20export%20all%20prompts%20and%20responses%20for%20a%20chat%20session%20in%20a%20JSON%20file%20with%20the%20Chat%3A%20Export%20Session...%20command%20(workbench.action.chat.export)%20in%20the%20Command%20Palette.): export chat histories relevant to this project.

---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [ ] Focus more on usability by breaking up flows into multiple screens (intro + location + neighborhood)
- [ ] Add CMU branding
- [ ] Find a way to show manually API keys in github without them crashing when I deploy
- [ ] Get unique google maps link for each query vs a static one

## Generative AI Use Plan Updates

- Have been using ChatGPT to help understand and simplify Google APIs (beyond their own explanations)
- Have used it twice to generate to code change the webpage on a button click and manually replace text from an auto-filled place (I've cited both)

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

I want to create a more accurate map for walking directions between buildings on campus and more relevant building descriptions using a Google Maps places API & jQuery. This is motivated by how hard it is to learn the different floors you enter on in buildings, the most efficient routes between them, and how they connect.

## High-Fi Prototypes

Landing Page

<img width="816" alt="Screenshot 2024-10-31 at 14 48 45" src="https://github.com/user-attachments/assets/77681ae2-f2b4-459e-a211-ea59eca93bfe">

Site Nav

<img width="799" alt="Screenshot 2024-10-31 at 14 48 37" src="https://github.com/user-attachments/assets/8d8deb92-fc82-4f19-b4b7-b482efcea578">

PDP

<img width="940" alt="Screenshot 2024-10-31 at 14 49 14" src="https://github.com/user-attachments/assets/03d91fea-9013-48cd-b3e2-4404aeabbf7f">

Step by Step

<img width="829" alt="Screenshot 2024-10-31 at 14 49 21" src="https://github.com/user-attachments/assets/9fd8a9ba-748b-4535-9854-92f36ffe2d52">

Users would move from the landing page, where the most prominent locations on campus are mapped, to a search function that allows them to enter a building from Google Maps' repository, then launch directions to that buildings and a description of it. Users would have the option to click into step by step directions if they wanted.

## Usability Test (300 words)
My usability test was overall positive, with a high usage Google Maps user. He had a lot of great feedback, most of which I implemented in my updated designs. He suggested I zoom in on the maps interface to show just the university, and not the surrounding area (including Shenley Park) to make building identification easier. He also suggested I experiment with making text size larger for this same reason, as well as improving overall visual accessibility.

He asked if it was possible to change the building selection UI to mirror the kiosks that shopping malls have to show you where a building is. I said it wasn't possible to do so if I ripped the API straight up, but decided I'll investigate the shopping mall near me when I'm home for Thanksgiving for inspiration and do some research on the APIs behind their functionality.

My user also brought up that while having shortcuts between buildings built into step by step directions is great, it might be confusing to suggest them to my user base (new students navigating around campus for the first time). He suggested I leave out the shortcuts for now and then build them in after piloting a route without it. I told him I'll have to see how much time they actually save when manually calculating routes myself, but I do think it's a valuable idea to make routes as simple as possible, even at the expense of 30 seconds or a minute of travel time, to improve overall ease of use.

Lastly, my participant brought up the idea of being able to manually add points of interest beyond campus once my initial shell is built out and functional in order to scale the API to other campuses or hot spots for students that aren't registered buildings on Google Maps (like a particular table in a building or the student basketball courts). I told him this should be possible and will consider it towards the end of the project.

## Updated Designs
New Zoom + Removed Reviews on Landing Page
![Screenshot 2024-11-03 at 20 08 12](https://github.com/user-attachments/assets/cb2b8559-6f76-4d74-b053-59b017aec6c2)

Updated Direction Flow (includes shortcuts for now)
![Screenshot 2024-11-03 at 20 24 26](https://github.com/user-attachments/assets/477f05cf-6064-4de8-974f-3508f852cc9b)

## Feedback Summary
User feedback came in in the form of questions about how I'll frame locations on the map given that Google Maps is inaccurate. I had to take some time to explain my process of manually tagging locations via pins and manually calculating distances between them using my phone - once I did, everyone understood how I would get location data to supplement what Google Maps already has.

More suggestions included adding CMUeats as a location, which I will do, as well as all possible entrances & exits of each building, which I likely won't do, as I've noticed walking paths on campus are pretty homogenized despite their being multiple ways to get to the same place thanks to all the different bridges, paths, and stairs/ramps at CMU (the quad coming to mind as a prime example). Students tend to follow each other, and I think that providing all possible options to my user base (new students that are a little lost) would overwhelm them and create decision fatigue around choosing which path to follow that ultimately delays their travel time to class, which goes against my ultimate goal of reducing how long it takes to get from their dorms to class.

Another suggestion was to build in the option to save/view past routes to save time. I liked this one and have seen it used on Apple Maps' "Create a Custom Route" feature, although I've never done so myself. I plan to experiment with it to see if I can set up a stored database of the routes I manually take myself to record steps/distance/time counts and judge if it's worth including in FP4. I've also seen this done more commonly on the AllTrails app to record hikes and bike rides in nature that go over rocky terrain and undefined paths. 

Lastly, feedback came around the inclusion of my written descriptions of how you would transition from outside to inside buildings. They said to be more specific about what floor you enter the bulding on from that specific route, which I added in my updated designs.

## Milestones
Outline weekly milestones to plan your expected implementation progress until the end of the semester (\~300 words). 

### *Implementation Plan*

- Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
- Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due
  - Pin location data of MoreWood Gardens and Wean
  - Manually track steps & distance of route using health app
  - Time route in morning then adjust for stride length to get average time
- Week 11 Nov 11 \- Nov 15:
  - Update Wean Metadata to reflect prototype screen
  - [] FP3 due - clickable prototype without step by step
- Week 12 Nov 18 \- Nov 22:
  - Begin implementing step by step interface 
- Week 13 Nov 25 \- Nov 29: Thanksgiving
  - Refine FP4 design 
- Week 14 Dec 2 \- Dec 6:  
  - [ ] FP4 due: clickable prototype with step by step for 1 route

### *Libraries and Other Components*
- J query (where necessary)
- [Google Maps Platform API](https://console.cloud.google.com/google/maps-apis/build;filters=%7B%22platformFilters%22:%5B%22WEB%22,%22ANDROID%22,%22IOS%22%5D,%22useCaseFilters%22:%5B%22SINGLE_TRIP%22,%22CURRENT_LOCATION%22,%22NEARBY_PLACES%22%5D,%22codeTypeFilters%22:%5B%5D%7D?project=pui-fp-440214)
    - Neighorbood Discovery API: Landing Page UI Shell
    - Commute API: Estimated walking times & distances
    - Convert Address to Coordinates API: for existing addresses I don't need to update
    - Convert Coordinates to Address API: for new addresses I will manually get from pins I set
    - Show Text Directions API: for step by step directions UI
    - Show Browser/Device Location API

## Generative AI Use Plan
I will use GenAI to edit code from the existing APIs and see if I can combine them into 1 file, since I plan on downloading 5-6. I also plan to use GenAI to check what I write for conciseness, organization, and functionailty.

### *Tool Use*
* ChatGPT  
  * I will use it for reviewing the Google API code because it can help me understand parts of it and where I can combine/simplify across multiple versions
  * I will also use it for comment generation to explain some parts of code I find confusing that I can drop into my JS and CSS files
  * I will not use it for generating my own starter code because it might not be able to help me with pre-set functions in Google language like "fetchDirections()" and signifiers like Walking/Driving/etc.

### *Responsible Use*
I'll use GenAI responsibly by citing my use of it at all times and not overly relying on it to make or edit my code for me. I want to challenge myself with this project and see GenAI as a means of helping that challenge, not reducing it.

---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1*
<img width="666" alt="Screenshot 2024-10-28 at 09 34 08" src="https://github.com/user-attachments/assets/3927976e-0b7a-4b83-8a97-1cd6810fa32b">
<img width="667" alt="Screenshot 2024-10-28 at 09 34 16" src="https://github.com/user-attachments/assets/036783fc-1330-474e-a706-60e48b411db0">

This idea centers around creating more accurate walking times between clasrooms that audits the Google Maps algorithm. I would manually add step data tracked from the Apple Health app (which has step and elevation data down to the second) to the existing maps directions (that take you from building to building, not classroom to classroom) and don't include the many shortcuts that are available at CMU. Upon plugging in the most popular locations (Tepper, Wean, Baker, NSH, etc), users would see more accurate walking times, which floor you enter on, and whether or not there are ramps and elevators.

For accessibilty, I would ensure walking times are approximated based on an average walking time, not just mine, and give an option to link to Google maps to do turn-by-turn. My design is more focused on giving accurate travel times and find specific rooms instead of telling you how to find a particular building or get there.

### *Idea 2*
<img width="668" alt="Screenshot 2024-10-28 at 09 34 29" src="https://github.com/user-attachments/assets/7ef95754-66b8-4d3a-8ed6-f15d3f914ff3">

My second idea is a virtual pizza parlor for CMU students that tracks pizza in nearby neighborhoods. The landing page would take users to a screen that shows a list of pizza places and their locations and scores per neighborhood. Clicking on one place would open a full-screen picture of thier pizza, my ranking, price data, and other tidbits of information I found helpful in determining my score. I'd likely use JQuery for this.

Per my feedback, I'd add a ADD button at the bottom left to allow users to input thier own scores and pictures, as well as reccomend a new pizza parlor to be added to the list that I could approve.

### *Idea 3*

…<img width="673" alt="Screenshot 2024-10-28 at 09 34 36" src="https://github.com/user-attachments/assets/60d664bd-c545-48d4-bc6b-a9cdfd9f2f21">

My last idea is a portfolio inspired by my favorite video game as a kid, Pokemon. Instead of my vertical scroll setup, I would do a "choose your starter" style design that allows the user to pick from my 3 cases displayed in pokeballs in a briefcase.

## Feedback Summary

My feedback was overall positive, with most of it coming on my first idea. One person in lab suggested I look for a specific routing algorithm to more accurately calculate step counts and walking times if I was unable to copy or adapt the Google or Apple Maps algo. Another person suggested I add in ramp, elevator, and stair descriptions for each building to accommodate those with particular accessibility concerns. Someone also floated the idea of manually adding step data from another tracker I purchase, like a FitBit or Apple Watch, that more accurately tracks steps than my phone. I did get some specific feedback on the visuals of my homescreen and that I should display the descriptions of each building in a full-bleed format instead of my design, which had it positioned on the right side of the screen next to the map with directions. Another push I got was to calculate distances for directions in miles, not minutes.

For my second idea (pizza), someone who had developed a similar idea for restaurant reviews within Pittsburgh suggested the addition of a button allowing users to input their own reviews for submission. They brought up that it would allow me to rely more on user-generated data instead of having to field it all myself, which would save time on my end for setup and allow for higher quality reviews and pictures of pizza than just what I could manage.

For my third idea, there weren't many high level suggestions and everyone was supportive of the concept. Pixi was brouguht up a few times as the JS library I could use to create the bouncing ball animations of all 3 cases, as well as the display of the title/subtitle when hovering and opening into a full-screen case when clicked.

## Feedback Digestion

None of the feedback I got I found too critical or invasive. The pizza feedback I'll gladly integrate to my design to make it more open-sourced and increase the quality of data I can get. To make it more like Yelp.

The feedback I got on my campus maps was also well appreciated - I hadn't considered the accessiblity concerns yet and will find a way to integrate them. I'll likely not choose to integrate the design changes that were suggested on how I display directions and building descriptions. I prefer to keep both together on desktop, as I'll have enough screen real estate to make each legible, and on mobile, where users will likely be walking with their phones following directions while reading about the specifics of the building they'll be entering.

Feedback I will be integrating on my first idea is buying another tracker to more accurately track step data, as well as finding a way to manually geotag classrooms using Pins on my phone to provide more specific locations than the Building locations that are currently tagged in Apple & Google Maps. I'll have to account for my average stride length and walking speed when calculating relative distances, which would affect the overall distance length for directions. That being said, I will not fully make that choice and instead choose to present them in time, not distance to make it more digestible and accessible for users. That's how map data is presented anyways.
