export default interface Member {
    name: string,
    imgFileName: string,
    role: string,
    links: {
        linkedIn?: string,
        github?: string,
        instagram?: string,
        twitter?: string,
    },
}