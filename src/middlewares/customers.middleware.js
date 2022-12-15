import statusCode from "../enums/statusCode.enum.js";
import customersRepository from "../repositories/customers.repository.js";
import { customerDataSchema } from "../schemas/customers.schema.js";

async function checkAddress(req, res, next) {
    
    const { cityName, districtName } = req.body;
    const cityNameFormated = cityName?.toLowerCase();
    const districtNameFormated = districtName?.toLowerCase();
    const { error } = customerDataSchema.validate(req.body);

    if (error) {
        const errors = error.details.map(value => value.message);
        return res.status(statusCode.UNPROCESSABLE).send(errors);
    }

    try {
        let hasCity = false;
        let hasDistrict = false;

        const city = (await customersRepository.findCityByName(cityNameFormated)).rows[0];
        const district = (await customersRepository.findDistrictByName(districtNameFormated)).rows[0];
        
        if (city) {
            hasCity = city.id;
        }
        if (district) {
            hasDistrict = district.id;
        }

        res.locals.address = {hasCity, hasDistrict};
        next();
        
    } catch (error) {
        console.error(error)
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

async function checkEmailAndCpf(req, res, next) {
    const { cpf, email } = req.body;

    try {
        const customerAlreadyExist = await customersRepository.findCustomerByEmailAndCpf(email, cpf);

        if (customerAlreadyExist) {
            return res.sendStatus(statusCode.CONFLICT);
        }
        next();
        
    } catch (error) {
        console.error(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

export { checkAddress, checkEmailAndCpf };