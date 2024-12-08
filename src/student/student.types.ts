export interface AddNewStudentInterface {
  ub_first_name: string;
  ub_middle_name: string;
  ub_last_name: string;
  ub_mobile_number: number;
  ub_alternate_number: number;
  ub_aadhaar_number: number;
  ub_email_id: string;
}

export interface DeleteStudentInterface {
  studentId: number;
}

export interface UpdateStudentInterface {
  id: string;
  ub_first_name: string;
  ub_middle_name: string;
  ub_last_name: string;
  ub_mobile_number: number;
  ub_alternate_number: number;
  ub_aadhaar_number: number;
  ub_email_id: string;
}