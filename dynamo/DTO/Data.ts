import {
  attribute,
  hashKey,
  rangeKey,
  table,
} from "@aws/dynamodb-data-mapper-annotations";

@table("data")
export default class Data {
  @hashKey()
  key: string;

  @attribute({ defaultProvider: () => new Date(), type: "Date" })
  createdAt: Date;

  @attribute()
  value: string;
}
