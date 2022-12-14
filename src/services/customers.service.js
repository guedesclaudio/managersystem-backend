import customersRepository from "../repositories/customers.repository.js";

async function postCustomer({customerData, hasCity, hasDistrict}) {
    //validar se já existe um usuario com o mesmo email por exemplo
    customerData.name = customerData.name.toLowerCase();
    customerData.cityName = customerData.cityName.toLowerCase();

    const { cityName, districtName, stateId } = customerData;
    const customerId = (await customersRepository.insertCustomer(customerData)).rows[0].id;
    let cityId = hasCity;
    let districtId = hasDistrict;

    if (!hasCity) {
        cityId = (await customersRepository.insertCity(cityName, stateId)).rows[0].id;
    } 
    if (!hasDistrict) {
        districtId = (await customersRepository.insertDistrict(districtName, cityId)).rows[0].id;
    }
    return customersRepository.insertAddressCustomer({customerData, customerId, districtId});
}

async function getCustomers() {
    return customersRepository.findCustomers();
}

async function getCustomerByName(customerName) {
    const customer =  customersRepository.findCustomer(customerName);

    if (!customer) {
        throw notFoundError(); // criar esse erro
    }

    return customer;
}

async function removeCustomer(customerId) {
    return customersRepository.deleteCustomer(customerId);
}


const customersService = {
    postCustomer,
    getCustomers,
    getCustomerByName,
    removeCustomer
};

export default customersService;