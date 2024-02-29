import { FC } from "react";

type TableTitle = {
  [x: string]: string;
};

type TableData = TableTitle;

interface TableProps {
  title?: TableTitle;
  data?: TableData[];
}

const Table: FC<TableProps> = (props) => {
  const { title = {}, data = [] } = props;
  const keys = Object.keys(title);

  const getData = (_data: TableData, lineIndex: number) => {
    const cols = keys.map((key, index) => {
      return <td key={index}>{_data[key]}</td>;
    });

    return <tr key={lineIndex}>{cols}</tr>;
  };

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th key={index}>{title[key]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((_data, index) => {
          return getData(_data, index);
        })}
      </tbody>
    </table>
  );
};

export { Table };
