import { useEffect, useState } from "react";

export function useIsAuth() {
  const [isAuth, setIsAuth] = useState(false);
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);

  return isAuth;
}
