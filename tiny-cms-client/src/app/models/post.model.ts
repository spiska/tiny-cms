export class Post {
    title: string;
    text: string;
    user: string;
    date: Date;

    public static fromJson(jsonData: any): Post {
        if (jsonData) {
            let result = new Post();
            result.title = jsonData.title;
            result.text = jsonData.text;
            result.user = jsonData.user;
            result.date = new Date(jsonData.date);

            return result;
        }

        return null;
    }

    public static fromJsonArray(jsonData: Array<any>): Array<Post> {
        if (jsonData) {
            let result = new Array<Post>();
            jsonData.forEach(data => {
                result.push(Post.fromJson(data));
            })

            return result;
        }

        return null;
    }
}