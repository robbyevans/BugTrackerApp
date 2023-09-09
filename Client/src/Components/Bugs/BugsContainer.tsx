import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBug, resolveBug, deleteBug } from "../../Redux/BugsSlice";
import BugsList from "./BugsList";
import { RootState } from "../../Redux/Store";

const BugsContainer = () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state: RootState) => state.bugs.list);

  return (
    <BugsList
      bugs={bugs}
      onUpdate={(bugId: number) => dispatch(resolveBug({ id: bugId }))}
      onDelete={(bugId: number) => dispatch(deleteBug({ id: bugId }))}
    />
  );
};

export default BugsContainer;
