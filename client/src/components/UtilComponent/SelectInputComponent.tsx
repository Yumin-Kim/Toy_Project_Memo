import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import React, { FC } from "react";
import { SelectInfo } from "./Formcomponent";

interface SelectInputComponent {
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  selectInfo: SelectInfo[];
}

const SelectInputComponent: FC<SelectInputComponent> = ({
  onChangeText,
  selectInfo,
  text,
}) => {
  return (
    <>
      <TextField
        select
        style={{ width: "65%" }}
        label="타이틀을 선택해주세요"
        value={text}
        name="select title"
        onChange={onChangeText}
        required
      >
        {selectInfo.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default SelectInputComponent;
