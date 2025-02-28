const express = require("express");
const app = express();
const { PORT } = require("./src/config");
const dbConnection = require("./src/database");
const { errorHandler } = require("./src/middleware");
const swagger = require('./src/swagger')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnection();
swagger(app)

require("./src/routes")(app);

app.use(errorHandler);
app.listen(PORT || 5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
