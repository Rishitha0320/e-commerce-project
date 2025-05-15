import { useState, useEffect } from "react";
import { useAuth } from "../../../context/user";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/v1/auth/user-auth", {
          headers: {
            Authorization: auth?.token,
          },
        });

        if (res.data.ok) setOk(true);
        else setOk(false);
      } catch (error) {
        setOk(false);
        console.log("AUTH CHECK ERROR", error);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
