import statusCode from "../enums/statusCode.enum.js";
import customersRepository from "../repositories/customers.repository.js";
import customersService from "../services/customers.service.js"

async function createCustomer(req, res) {

    const customerData = req.body;
    
    try {
        await customersService.postCustomer(customerData);
        return res.sendStatus(statusCode.CREATED);
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
    
}

async function listCustomers(req, res) {

    try {
        const customers = await customersService.getCustomers();
        return res.status(statusCode.OK).send(customers);
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
    
}

async function removeCustomer(req, res) {
    
    const { customerId } = req.params;

    if (customerId < 1 || !customerId || isNaN(Number(customerId))) {
        return res.sendStatus(statusCode.BAD_REQUEST);
    }
    
    try {
        await customersService.removeCustomer(customerId);
        return res.sendStatus(statusCode.OK);
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

async function readCustomer(req, res) {

    const { customerName } = req.query;

    if (!customerName) {
        return res.sendStatus(statusCode.BAD_REQUEST);
    }

    try {
        await customersService.getCustomerByName(customerName);
        return res.sendStatus(statusCode.OK);
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

export {createCustomer, listCustomers, removeCustomer, readCustomer};