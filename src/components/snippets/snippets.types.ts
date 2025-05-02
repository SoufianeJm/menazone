export type Snippet = {
    /**
     * Unique ID for the snippet (used for links or future dynamic routing)
     */
    id: string;

    /**
     * Title shown on the card
     */
    title: string;

    /**
     * Full text content — preview is auto-sliced from this
     */
    content: string;
};
