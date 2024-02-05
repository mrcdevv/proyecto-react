import { useEffect, useState } from "react";

export function useFetchMovie(url) {


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${import.meta.env.VITE_API_KEY}`
    },
    signal: controller?.signal
  };

}