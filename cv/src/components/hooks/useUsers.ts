import { useEffect, useState } from "react";
import userService, { User } from "../services/user-Service";
import { CanceledError } from "../services/api-client";


const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect (() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        
        setError(err.message);
      })
        cancel();
  }, []);

  return {users, error, isLoading};
}
export default useUsers;