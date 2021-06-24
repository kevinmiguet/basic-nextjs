import cn from "classnames";

import s from "./document-view.module.scss";

import { ParsedUrlQuery } from "querystring";
import { BillLines } from "./bill-lines";
import { Header } from "./header";
import { Subheader } from "./subheader";

export function DocumentView({ query }: { query: ParsedUrlQuery }) {
  return (
    <div className={cn(s.document_view, "p-9 flex justify-center text-blue")}>
      <div className={s.document_container}>
        <Header />
        <Subheader />
        <BillLines {...(query as any)} />
      </div>
    </div>
  );
}
