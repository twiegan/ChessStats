## ChessStats

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
