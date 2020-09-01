export interface RecipeInterface {
    _id: string,
    title: string,
    duration: number,
    ingrediens: [string],
    description: string,
    originCountry: string,
    language: string,
    views: number
}