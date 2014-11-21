=======
RoboJS
======

<b>RoboJS<b> is a tool which inspires kids to learn javascript.  Children can practices challenges with basic javascript skills. Rupert The Robot responds to commands given to him via wifi from the web app console.


View the actual site here - http://stormy-eyrie-7388.herokuapp.com

Code for the Robot can be found here - https://github.com/JackMarx/robotRupert

![alt tag](http://image.bayimg.com/4171e89c224584a41c557a9288f97de88de5feb4.jpg)


## Sample Screenshots

![splash](http://i.imgur.com/et6rw9z.png)
![challenge](http://i.imgur.com/bbnbM07.png)
![profile](http://i.imgur.com/lK5MHXE.png)


## System Requirements

- Ruby 2.0.0 p-481
- Rails 4.1.6
- Postgres 0.17.1
- Internet access



## External APIs and Libraries

<b>Ruby Spark</b> - ver. 1.0.0

A Ruby wrapper for the Spark REST API. Loosely based on ActiveResource to provide models to interact with remote services.

- API: https://github.com/sparkapi/spark_api
- Docs: http://sparkplatform.com/docs/overview/api



<b>Ace Rails</b> - ver. 1.0.1

Integrates jquery-ace plugin to Rails.

- API: https://github.com/cheef/jquery-ace-rails
- Docs: http://cheef.github.io/jquery-ace/




## Getting Started

1. Clone to local machine: <tt>git clone https://github.com/JackMarx/RoboJS.git</tt>
2. Install dependencies: <tt>bundle</tt>
3. Initialize database: <tt>rake db:setup</tt>
4. Run server: <tt>rails s</tt>
5. Visit http://localhost:3000


## Workflow

<em>As a collaborator on this project, I hold myself to high standard of code, commit often, and never push to the master branch.</em>

1. Starting out, or if using a new development workstation:

   <tt>git clone https://github.com/JackMarx/RoboJS.git</tt>


2. Create new branch for the feature you're working on:

   Branch Naming: list the feature and then what specific you are working on. Separate all words with dashes. 

   <tt>git checkout -b motors-add-shield</tt>

3. To bring the local code base up-to-date, first checkout master branch:

   <tt>git checkout master</tt>

4. Pull in the latest code from the master branch:

   <tt>git pull origin master</tt>

5. Then switch back to your feature branch before merging code from master:

   <tt>git checkout motors-add-shield</tt>

6. Now merge the updated master branch code into your current feature branch:

   <tt>git merge master</tt>

7. Now you may work on the code for your feature branch. COMMIT OFTEN.

8. When you are ready to submit code to the project repo, go ahead and commit one more time. First include files that were changed:

   <tt>git add .</tt>

9. Then commit the changes you've made:

   <tt>git commit -m "I made Robot Rupert's eyes blue"</tt>

10. Repeat step <b>3 through 6</b> to ensure your code base is up-to-date with any changes to master that might have occured in the time you were working on your feature branch. Solve conflicts if present.

11. Push your code to your remote feature branch:

    <tt>git push origin motors-add-shield</tt>

12. Submit a pull request on Github for code review.


## Running the Test Suite

<tt>rspec</tt>

## Brought to You By
![alt tag](http://image.bayimg.com/62e6a5ac1b5b4318ab6ad596d86a5a2e05b8ad60.jpg)

**Megan:** https://github.com/MissAndry  
**Christian:** https://github.com/ChristianStanfield  
**Perry:** https://github.com/peryanderson  
**Josh:** https://github.com/JackMarx  

## More photos just for fun
![alt tag](http://image.bayimg.com/4c50560dfa7f1e021c5662373f65cc149416e678.jpg)
![alt tag](http://image.bayimg.com/cc8942f4170a90fb9f775b0e2f22b7a8db5bc00d.jpg)
![alt tag](http://image.bayimg.com/c1643ba629dd2c3754ff1a3c37158b78cff2a2d1.jpg)
![alt tag](http://image.bayimg.com/1b2817dddaeca1146c174b5549e861335d422b36.jpg)
![alt tag](http://image.bayimg.com/6def04cee75def3aac3207d311eb788383e5ae1d.jpg)
