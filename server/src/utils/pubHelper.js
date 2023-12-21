import { PubSub } from "@google-cloud/pubsub";
import googleCreds from "./../../config/googleCredentials.json";

export const publishMessage = async (topicNameOrId, data) => {
    const pubSubClient = new PubSub({
        projectId: "se-oasis",
        credentials: googleCreds,
    });
    const dataBuffer = Buffer.from(JSON.stringify(data));

    try {
        const messageId = await pubSubClient
            .topic(`projects/se-oasis/topics/${topicNameOrId}`)
            .publishMessage({ data: dataBuffer });

        return `Message Published: ${messageId}`;
    } catch (error) {
        console.error(`Received error while publishing: ${error.message}`);
        return "error";
    }
};