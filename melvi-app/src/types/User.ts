import Permission from './Permission';

type User = {
  id: number;
  fullName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  permission: Permission;
};

export default User;
