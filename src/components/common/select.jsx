import React from "react";

const Select = ({ name, data, label }) => {
   return (
      <div className="mb-3">
         <label htmlFor={name} className="form-label">
            {label}
         </label>
         <select className="form-select" id={name}>
            {data.map((item) => (
               <option key={item._id} value={item.name}>
                  {item.name}
               </option>
            ))}
         </select>
      </div>
   );
};

export default Select;