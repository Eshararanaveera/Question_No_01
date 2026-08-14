// src/types/employee.ts

export interface Designation {
  designation_id: number;
  name: string;
  remark: string;
}


export interface Employee {
  employee?: number; // Employee ID (auto-generated, optional for new records)
  fullName: string;
  dateOfJoining: string; // ISO date string, e.g. "2024-05-20"
  isManager: boolean;
  designation: number | ""; // designation_id (FK)
  designationName?: string; // populated on the frontend for display in Table E
}
