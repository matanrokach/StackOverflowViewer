import React from 'react';

export interface IItem<T> {
  item: T;
  index: number;
}

interface Props<T> {
  data: T[];
  renderItem({item, index}: {item: T, index: number}): React.ReactElement<IItem<T>>;
  keyExtractor(item: T, index: number): string;
}

export const Results = <T extends unknown>({
  data,
  renderItem: Item,
  keyExtractor,
}: Props<T>) => {

  return (
    <>
      {data.map((item, index) => {
        const key = keyExtractor(item, index);

        return (
            <Item {...{item, index}} key={key} />
        );
      })}
    </>
  );
};
