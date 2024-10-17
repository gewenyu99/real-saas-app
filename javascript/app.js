import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const ifLogin = Math.random() < 0.8;

  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Login - SaaS App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f4f4f4;
                }
                .login-container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width: 300px;
                    text-align: center;
                }
                .login-container h1 {
                    margin-bottom: 20px;
                }
                .login-container input {
                    width: 100%;
                    padding: 10px;
                    margin: 10px 0;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                .login-container button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007BFF;
                    border: none;
                    color: #fff;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .login-container button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="login-container">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" required>
                    <input type="password" placeholder="Password" required>
                    ${ifLogin ? '<button type="submit">Login</button>' : ""}
                </form>
            </div>
        </body>
        </html>
    `);
});

app.get("/user/:id", (req, res) => {
  const canSeeUser = Math.random() < 0.8;
  const seeCorrectUser = Math.random() < 0.7;
  const userId = seeCorrectUser ? req.params.id : 1234;

  console.log("canSeeUser", canSeeUser);
  if (!canSeeUser) {
    res.status(404).send("User not found");
    return;
  }
  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>User - SaaS App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f4f4f4;
                }
                .user-container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width: 300px;
                    text-align: center;
                }
                .user-container h1 {
                    margin-bottom: 20px;
                }
                .user-container p {
                    margin: 10px 0;
                }
            </style>
        </head>
        <body>
            <div class="user-container">
                <h1>User Profile</h1>
                <p>User ID: ${userId}</p>
                <p>Username: JohnDoe</p>
                <p>Email: johndoe@example.com</p>
            </div>
        </body>
        </html>
    `);
});

app.get("/v1/:page", (req, res) => {
  const page = req.params.page;

  const titleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const titleCasedPage = titleCase(page);

  try {
    // Simulate a potential error
    if (Math.random() < Math.random() / 4) {
      throw new Error("Internal server error");
    }
  } catch (error) {
    const statusCode = Math.random() < 0.5 ? 500 : 401;
    res
      .status(statusCode)
      .send(statusCode === 500 ? "Internal Server Error" : "Unauthorized");
    return;
  }

  res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                        <title>Page - SaaS App</title>
                        <style>
                                body {
                                        font-family: Arial, sans-serif;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        height: 100vh;
                                        margin: 0;
                                        background-color: #f4f4f4;
                                }
                                .page-container {
                                        background-color: #fff;
                                        padding: 20px;
                                        border-radius: 5px;
                                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                        width: 300px;
                                        text-align: center;
                                }
                                .page-container h1 {
                                        margin-bottom: 20px;
                                }
                                .page-container p {
                                        margin: 10px 0;
                                }
                        </style>
                </head>
                <body>
                        <div class="header">
                            <h1>Real SaaS App</h1>
                        </div>
                        <h2>${titleCasedPage}</h2>
                </body>
                </html>
        `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
