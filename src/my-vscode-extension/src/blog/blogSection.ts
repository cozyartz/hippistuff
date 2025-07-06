export class BlogSection {
    private posts: { id: number; title: string; content: string }[] = [];
    private nextId: number = 1;

    createPost(title: string, content: string): number {
        const newPost = { id: this.nextId, title, content };
        this.posts.push(newPost);
        this.nextId++;
        return newPost.id;
    }

    readPost(id: number): { id: number; title: string; content: string } | undefined {
        return this.posts.find(post => post.id === id);
    }

    updatePost(id: number, title: string, content: string): boolean {
        const post = this.posts.find(post => post.id === id);
        if (post) {
            post.title = title;
            post.content = content;
            return true;
        }
        return false;
    }

    deletePost(id: number): boolean {
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
            this.posts.splice(index, 1);
            return true;
        }
        return false;
    }

    listPosts(): { id: number; title: string }[] {
        return this.posts.map(post => ({ id: post.id, title: post.title }));
    }
}