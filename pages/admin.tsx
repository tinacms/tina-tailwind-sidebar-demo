import { useRouter } from "next/router";
import { useEffect } from "react";
import { useEditState } from "../utils/editState";
const Admin = () => {
  const { setEdit } = useEditState();
  const router = useRouter();
  useEffect(() => {
    setEdit(true);
    router.back();
  }, []);
  return <div>Going into edit mode...</div>;
};
export default Admin;
