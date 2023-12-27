// import React from 'react'
// //import ChatMessage from './ChatMessage';

// const ChatMessage = ({name, message}) => {
//     return (
//         <div className="flex items-centre shadow-sm p-2">
//             <img
//             className="h-8"
//             alt="user"
//             src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
//           />
//           <span className="font-bold px-4 ">{name}</span>
//           <span>{message}</span>
//         </div>
//     );
// };

// export default ChatMessage;

const ChatMessage = ({ name, message }) => {
    return (
      <div className="flex items-center shadow-sm p-2">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    );
  };
  export default ChatMessage;
  