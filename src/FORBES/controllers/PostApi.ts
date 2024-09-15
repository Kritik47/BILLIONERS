import Billioner from "../models/model";
import { Request, Response } from "express";

const PostApi = async (req: Request, res: Response): Promise<void> => {
  try {
    const newBillioner = new Billioner(req.body);
    const savedBillioner = await newBillioner.save();
    res.status(201).send({ msg: "Data posted successfully", data: savedBillioner });
  } catch (e) {
    res.status(500).send({ msg: "Posting error", error: e });
  }
};

export default PostApi;
