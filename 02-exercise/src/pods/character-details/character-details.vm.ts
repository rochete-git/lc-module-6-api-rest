export interface CharacterDetails {
  id: number,
  name: string,
  type: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string,
  description: string,
  comment: string
}

export const createEmptyCharacterDetails = (): CharacterDetails => ({
  id: -1,
  name: "",
  type: "",
  origin: {
    name: "",
    url: ""
  },
  location: {
    name: "",
    url: ""
  },
  image: "",
  episode: [],
  url: "",
  created: "",
  description: "",
  comment: ""
});
