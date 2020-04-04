import { NowRequest, NowResponse } from "@now/node";
import Data from "../dynamo/DTO/Data";
import data from "../dynamo/model/data";


export default async (req: NowRequest, res: NowResponse) => {
  const record = new Data();
  record.value = "world";
  record.key = "hello";
  const dataModel =  await data.connect();
  const save = await dataModel.put(record);
  res.json({record: save });
};
