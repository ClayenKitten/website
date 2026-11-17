import { getCollection } from "astro:content";

export async function getSkillGroups() {
    const groups = await getCollection("skillGroups");
    return groups
        .sort((a, b) => a.data.order - b.data.order)
        .map((g) => g.data);
}

export async function getContacts() {
    const [contacts] = await getCollection("contacts");
    if (!contacts) {
        throw new Error("Missing contacts data in content/contacts.toml");
    }
    return contacts.data;
}
