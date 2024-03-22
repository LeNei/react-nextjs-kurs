import { object, string, InferType, number, date } from "yup";

// Definition des ApiUsers mit welchem es moeglich ist
// selbige auf korrektheit zu ueberpruefen.
export const apiUserSchema = object({
  id: number().required(),
  firstName: string().required(),
  lastName: string().required(),
  avatar: string().url().required(),
  gender: string().required(),
  birthdate: date().required(),
  createdAt: date().required(),
});

// Mit InferType ist es moeglich aus einem Scehma direkt einen type zu erstellen
export type ApiUser = InferType<typeof apiUserSchema>;
