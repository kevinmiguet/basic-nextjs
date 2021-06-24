import s from "./bill-lines.module.scss";
import cn from "classnames";
//www.saturn.io/q?up=98.9,36&m=jours,jours&j=23,12&k=4.3,3&uId=4c06c610-a47c-11eb-bcbc-0242ac130002
function Currency() {
  return <span className="ml-2">€</span>;
}

function Divider() {
  return (
    <div className={cn(s.total_line, "mb-10")}>
      <span />
      <tr className={cn(s.divider, "")} />
    </div>
  );
}

function Totals({ totalPrices }) {
  const totalPrice = totalPrices
    .reduce((sum, current) => sum + Number(current), 0)
    .toFixed(2);
  return (
    <div className="flex justify-end">
      <div className="w-1/2 flex flex-col">
        <Divider />
        <div className={cn(s.total_line, "mb-10")}>
          <div className="text-blue-light">
            TVA non applicable, art.293B du CGI
          </div>
          <div className="justify-self-end">
            {totalPrice}
            <Currency />
          </div>
        </div>
        <Divider />

        <div className={s.total_line}>
          <div>Total à payer</div>
          <div className="justify-self-end">
            {totalPrice}
            <Currency />
          </div>
        </div>
      </div>
    </div>
  );
}
export function BillLines({ up, m, j, k, uId }) {
  const units = m?.split(",");
  const unitPrices = j?.split(",");
  const quantities = k?.split(",");
  const totalPrices = up?.split(",") || [];
  const lines: {
    unit: string;
    unitPrice: string;
    quantity: string;
    totalPrice: string;
  }[] = totalPrices.map((_, key) => {
    return {
      unit: units[key],
      unitPrice: unitPrices[key],
      quantity: quantities[key],
      totalPrice: totalPrices[key],
    };
  });

  return (
    <div>
      <div
        className={cn(
          "w-full mb-10 items-end text-blue-light uppercase",
          s.table_line
        )}
      >
        <span className="text-2xl leading-none"># </span>

        <span> Désignation </span>
        <span> prix unitaire </span>
        <span>{lines[0]?.unit} </span>
        <span>prix total</span>
      </div>

      {lines.map((line, k) => (
        <div
          key={`row_${line.totalPrice}`}
          className={cn("w-full mb-10 items-center", s.table_line)}
        >
          <span>{k + 1}</span>
          <span>Développements web </span>
          <span>
            {Number(line.unitPrice).toFixed(2)} <Currency />
          </span>
          <span>{line.quantity} </span>
          <span>
            {Number(line.totalPrice).toFixed(2)} <Currency />
          </span>
        </div>
      ))}
      <Totals totalPrices={totalPrices} />
    </div>
  );
}
