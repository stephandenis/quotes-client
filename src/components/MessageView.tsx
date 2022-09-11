import Branch from './Branch';
import { Message } from '../types';

interface Props {
  message: Message;
  index: number;
}

const MessageView = ({ message, index }: Props) => {
  return (
    <div className='group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-zinc-700 w-60 h-20 relative'>
      <Branch trunk={index === 0} />
      <p className='text-sm font-extralight text-gray-200 p-4'>
        {message.body}
      </p>
    </div>
  );
};

export default MessageView;
