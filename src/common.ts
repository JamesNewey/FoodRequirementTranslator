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