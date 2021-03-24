# Performance Challenge

Todoist API Performance Test with Artillery.

The purpose of these tests involves the API task module of the Todoist website. The tests were done on the following scenarios:

- Create a new task
- Create several tasks
- Get an active task
- Get active tasks
- Update a task
- Change a task status to 'complete'
- Reopen a task
- Delete a task

## Installation and execution:

Download the zip, unzipped the content, open your favorite IDE and open the project folder. Once inside, open a new terminal and type:
```
npm install artillery
```

Also, install the faker.js plugin:
```
npm install artillery-plugin-faker
```

Don't forget to export your personal token from the Todoist app. Once you have your token, just type in the terminal:
```
export TOKEN="your_token"
```

Now, you are set up to run all the performance test. Run in the terminal:
```
npm run test
```
This command will initialize all the performance test, and will create a report.html in the reports folder of the project. A report is also included in case you don't want to run the test. To visualize the report just open the html file on chrome and enjoy!
