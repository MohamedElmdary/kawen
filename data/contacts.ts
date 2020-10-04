import { ContactModel } from '../store/chat';
import users from './users';

const contacts: ContactModel[] = Array.from({ length: 50 }, (_, idx) => {
    return {
        id: idx,
        messages: Array.from({ length: 50 }, (_, id) => {
            return {
                id,
                date: new Date().getTime(),
                contactId: idx,
                message:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quam iure voluptatibus quod aliquid exercitationem qui atque, aperiam consectetur iusto optio porro velit nisi voluptatum voluptas saepe accusamus iste est. Obcaecati.',
                sender: users[Math.round(Math.random())],
            };
        }),
        users: users,
    };
});

export default contacts;
