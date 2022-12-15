import Category from "../models/Category";
import { IRepository } from "./IRepository";

export class CategoryRepository implements IRepository<Category> {
    get(id: string | number): Promise<Category[] | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Category): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(entity: Partial<Category>): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string | number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<Category[] | null> {
        return [
            {id : 1,title : 'Fantasy'},
            {id : 2,title : 'Suspense'}
        ]
    }
} 
