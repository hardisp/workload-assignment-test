import { MONTHS } from "@/lib/workload";

type Props = {
  totals: Record<string, number>;
  name?: string;
  typeName?: string;
};

export function WorkloadSummary({ totals, name, typeName }: Props) {
  return (
    <section className="mb-4">
      <h1 className="text-lg font-semibold">{name ?? 'N/A'}</h1>
      <p className="text-sm text-gray-500 mb-4">{typeName ?? 'Workload' }</p>
      <div className="grid md:grid-cols-[100px_repeat(1,1fr)]">
        <div></div>
        <div className="flex gap-1 flex-wrap">
          {MONTHS.map((month) => {
            const value = totals[month];

            const bg =
              value === 0
                ? "bg-red-100 text-red-700"
                : value < 1
                ? "bg-yellow-100 text-yellow-800"
                : value < 2
                ? "bg-cyan-100 text-cyan-700"
                : "bg-blue-100 text-blue-700";

            return (
              <div key={month} className="text-center">
                <div className="text-xs text-gray-400 mb-1">{month}</div>
                <div
                  className={`min-w-14 py-2 rounded-lg text-sm font-medium w-21.5 text-center ${bg} shadow-xs`}
                >
                  {value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
