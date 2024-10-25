import { differenceInYears } from "date-fns/differenceInYears";

export const calculateAge = (dateOfBirth: Date): number => {
  const today = new Date();
  return differenceInYears(today, dateOfBirth);
};

// Formata a data no formato YYYY-MM-dd
export const dateFormat = (date: Date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
