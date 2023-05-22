const { log } = require("console");
const respository = require("./repository/jsonPlaceholderRepository");
const BusinessUnitService = require("./service/BusinessUnitService")

const businessUnit = new BusinessUnitService.BusinessUnitService(new respository.JsonPlaceholderRepository());

const test = businessUnit.getPostData(1).then((res) => {
    console.log(res)
});
