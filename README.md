# Route to Victory

## Quest Details 
#### title: Route to Victory
#### level: Intermediate
#### skills: frontend
#### dependencies: docker_localsetup


## Overview 
This quest is focused on securing private pages of Anythink using react-router-dom. The main task user will need to perform is to create a Private route component and use it for the authenticated pages like editor or settings page.


## Outline
Describe each step in the quest. 
- Step 1 [find_the_flaw]: Identify the issue in routing that allows access to the private page without authentication.
- Step 2 [guard_the_gates]: Create a Private route component to restrict access to private pages for unauthenticated users.
- Step 3 [lock_the_gates]: Use Private route component to restrict access to private pages for the unauthenticated users.


## Textbook solution
For each step, describe all actions the user needs to perform to complete the step, including links to PRs as they would need to be written to pass checks. 
Before submitting your quest for review, test your quest in snack and check the instructions you wrote. Make sure that by following these instructions, you are able to successfully complete the quest.  
### Instructions for completing the quest: 
#### Step 1 [find_the_flaw]: 
- Learning Objective: Identify which restricted pages are accessible without login and verify the issue by replicating it.
- Narrative: Product team received a complain that user can access private pages without login. Your task is to find if this issue is true and let the team know by telling atleast one restricted page that is accessible without login.
- Instructions: Make sure you are not sign in to the wesite. Now, try to explore the site and figure out which routes are accessbile without login. Once you find any page that should have restricted access message on Snack.
- How do users pass to the next step: User should find atleast one private page and send the correct keyword to Snack.
- Hints: Check the routing in App.js file or explore the wesite to find pages that should be only accessible after login.

 
#### Step 2 [guard_the_gates]:
- Learning Objective: Users will learn how to create Private route component using react-router-dom
- Narrative: Now that users know where the problem lies, they will fix it. 
- Instructions: Users will create a new file called PrivateRoute. In this component they will write logic for redirecting user to login page if they are trying to access private page and aren't logged in.
- How do users pass to the next step: A new file PrivateRoute is created in which they wrote logic for routing.
- Hints: Look into the react-router-dom lirary on how we can create Private route. User can read this example for understanding how to create private route: https://v5.reactrouter.com/web/example/auth-workflow

#### Step 3 [lock_the_gates]:
- Learning Objective: Users will use the PrivateRoute component they created for the settings and editor page.
- Narrative: They will implement the Private Route for the restricted pages to prevent unauthenticated users from accessing it.
- Instructions: In App.js file user will use PrivateRoute instead of Route for configuring route for restricted pages.
- How do users pass to the next step: User can update the Route to PrivateRoute for settings and editor page.
- Hints: Make use the PrivateRoute created in previos step to restrict the access. Make sure that you aren't able to access the private pages.
...
