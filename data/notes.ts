import { Note } from '../store/notes';

const notes: Note[] = Array.from({ length: 10 }, (_, id) => {
    return {
        id,
        date: new Date().getTime(),
        title: 'Java Course notes ' + id,
        body: `Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore ma aaliq ua. Ut enim ad minim veniam. 

        Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore ma aaliq ua. Ut enim ad minim veniam. `,
    };
});

export default notes;
