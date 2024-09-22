import Billioner from "../models/model";
import { Request, Response } from "express";

const GetByIdApi = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const billioner = await Billioner.findById(id);

    if (!billioner) {
      res.status(404).send({ msg: "Billioner not found" });
      return;
    }

    res.status(200).send({ msg: "Data fetched successfully", Data: billioner });
  } catch (e) {
    res.status(500).send({ msg: "Fetching error", error: e});
  }
};

export default GetByIdApi;
