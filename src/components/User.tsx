import { User } from '../types';
import MessageView from './MessageView';

interface Props {
  user: User;
}

const UserView = ({ user }: Props) => {
  return (
    <div className='flex gap-x-24 justify-center'>
      <div className='rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-56 h-20'>
        <p className='text-xl text-gray-200 font-bold'>{user.name}</p>
      </div>
      <div>
        {user.messages.map((message, i) => (
          <MessageView key={i} index={i} message={message} />
        ))}
      </div>
    </div>
  );
};

export default UserView;
