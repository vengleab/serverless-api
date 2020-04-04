import { client } from "../index";
import { DataMapper } from "@aws/dynamodb-data-mapper";
import Data from "../DTO/Data";

const DataModel = new DataMapper({
  client,
  tableNamePrefix: "dev_", // optionally, you can provide a table prefix to keep your dev and prod tables separate
});

export default {
  connect: async () => {
    await DataModel.ensureTableExists(Data, {
      readCapacityUnits: 5,
      writeCapacityUnits: 5,
    });
    return DataModel;
  },
};
