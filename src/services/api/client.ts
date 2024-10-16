import axios from "axios";
import { TrackRevResponse } from "@app-types/trackRevResponse/primitive";

const TrackRevClient = async <T>(url: string): Promise<TrackRevResponse<T>> => {
  const response = await axios.get(url);
  const responseData = response.data;
  return responseData;
};

export const fetchData = async <T, R>(
  url: string,
  transformer: (data: T) => R
  // setState: React.Dispatch<React.SetStateAction<R[]>>,
  // year: string
): Promise<R | R[]> => {
  const response = await TrackRevClient<T>(url);
  if (response.status === "Error") {
    throw new Error("Error fetching Data for server");
  }
  const responseData = response.data;

  let processedResponse: R | R[];

  if (Array.isArray(responseData)) {
    processedResponse = responseData.map((item) => transformer(item));
  } else {
    processedResponse = transformer(responseData);
  }

  return processedResponse;
};

export default TrackRevClient;
