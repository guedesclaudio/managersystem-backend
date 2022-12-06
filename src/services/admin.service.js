import adminRepository from "../repositories/admin.repository.js";
import {v4 as uuid} from "uuid";

async function sessionAdmin(id) {

    const token = uuid();
    await adminRepository.insertSession({id, token});
    return token;
}

const adminService = {
    sessionAdmin
};

export default adminService;