enum Role {
    USER = 'USER',
    MEMBERS = 'MEMBERS',
    ADMIN = 'ADMIN'
}

export default interface Member {
    id: any
    name: string;
    imgFileName: string;
    role: Role;
    linkedIn?: string;
    github?: string;
    instagram?: string;
}