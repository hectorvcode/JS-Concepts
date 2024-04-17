const fs = require("fs");

const pathToDB = "./database.json";
const pathToBackupDB = "./backup_database.json";

function printUsers() {
  let users;
  try {
    users = JSON.parse(fs.readFileSync(pathToDB));
  } catch {
    console.log("Database not found! Using backup database");
    users = JSON.parse(fs.readFileSync(pathToBackupDB));
  } finally {
    console.log(users);
  }
}

printUsers();
