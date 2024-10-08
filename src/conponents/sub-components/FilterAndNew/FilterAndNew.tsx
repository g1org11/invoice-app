import React from "react";
import "./FilterAndNew.css";
import { useState } from "react";
import { useInvoice } from "../../../contexts/InvoiceAppContext"; // Import the CSS file
import { Link } from "react-router-dom";

function FilterAndNew() {
  const { setFilterStatus, invoices } = useInvoice();
  const [selectedStatus, setSelectedStatus] = useState("all");
  const inv = invoices.length;
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    setFilterStatus(newStatus);
  };
  return (
    <div className="flex items-center justify-between mt-9">
      <div>
        <h2 className=" text-chineesBlack text-2xl font-bold leading-normal tracking-[-0.75px] sm:text-3xl dark:text-white">
          Invoices
        </h2>
        <p className="text-gray font-medium leading-[15px] tracking-[-0.1px] text-[13px] dark:text-lavender">
          {inv === 0 ? "No invoices" : `There are ${inv} invoices`}
        </p>
      </div>
      <div className="flex items-center gap-[18px] ">
        <div className="flex items-center justify-end ">
          <select
            className="custom-select text-chineesBlack text-[15px] font-bold tracking-tight focus:outline-none"
            value={selectedStatus}
            onChange={handleFilterChange}
          >
            <option value="all">Filter</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="draft">Draft</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
          >
            <path
              d="M1 1L5.2279 5.2279L9.4558 1"
              stroke="#7C5DFA"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-[8px] pt-1.5 pr-[15px] pb-1.5 pl-1.5 bg-violetsBlue rounded-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="16" cy="16" r="16" fill="white" />
            <path
              d="M17.3131 21.0234V17.3136H21.0229V14.7333H17.3131V11.0234H14.7328V14.7333H11.0229V17.3136H14.7328V21.0234H17.3131Z"
              fill="#7C5DFA"
            />
          </svg>
          <Link
            to="/new"
            className=" flex gap-2 text-white text-[15px] font-bold leading-[15px] tracking-[-0.25px]"
          >
            New
            <p className="hidden sm:block">Invoice</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterAndNew;
