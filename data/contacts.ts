import { ContactModel } from '../store/chat';
import users from './users';

const contacts: ContactModel[] = [
    {
        id: 0,
        messages: Array.from({ length: 50 }, (_, id) => {
            return {
                id,
                date: new Date().getTime(),
                contactId: 0,
                message:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quam iure voluptatibus quod aliquid exercitationem qui atque, aperiam consectetur iusto optio porro velit nisi voluptatum voluptas saepe accusamus iste est. Obcaecati.',
                sender: users[Math.round(Math.random())],
            };
        }),
        users: users,
    },
];

export default contacts;
