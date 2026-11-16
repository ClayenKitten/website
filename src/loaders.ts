import { getCollection } from "astro:content";

export async function getSkillGroups() {
    const groups = await getCollection("skillGroups");
    return groups
        .sort((a, b) => a.data.order - b.data.order)
        .map((g) => g.data);
}

export async function getContacts() {
    const contacts = await getCollection("contacts");
    return contacts
        .sort((a, b) => a.data.order - b.data.order)
        .map(({ id, data }) => ({
            ...data,
            id,
            href: data.value.startsWith("http")
                ? data.value
                : `mailto:${data.value}`,
            external: data.value.startsWith("http"),
        }));
}
