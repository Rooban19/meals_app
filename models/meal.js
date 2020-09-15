class Meal {
	constructor(
		id,
		categoryIds,
		title,
		affordability,
		complexity,
		imageUrl,
		duration,
		ingredients,
		steps,
		isGluterFree,
		isVegan,
		isVegetatarian,
		isLactosFree,
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.affordability = affordability;
		this.complexity = complexity;
		this.imageUrl = imageUrl;
		this.duration = duration;
		this.ingredients = ingredients;
		this.steps = steps;
		this.isGluterFree = isGluterFree;
		this.isVegan = isVegan;
		this.isVegetatarian = isVegetatarian;
		this.isLactosFree = isLactosFree;
	}
}

export default Meal;
