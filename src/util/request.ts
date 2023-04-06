import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export const request = (url: string, { method = "GET", data}) => new Promise(async (resolve, reject) => {

});