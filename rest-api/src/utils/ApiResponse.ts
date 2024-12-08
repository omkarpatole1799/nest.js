export class ApiResponse {
  private statusCode: number;
  private success: boolean;
  private usrMsg: string;
  private data: any[] | null;
  private errMsg: string | null;
  constructor(
    statusCode: number,
    success: boolean,
    usrMsg: string,
    data?: any[],
    errMsg?: string,
  ) {
    this.statusCode = statusCode;
    this.success = success;
    this.usrMsg = usrMsg;
    this.data = data || null;
    this.errMsg = errMsg || null;
  }

  res() {
    return {
      response_data: {
        statusCode: this.statusCode,
        success: this.success,
        usrMsg: this.usrMsg,
        data: this?.data ? JSON.stringify(this.data) : [],
        errMsg: this?.errMsg || null,
      },
    };
  }
}
