# ChessStats

## Running the app

Run the development server locally using `python manage.py runserver`.

The development server cannot be used to deploy to Heroku.
Therefore, we use gunicorn.
To run with gunicorn locally use `gunicorn chessStatsRestApi.wsgi:application`.

This same exact command is put into the Procfile after `web: `, which indicates the type of worker being used by Heroku.
Heroku uses the Procfile to determine which command to run to start the app.
Heroku can now be run locally using `heroku local`.
If this works correctly, we should now be able to deploy to heroku remotely.

## Setup

Venv holds the dependencies the project needs to run.
However, the actual folder itself doesn't get pushed to github, only the names and versions of the dependicies do.
This means you need to make your own venv folder and fill it.
The folder itself should already be in `.gitignore`.

Run `python3 -m venv ./venv` from the project folder directory to create your new venv folder.

Run `source venv/bin/activate` to activate the venv.

The command `which python` should now show a path ending in `venv/bin/python`.
This confirms that the app is now running in the venv.
Additionally, the shell prompt should now display a prefix with your venv's name.

The names and version numbers of all packages currently being used on the project are found in `requirements.txt`.
You should be able to install the contents of this file with pip using the command `python -m pip install -r requirements.txt`.
Running this command after activating the virtual environment for the project will build all of the project dependencies in the venv folder, and keep them separate from your other projects.

## To add dependencies

Be sure that you are currently running the venv for the project using the steps described in setup before installing a new dependency using the command `python -m pip install <dependency>`.

If installed correctly, your new dependency's name and version should be added to the output of `python -m pip freeze`.

Run `python -m pip freeze > requirements.txt` pipe those results to `requirements.txt` and update it with the new dependency info.
This final step **_must_** be done before commiting and pushing to Github/Heroku or else the rest of the team won't be able to run your code and it won't deploy correctly to heroku.

## To open access our db in MySQL locally

Go to the app on heroku, navigate to the settings tab, and click the 'Reveal Config Vars' button. The key shown for clearDB is of the form `mysql://<username>:<password>@<hostname>/<schema>?reconnect=true`

Paste each of these into their repective text entries in a new connection on MySQL workbench to connect to the database from your machine.

This same process is done in `settings.py` through the use of environment variables to connect the app to the database.

## To push to Github and Heroku

There are two remote endpoints for this project.
One on Github and one on Heroku.

This means you have to run two separate commands at each push.

The first, `git push origin master`, pushes to github like normal.

The second, `git push heroku master`, pushes the code to heroku's private git repositories and redeploys the app.
Make sure that the contents of `requirements.txt` have been updated if new dependencies were added or else this redeploy will not work.
