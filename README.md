<img src="https://user-images.githubusercontent.com/53661240/166338710-8d28b0af-223b-424d-8541-1d49b8e85bfc.png" align="right" alt="Size Limit logo by Anton Lovchikov" width="300" height="195">

# ChessStats

<p>ChessStats is a statistics reporting website allowing users<br>
to submit and view data from completed chess matches.</p>

# Tools

- Frontend - Angular
- Backend - Django
- Database - MySQL
- Authentication: Self-Made

  - In order to ensure the secure storage of user credentials, a random salt is generated for every new user that is then appended to the user's password. Upon salting the password, the concatenated string is then hashed using SHA256 to a 64 Byte length using 1000 iterations to ensure that the hash is memory hard.

# Main Features

- Individual user log in and log out, stored and verified by the User table in the database.
- Clean UI allowing adding entries to the Player, Event, Opening, and Match tables.
- Retrieval and display of statistics for individual players, top players in the database, and recent matches of a user's 'followed' players.

# Database Entity-Relationship-Diagram (ERD)

![Screen Shot 2022-05-02 at 6 56 19 PM](https://user-images.githubusercontent.com/53661240/166339593-7557c5be-1ee8-43d1-9e9a-4f66eea07a34.png)

# Team Members

- Kichul Kang
- Tiger Lee
- Jason Paik
- John Werner
- Thomas Wiegand
