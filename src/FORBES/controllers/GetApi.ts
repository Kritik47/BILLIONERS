import Billioner from "../models/model";
import { Request, Response } from "express";

const GetApi = async (req: Request, res: Response): Promise<void> => {
  try {
    const billioners = await Billioner.find();
    res.status(200).send({ msg: "Data fetched successfully", Data: billioners });
  } catch (e) {
    res.status(500).send({ msg: "Fetching error", error: e });
  }
};

export default GetApi;
