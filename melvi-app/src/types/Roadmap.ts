import User from './User';

type Roadmap = {
  id: number;
  title: string;
  description: string;
  icon: string;
  user: User;
};

export default Roadmap;
