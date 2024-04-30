import ConversationCard from "./ConversationCard";

const Conversations = () => {
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            <ConversationCard />
            <ConversationCard />
            <ConversationCard />
            <ConversationCard />
            <ConversationCard />
            <ConversationCard />
        </div>
    );
};
export default Conversations;