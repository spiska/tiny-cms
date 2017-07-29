export class User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;

    public static fromString(stringData: string): User {
        if (stringData) {
            return JSON.parse(stringData) as User;
        }

        return null;
    }
}