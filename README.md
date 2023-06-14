# Progility

instructions:
The database used is postgres. you'll have to link your local postgres using the db file. Then use the sync functions in each model to create the tables. then just run the backend and the react app. To get all the features of the app when you register make sure you tick the admin box.


Description of project:
Progility is a web app that allows an admin to create a workspace and add other users to it. The admin can then create tasks, which include a title, a description, a list of requirements, a date of creation, and an estimated time the task will take.

The non-admin users only have access to the General and Personal tabs in tasks. In the General tab, they can accept tasks, and once accepted, the tasks are moved to their Personal tab. From there, they can choose to complete the task or cancel it and return it to the General tab.

The admin can see much more. They have access to the Active and Completed tabs as well. The Active tab shows which tasks have been accepted by whom, and the Completed tab shows tasks that have been completed, listed in the order of newest first.

The admin can also create tasks and choose to send them to the General Tasks section or send them directly to a user.

Finally, the admin can view the Stats page. This page displays two bar charts: one for tasks completed and one for hours completed. The bar charts can be switched to show all-time, monthly, or weekly data.

Additionally, there is a table that shows the users' all-time data.