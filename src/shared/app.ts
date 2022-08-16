const host = "http://127.0.0.1:8080";

export const getCardsData = async (): Promise<any> => {
  return fetch(host + "/cardsData")
    .then((response: any) => response.json())
    .catch((error) => {
      console.warn(error);
      return null;
    });
}