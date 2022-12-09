import statusCode from "../enums/statusCode.enum.js";
import customersRepository from "../repositories/customers.repository.js";

async function checkAddress(req, res, next) {
    
    const { cityName, districtName } = req.body;
    const cityNameFormated = cityName.toLowerCase();
    const districtNameFormated = districtName.toLowerCase();

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

        req.locals.Address = {hasCity, hasDistrict};
        next();
        
    } catch (error) {
        console.error(error)
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

export {checkAddress};