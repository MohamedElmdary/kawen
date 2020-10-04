import { ContactModel } from '../store/chat';
import users from './users';
import { User } from '../store/auth';

const contacts: ContactModel[] = Array.from({ length: 50 }, (_, idx) => {
    return {
        id: idx,
        messages: Array.from({ length: 50 }, (_, id) => {
            const user = users[Math.round(Math.random())];
            return {
                id,
                date: new Date().getTime(),
                contactId: idx,
                message:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quam iure voluptatibus quod aliquid exercitationem qui atque, aperiam consectetur iusto optio porro velit nisi voluptatum voluptas saepe accusamus iste est. Obcaecati.',
                sender: {
                    ...user,
                    name: user.name + ' ' + id,
                } as User,
            };
        }),
        users: users.map((user) => {
            return {
                ...user,
                name: user.name + ' ' + idx,
            };
        }),
    };
});

export default contacts;
