export const getCardsData = async (): Promise<any> => {
  return fetch("https://randomuser.me/api/?results=10")
    .then((response: any) => response.json())
    .catch((error) => {
      console.warn(error);
      return null;
    });
}