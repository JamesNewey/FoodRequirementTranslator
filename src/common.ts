export default interface IProfile {
    allergies: string[];
    intolerances: string[];
}

interface IConfiguration {
    count: number;
    baseLanguage?: string;
    userHasAllergies?: boolean;
    userHasIntolerances?: boolean;
    allergies: string[];
    intolerances?: string[];
  }