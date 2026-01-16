import { AssignmentMeta } from "./AssignmentMeta";
import { AssignmentRow } from "./AssignmentRow"; 

export default function Assignment({totals}: {totals: Record<string, number>}) {
  return (
    <>
      <AssignmentRow totals={totals} />
      <AssignmentMeta />
    </>
  );
}
