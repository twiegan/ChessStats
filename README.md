## ChessStats

Run the development server using `python chessStatsRestApi/manage.py runserver`.

The development server cannot be used to deploy to Heroku. Therefore, we
use gunicorn. To run with gunicorn locally use
`gunicorn chessStatsRestApi.wsgi:application`.

This same exact command is put into the Procfile after `web: `, which indicates
the type of worker being used. Heroku uses the Procfile to determine which command
to run to start the app.
Heroku can now be run locally using `heroku local`. Since this works correctly,
we should now deploy to heroku.

## Setup

Venv holds the denpendencies the project needs to run. However,
the actual folder itself doesn't get pushed to github, only the
names and versions of the dependicies do. This means you need to
make your own venv folder and fill it. The folder itself should
already be in `.gitignore`.

Run `python3 -m venv ./venv` from the project folder
directory to create your new venv folder.

Run `source venv/bin/activate` to activate the venv.

The command `which python` should now show a path ending in `venv/bin/python`.
This confirms that the app is now running in the venv. Additionally,
the shell prompt should now display a prefix with your venv's name.

The names and version numbers of all packages currently being used on the
project are found in `requirements.txt`.
You should be able to install the contents of this file with pip using
the command `python -m pip install -r requirements.txt`.

## To add dependencies

Be sure that you are currently running the venv using the steps
described in setup before installing a new dependency using the
command `python -m pip install <dependency>`.

If installed correctly, your new dependency name and version should be
added to the list output by `python -m pip freeze`.

This means running `python -m pip freeze > requirements.txt` will pipe
those results to `requirements.txt` and update it with the new dependency
info.

# To open our db in MySQL

Go to the app on heroku, navigate to the settings tab, and click the
'Reveal Config Vars' button. The key shown for the clearDB is of the form
'mysql://\<username\>:\<password\>@\<hostname\>/\<schema\>?reconnect=true'

Paste each of these into their repective text entries in a new connection
on MySQL workbench to connect to the database from your machine.
