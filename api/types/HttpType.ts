export interface HttpType {
  success: boolean;
  message: string;
  data: object | null;
  code: number;
}