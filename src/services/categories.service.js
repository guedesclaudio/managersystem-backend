import categoriesRepository from "../repositories/categories.repository";

function createNewCategory(categoryName) {
    const categoryFormated = categoryName.toLowerCase()
    return categoriesRepository.insertCategory(categoryFormated);
}

function getCategories() {
    return categoriesRepository.queryCategories();
}

function excludeCategory(categoryId) {
    return categoriesRepository.deleteCategory(categoryId);
}

const categoriesService = {
    createNewCategory,
    getCategories,
    excludeCategory
};

export default categoriesService;