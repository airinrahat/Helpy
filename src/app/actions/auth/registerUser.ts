"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNamesObj.userCollection);

  const { email, password } = payload;
  if (!email || !password) return null;

  const user = await userCollection.findOne({ email });
  if (!user) {
    const result = await userCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString();

    return result;
    // {
    //   acknowledged: result.acknowledged,
    //   insertedId: result.insertedId.toString(),
    //   success: true,
    // };
  }

  return null;
};
