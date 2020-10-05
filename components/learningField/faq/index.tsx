import React, { useRef, useState } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { Picker } from "emoji-mart";
import { faqProps } from "../../../data/learning-fieldProps";
import classes from "./faq.module.scss";

TimeAgo.addLocale(en);

type Votes = {
    votes_down: { isVoted: boolean; number: number };
    votes_up: { isVoted: boolean; number: number };
}[][];

const FAQ: React.FC<faqProps> = ({ posts }) => {
    const timeAgo = new TimeAgo("en-US");
    const [emojiPicker, setEmojiPicker] = useState<boolean[]>(
        new Array(posts.length).fill(false)
    );
    const [votes, setVotes] = useState<Votes>(
        posts.map((post) =>
            post.comments.map((comment) => ({
                votes_down: comment.votes_down,
                votes_up: comment.votes_up,
            }))
        )
    );
    const [images, setImages] = useState<any[][]>(
        new Array(posts.length).fill([])
    );
    const textBoxRef = useRef<HTMLTextAreaElement[] | null[]>(
        new Array(posts.length)
    );

    const showEmojiPicker = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        i: number
    ) => {
        e.stopPropagation();
        const emojiBoxes = new Array(posts.length).fill(false);
        emojiBoxes[i] = !emojiPicker[i];
        setEmojiPicker(emojiBoxes);
    };

    const writeEmoji = (emoji: any, i: number) => {
        textBoxRef.current[i]!.value += emoji.native;
    };

    const sendComment = (
        e: React.KeyboardEvent<HTMLTextAreaElement>,
        value: string
    ) => {
        e.preventDefault();
        console.log(value);
    };

    const changeVote = (
        type: "votes_up" | "votes_down",
        i: number,
        ind: number
    ) => {
        const voteCopy = votes.map((post) =>
            post.map((comment) => ({
                votes_up: { ...comment.votes_up },
                votes_down: { ...comment.votes_down },
            }))
        );
        const notType = type === "votes_up" ? "votes_down" : "votes_up";

        if (voteCopy[i][ind][type].isVoted) voteCopy[i][ind][type].number--;
        else {
            voteCopy[i][ind][type].number++;
            if (voteCopy[i][ind][notType].isVoted) {
                voteCopy[i][ind][notType].number--;
                voteCopy[i][ind][notType].isVoted = false;
            }
        }
        voteCopy[i][ind][type].isVoted = !voteCopy[i][ind][type].isVoted;
        setVotes(voteCopy);
    };

    const addImage = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        let reader = new FileReader();
        let file = e.currentTarget.files?.length
            ? e.currentTarget.files[0]
            : null;
        reader.onloadend = () => {
            let imageCopy = images.map((post) => [...post]);
            imageCopy[i].push(reader.result);
            setImages(imageCopy);
        };
        if (file) reader.readAsDataURL(file);
    };

    const removeImage = (i: number, imageIndex: number) => {
        let imagesCopy = images.map((post) => [...post]);
        imagesCopy[i].splice(imageIndex, 1);
        setImages(imagesCopy);
    };

    const writeComment = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        e.currentTarget.rows = e.currentTarget.value.split("\n").length;
        e.key === "Enter" && e.currentTarget.value.trim() && !e.shiftKey
            ? sendComment(e, e.currentTarget.value.trim())
            : null;
    };

    return (
        <section
            className={classes.faq}
            onClick={() => setEmojiPicker(new Array(posts.length).fill(false))}
        >
            {posts.map((post, i) => (
                <section key={i}>
                    {/* Question */}
                    <div className={classes.question}>
                        <img src={post.author_img} alt="Author image" />
                        <p className={classes.author_name}>{post.author}</p>
                        <p className={classes.post_time}>
                            {timeAgo.format(new Date(post.date))}
                        </p>
                        <p className={classes.content}>{post.question}</p>
                    </div>
                    {/* Comments */}
                    <div className={classes.comments}>
                        {post.comments.map((comment, ind) => (
                            <div className={classes.comment} key={ind}>
                                <img
                                    src={comment.author_img}
                                    alt="Author image"
                                />
                                <p className={classes.author_name}>
                                    {post.author}
                                </p>
                                <p className={classes.content}>
                                    {comment.comment}
                                </p>
                                <div className={classes.image_comments}>
                                    {comment.images.map((img, i) => (
                                        <img
                                            src={img}
                                            alt="image comment"
                                            key={i}
                                        />
                                    ))}
                                </div>
                                <div className={classes.votes}>
                                    <button
                                        onClick={() =>
                                            changeVote("votes_up", i, ind)
                                        }
                                    >
                                        {votes[i][ind].votes_up.isVoted ? (
                                            <img
                                                src="/images/up-arrow-feedback.svg"
                                                alt="Up vote"
                                            />
                                        ) : (
                                            <img
                                                src="/images/up-arrow.svg"
                                                alt="Up vote"
                                            />
                                        )}
                                    </button>
                                    <p>
                                        {votes[i][ind].votes_up.number -
                                            votes[i][ind].votes_down.number}
                                    </p>
                                    <button
                                        onClick={() =>
                                            changeVote("votes_down", i, ind)
                                        }
                                    >
                                        {votes[i][ind].votes_down.isVoted ? (
                                            <img
                                                src="/images/down-arrow-feedback.svg"
                                                alt="Down vote"
                                            />
                                        ) : (
                                            <img
                                                src="/images/down-arrow.svg"
                                                alt="Down vote"
                                            />
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Add comment */}
                    <div className={classes.add_comment}>
                        <img src={post.author_img} alt="User image" />
                        <div className={classes.add_comment_form}>
                            <div className={classes.comment_images}>
                                {images[i].map(
                                    (image: string, imageIndex: number) => (
                                        <div key={imageIndex}>
                                            <img src={image} alt="User image" />
                                            <button
                                                onClick={() =>
                                                    removeImage(i, imageIndex)
                                                }
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                            <textarea
                                name="comment"
                                id="comment"
                                placeholder="Type a replay"
                                ref={(el) => (textBoxRef.current[i] = el)}
                                rows={1}
                                onKeyDown={(e) => writeComment(e)}
                            ></textarea>
                            <input
                                type="file"
                                name="image"
                                id={`image-${i}`}
                                hidden
                                accept="image/*"
                                onChange={(e) => addImage(e, i)}
                            />
                            <label htmlFor={`image-${i}`}>
                                <img src="/images/image.svg" alt="image icon" />
                            </label>
                            <button onClick={(e) => showEmojiPicker(e, i)}>
                                <img src="/images/emoji.svg" alt="emoji icon" />
                            </button>
                            {emojiPicker[i] && (
                                <Picker
                                    theme="dark"
                                    color="#D94141"
                                    title=""
                                    showSkinTones={false}
                                    showPreview={false}
                                    skin={1}
                                    onSelect={(emoji) => writeEmoji(emoji, i)}
                                />
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </section>
    );
};

export default FAQ;
