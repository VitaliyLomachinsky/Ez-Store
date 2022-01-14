import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "../Category/Category.css";

const options = [
  { label: "Single-player", value: "Single-player" },
  { label: "Multi-player ", value: "Multi-player" },
  { label: " PvP", value: " PvP", disabled: true },
  { label: " Online PvP ", value: " Online PvP" },
  { label: " LAN PvP ", value: " LAN PvP" },
  { label: "Shared/Split Screen PvP ", value: "Shared/Split Screen PvP" },
  { label: "Co-op ", value: "Co-op" },
  { label: " Online Co-op ", value: " Online Co-op" },
  { label: " LAN Co-op ", value: " LAN Co-op" },
  { label: "Shared/Split Screen Co-op ", value: "Shared/Split Screen Co-op" },
  { label: " Strategy ", value: " Strategy" },
  { label: " Action ", value: "Action" },
  { label: "Sport ", value: "Sport" },
];

const Example = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h3>Select Categories</h3>
      
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        hasSelectAll={false}
        labelledBy="Select"
      />
    </div>
  );
};

export default Example;
