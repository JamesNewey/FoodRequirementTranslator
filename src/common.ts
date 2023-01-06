export interface IIntolerances {
  conditions: string[];
  
}

export interface IUser {
    allergies: string[];
    intolerances: IIntolerances;
}

export const defaultIntolerances: IIntolerances = {
  conditions: []
}

export const defaultUser: IUser = {
    allergies: [],
    intolerances: defaultIntolerances
  };

interface IConfiguration {
    count: number;
    baseLanguage?: string;
    userHasAllergies?: boolean;
    userHasIntolerances?: boolean;
    allergies: string[];
    intolerances?: string[];
  }