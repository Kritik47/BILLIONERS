import Billioner from "../models/model";
import { Request, Response } from "express";
const PutApi = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const result = await Billioner.updateOne(
      { _id: id },
      { $set: updateData }
    );
    res.status(200).send({ msg: "Data updated successfully",Data:result });
  } catch (e) {
    res.status(500).send({ msg: "Updating error", error: e });
  }
};

export default PutApi;
