import Billioner from "../models/model";
import { Request, Response } from "express";

const DelApi = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await Billioner.deleteOne({ _id: id });

    res.status(200).send({ msg: "Data deleted successfully" });
  } catch (e) {
    res.status(500).send({ msg: "Delete error", error: e });
  }
};

export default DelApi;
